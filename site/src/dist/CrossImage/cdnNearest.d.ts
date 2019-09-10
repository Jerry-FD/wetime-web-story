interface Iconfig {
    w: number;
    h: number;
    ignoreWidth: boolean;
    ignoreHeight: boolean;
}
interface Ia {
    w: number;
    h: number;
}
declare function cdnNearest(config: Iconfig): Ia | null;
export default cdnNearest;
