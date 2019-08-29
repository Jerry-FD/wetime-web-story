import * as React from 'react'
import './index.css'

interface props {
  des: string;
  imgSrc: string;
  isBack: boolean;
}

class DefaultPage extends React.Component<props, any> {
  static defaultProps = {
    isBack: false,
    des: '记录已删除',
    imgSrc:
      'https://videoplayer.babytreeimg.com/balloon@2x-1d1d224i91llb1vn71fu112kk1dht9.png',
  }

  /* eslint-disable */
  backHandle = () => {
    const windowAny: any = window
    if (windowAny.nativeWebviewClose) {
      windowAny.nativeWebviewClose("");
    }
  }
  /* eslint-disable */

  render() {
    const { des, imgSrc, isBack } = this.props;
    return (
      <div className='wetime-defaultPage-container'>
        {isBack ? <span onClick={this.backHandle} /> : null}
        <img src={imgSrc} alt="" />
        <div>{des}</div>
      </div>
    );
  }
}

export default DefaultPage;
