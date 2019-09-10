import * as React from 'react';
import './index.css';
class DefaultPage extends React.Component {
    constructor() {
        super(...arguments);
        /* eslint-disable */
        this.backHandle = () => {
            const windowAny = window;
            if (windowAny.nativeWebviewClose) {
                windowAny.nativeWebviewClose("");
            }
        };
    }
    /* eslint-disable */
    render() {
        const { des, imgSrc, isBack } = this.props;
        return (React.createElement("div", { className: 'wetime-defaultPage-container' },
            isBack ? React.createElement("span", { onClick: this.backHandle }) : null,
            React.createElement("img", { src: imgSrc, alt: "" }),
            React.createElement("div", null, des)));
    }
}
DefaultPage.defaultProps = {
    isBack: false,
    des: '记录已删除',
    imgSrc: 'https://videoplayer.babytreeimg.com/balloon@2x-1d1d224i91llb1vn71fu112kk1dht9.png',
};
export default DefaultPage;
