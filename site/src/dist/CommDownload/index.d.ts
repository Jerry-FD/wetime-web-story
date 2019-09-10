import * as React from 'react';
import './index.css';
interface Iprops {
    href?: string;
    content?: string;
    download?: () => void;
    type?: string;
}
declare const CommDownload: React.SFC<Iprops>;
export default CommDownload;
