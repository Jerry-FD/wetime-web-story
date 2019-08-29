// /userinfo/2144/id => ['/userinfo','/useinfo/2144,'/userindo/2144/id']
import cdnNearest from './cdnNearest.js'
import WebpSupport from './webp'
// webp后缀，不设开关
let WEBPSUFFIX = ''
const DEFAULT_QUALITY = 90
const DEFAULT_HD_JPG_QUALITY = 50
const DEFAULT_HD_WEBP_QUALITY = 75

WEBPSUFFIX = WebpSupport.isSupport() ? 'webp' : ''
interface Iconfig {
    type: string,
    src: string,
    elem: {
        width: number,
        height: number
    },
    quality: number,
    userPPI: number,
    debug: boolean,
    ignoreWidth: boolean,
    ignoreHeight: boolean
}

function getDevicePixelRatio() {
  return ((window.devicePixelRatio) && (window.devicePixelRatio > 1)) ? 2 : 1;
}

// callback:(resultQuality: number)=>{}
function getQuality(userQuality: number|null): number|null {
  let resultQuality;
  if (userQuality) { // 用户指定了质量参数
    resultQuality = userQuality;
    return resultQuality
  }
  resultQuality = DEFAULT_QUALITY;
  if (getDevicePixelRatio() > 1) {
    const isSupport = WebpSupport.isSupport()
    resultQuality = isSupport ? DEFAULT_HD_WEBP_QUALITY : DEFAULT_HD_JPG_QUALITY;
    return resultQuality
  }
  return resultQuality
}


function adjustImgUrl(srcUrl: string, finalW: number, finalH: number, config: Iconfig) {
  if (!srcUrl || (!finalW && !finalH)) return srcUrl;
  let quality;
  if (!config || !config.quality) {
    quality = DEFAULT_QUALITY;
    quality = getQuality(null)
  } else {
    quality = config.quality;
  }
  const rawSrc = srcUrl.replace(/_\d+x\d+(q\d+)?\.jpg/g, '').replace(/_q\d+\.jpg/g, '').replace(/_\.webp/, ''),
    ignoreWidth = (config && config.ignoreWidth),
    ignoreHeight = (config && config.ignoreHeight);
  let finalSrc,
    cdnW,
    cdnH
  // 寻找最匹配的宽高
  const targetPair = cdnNearest({
    w: finalW,
    h: finalH,
    ignoreWidth,
    ignoreHeight,
  });

  if (WEBPSUFFIX === '') {
    const path = rawSrc.substring(rawSrc.lastIndexOf('.') + 1);
    if (path === 'png' || path === 'jpeg' || path === 'bmp' || path === 'jpg' || path === 'gif') {
      WEBPSUFFIX = path;
    } else {
      WEBPSUFFIX = 'jpg'
    }
  }

  if (!targetPair || !targetPair.w || !targetPair.h) {
    // finalSrc = rawSrc + "_q@Q.jpg@WEBP".replace(/@Q/ , quality).replace(/@WEBP/,WEBPSUFFIX);
    finalSrc = rawSrc + '?imageMogr2/quality/@Q/format/@WEBP'.replace(/@Q/, quality.toString()).replace(/@WEBP/, WEBPSUFFIX);
  } else {
    cdnW = targetPair.w;
    cdnH = targetPair.h;
    // finalSrc = rawSrc + "_@Wx@Hq@Q.jpg@WEBP".replace(/@W/i,cdnW).replace(/@H/i,cdnH).replace(/@Q/,quality).replace(/@WEBP/,WEBPSUFFIX);
    finalSrc = rawSrc + '?imageMogr2/thumbnail/@Wx@H/quality/@Q/format/@WEBP'.replace(/@W/i, cdnW.toString()).replace(/@H/i, cdnH.toString()).replace(/@Q/, quality.toString()).replace(/@WEBP/, WEBPSUFFIX);
    // ?imageMogr2/thumbnail/200x300/quality/50/format/webp
  }
  return finalSrc;
}

// 根据expect值，结合dpr，自动调整URL
function smartAdjustImgUrl(srcUrl: string, showW: number, showH: number, config: Iconfig) {
  let finalW = showW,
    finalH = showH;
  if (showH) {
    finalW = showW * getDevicePixelRatio()
    finalH = showH * getDevicePixelRatio()
  }
  return adjustImgUrl(srcUrl, finalW, finalH, config);
}

// 兼容IE6，7，8
function hasAttribute(el: any, name: string) {
  if (el.hasAttribute) {
    return el.hasAttribute(name);
  }
  return (typeof el.getAttribute(name) === 'string');
}
interface Iobj{
    type: string,
    src: string,
    elem: {
        width: number,
        height: number
    },
    quality: number,
    userPPI: number,
    debug: boolean,
    ignoreWidth: boolean,
    ignoreHeight: boolean,
}

class DatalazyPlugin {
  config: {
    type: string,
    src: string,
    elem: {
        width: number,
        height: number
    },
    quality: number,
    userPPI: number,
    debug: boolean,
    ignoreWidth: boolean,
    ignoreHeight: boolean,
  };

  constructor(iconfig: Iconfig) {
    const defaultConfig = {
      quality: DEFAULT_QUALITY, // 默认载入q90
      userPPI: getDevicePixelRatio(),
    };
    this.config = Object.assign(defaultConfig, iconfig);
    if (!(iconfig && iconfig.quality)) {
      this.config.quality = getQuality(null) || 0
    }
    this.dealLazyObj(this.config);
  }

  dealLazyObj(obj: Iobj) {
    if (obj.type !== 'img' || !obj.elem || !obj.src || !/http/.test(obj.src) || hasAttribute(obj.elem, 'crossimage-ignore')) return;

    if (hasAttribute(obj.elem, 'crossimage-widthOnly')) { // widthOnly模式，但未指定宽度
      if (!obj.elem.width) return;
    } else if (hasAttribute(obj.elem, 'crossimage-heightOnly')) {
      if (!obj.elem.height) return;
    }
    if (!obj.elem.height || !obj.elem.width) {
      return;
    }
    try {
      const imgEle = obj.elem,
        expectW = imgEle.width * this.config.userPPI,
        expectH = imgEle.height * this.config.userPPI,
        currentSrc = obj.src

      const finalSrc = adjustImgUrl(currentSrc, expectW, expectH, {
        type: '',
        src: '',
        elem: {
          width: 0,
          height: 0,
        },
        userPPI: 0,
        debug: false,
        quality: this.config.quality,
        ignoreWidth: hasAttribute(obj.elem, 'crossimage-heightOnly'),
        ignoreHeight: hasAttribute(obj.elem, 'crossimage-widthOnly'),
      });

      obj.src = finalSrc;

      if (this.config && this.config.debug && window.console) {
        console.log('ppi : ' + this.config.userPPI);
        console.log('webp : ' + WEBPSUFFIX);
        console.log('src: __xx__y expect : __ax__b'.replace(/__a/, expectW.toString()).replace(/__b/, expectH.toString()).replace(/__x/, imgEle.width.toString()).replace(/__y/, imgEle.height.toString()));
        console.log('target: ' + finalSrc);
        console.log('===========');
      }
    } catch (e) {
      console.log(e)
    }
  }
}
export default {
  DatalazyPlugin,
  smartAdjustImgUrl,
  adjustImgUrl,
}
