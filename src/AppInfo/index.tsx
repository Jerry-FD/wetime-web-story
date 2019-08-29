function getBrowserInfo() {
  const u = navigator.userAgent;
  return {
    trident: u.indexOf('Trident') > -1, //  IE内核
    presto: u.indexOf('Presto') > -1, //  opera内核
    webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, // 火狐内核
    mobile: !!u.match(/AppleWebKit.*Mobile.*/), //  是否为移动终端
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
    android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, // android终端
    iPhone: u.indexOf('iPhone') > -1, //  是否为iPhone或者QQHD浏览器
    iPad: u.indexOf('iPad') > -1, //  是否iPad
    weixin: u.indexOf('MicroMessenger') > -1, //  是否微信 （2015-01-22新增）
    x5: u.indexOf('TBS') > -1, // 是否是x5浏览器
    isInLamaApp: u.indexOf('lama') > -1,
    isInFancyLifeApp: u.indexOf('fancylife') > -1, // 是否是趣种草
  };
}

export default {
  getBrowserInfo,
};
