import * as React from 'react'
import './index.css'
// import Deeplink from '../DeepLink'

interface Iprops {
  href?: string,
  content?: string,
  download?: () => void,
  type?: string
}

const CommDownload: React.SFC<Iprops> = (props = { href: '', download: () => {}, type: 'lama' }) => {
  const { content = '', download, type = 'lama' } = props
  return (
    <div className="wetime-commdownload">
      <div className="commdownload_wrap">
        <div className="content-wrap">
          <div className="commdownload-img_wrap">
            {
              type === 'lama'
                ? <img className="wetime-logo" src="http://videoplayer.babytreeimg.com/icon-copy-1cv2gmtfpennvqeeu21u261hs5j.png" alt="" />
                : <img className="fancylife-logo" src="http://videoplayer.babytreeimg.com/o_1d7guam6k1osk1jkp5f9kt157f9-1d7guam6k1osk1jkp5f9kt157f9.png" alt="" />
            }
          </div>
          {
            type === 'lama'
              ? (
                <div className="content">
                  <div className="title">宝宝树小时光</div>
                  <div className="desc">{ content || '记录亲自时光，分享美好时光' }</div>
                </div>
              )
              : (
                <div className="content">
                  <div className="title">趣种草</div>
                  <div className="desc">{ content || '年轻人都爱逛的种草社区' }</div>
                </div>
              )
          }
        </div>
        {
          type === 'lama'
            ? (
              <div onClick={download}>
                <img className="btn" src="http://videoplayer.babytreeimg.com/post-1cv2gmp6ar2hj3249j1murf2be.png" alt="" />
              </div>
            )
            : (
              <div className="downlaod-btn" id="download-btn" onClick={download}>
                下载App
              </div>
            )
        }
      </div>
    </div>
  )
}

export default CommDownload
