import './index.css';
interface IToast {
    loading: (duration: number, content?: string) => void;
    loadingFancylife: (duration: number, content?: string) => void;
    hide: () => void;
}
declare const Toast: IToast;
export default Toast;
