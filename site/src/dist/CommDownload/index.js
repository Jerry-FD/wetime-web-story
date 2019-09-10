import * as React from 'react';
import './index.css';
const CommDownload = (props = { href: '', download: () => { }, type: 'lama' }) => {
    const { content = '', download, type = 'lama' } = props;
    return (React.createElement("div", { className: "wetime-commdownload" },
        React.createElement("div", { className: "commdownload_wrap" },
            React.createElement("div", { className: "content-wrap" },
                React.createElement("div", { className: "commdownload-img_wrap" }, type === 'lama'
                    ? React.createElement("img", { className: "wetime-logo", src: "http://videoplayer.babytreeimg.com/icon-copy-1cv2gmtfpennvqeeu21u261hs5j.png", alt: "" })
                    : React.createElement("img", { className: "fancylife-logo", src: "http://videoplayer.babytreeimg.com/o_1d7guam6k1osk1jkp5f9kt157f9-1d7guam6k1osk1jkp5f9kt157f9.png", alt: "" })),
                type === 'lama'
                    ? (React.createElement("div", { className: "content" },
                        React.createElement("div", { className: "title" }, "\u5B9D\u5B9D\u6811\u5C0F\u65F6\u5149"),
                        React.createElement("div", { className: "desc" }, content || '记录亲自时光，分享美好时光')))
                    : (React.createElement("div", { className: "content" },
                        React.createElement("div", { className: "title" }, "\u8DA3\u79CD\u8349"),
                        React.createElement("div", { className: "desc" }, content || '年轻人都爱逛的种草社区')))),
            type === 'lama'
                ? (React.createElement("div", { onClick: download },
                    React.createElement("img", { className: "btn", src: "http://videoplayer.babytreeimg.com/post-1cv2gmp6ar2hj3249j1murf2be.png", alt: "" })))
                : (React.createElement("div", { className: "downlaod-btn", id: "download-btn", onClick: download }, "\u4E0B\u8F7DApp")))));
};
export default CommDownload;
