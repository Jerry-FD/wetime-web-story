export declare function get(url: string, param: Object): Promise<any>;
declare function post(url: string, param: Object): Promise<any>;
declare function getH5(url: string, param: Object): Promise<any>;
declare function postH5(url: string, param: Object): Promise<any>;
declare const _default: {
    get: typeof get;
    post: typeof post;
    getH5: typeof getH5;
    postH5: typeof postH5;
};
export default _default;
