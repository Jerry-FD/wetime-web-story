declare function getBrowserInfo(): {
    trident: boolean;
    presto: boolean;
    webKit: boolean;
    gecko: boolean;
    mobile: boolean;
    ios: boolean;
    android: boolean;
    iPhone: boolean;
    iPad: boolean;
    weixin: boolean;
    x5: boolean;
    isInLamaApp: boolean;
    isInFancyLifeApp: boolean;
};
declare const _default: {
    getBrowserInfo: typeof getBrowserInfo;
};
export default _default;
