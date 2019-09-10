import * as React from 'react';
import './index.css';
interface props {
    des: string;
    imgSrc: string;
    isBack: boolean;
}
declare class DefaultPage extends React.Component<props, any> {
    static defaultProps: {
        isBack: boolean;
        des: string;
        imgSrc: string;
    };
    backHandle: () => void;
    render(): JSX.Element;
}
export default DefaultPage;
