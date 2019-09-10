interface Iconfig {
    type: string;
    src: string;
    elem: {
        width: number;
        height: number;
    };
    quality: number;
    userPPI: number;
    debug: boolean;
    ignoreWidth: boolean;
    ignoreHeight: boolean;
}
declare function adjustImgUrl(srcUrl: string, finalW: number, finalH: number, config: Iconfig): any;
declare function smartAdjustImgUrl(srcUrl: string, showW: number, showH: number, config: Iconfig): any;
interface Iobj {
    type: string;
    src: string;
    elem: {
        width: number;
        height: number;
    };
    quality: number;
    userPPI: number;
    debug: boolean;
    ignoreWidth: boolean;
    ignoreHeight: boolean;
}
declare class DatalazyPlugin {
    config: {
        type: string;
        src: string;
        elem: {
            width: number;
            height: number;
        };
        quality: number;
        userPPI: number;
        debug: boolean;
        ignoreWidth: boolean;
        ignoreHeight: boolean;
    };
    constructor(iconfig: Iconfig);
    dealLazyObj(obj: Iobj): void;
}
declare const _default: {
    DatalazyPlugin: typeof DatalazyPlugin;
    smartAdjustImgUrl: typeof smartAdjustImgUrl;
    adjustImgUrl: typeof adjustImgUrl;
};
export default _default;
