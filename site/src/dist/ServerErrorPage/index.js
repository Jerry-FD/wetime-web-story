import * as React from 'react';
import './index.css';
export default (props) => {
    const _url = 'http://videoplayer.babytreeimg.com/group-319@2x-1d5tbto1mq7idkoap6v921qqfg.png';
    const { refresh } = props;
    return (React.createElement("div", { className: "server_error-containter" },
        React.createElement("img", { src: _url, alt: "" }),
        React.createElement("div", { className: "server_error-desc" }, "\u670D\u52A1\u5668\u5F02\u5E38\uFF0C\u8BF7\u5237\u65B0\u91CD\u8BD5\uFF5E"),
        React.createElement("div", { className: "server_error-btn", onClick: refresh }, "\u5237\u65B0")));
};
