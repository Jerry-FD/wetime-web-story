import * as React from 'react'
import './index.css'

interface Iprops {
  refresh: () => void
}
export default (props: Iprops) => {
  const _url = 'http://videoplayer.babytreeimg.com/group-319@2x-1d5tbto1mq7idkoap6v921qqfg.png'
  const { refresh } = props
  return (
    <div className="server_error-containter">
      <img src={_url} alt="" />
      <div className="server_error-desc">
      服务器异常，请刷新重试～
      </div>
      <div className="server_error-btn" onClick={refresh}>
        刷新
      </div>
    </div>
  )
}
