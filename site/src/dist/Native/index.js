function setupWebViewJavascriptBridge(callback) {
    const windowAny = window;
    const bridge = windowAny.WebViewJavascriptBridge || windowAny.WKWebViewJavascriptBridge;
    if (bridge) {
        return callback(bridge);
    }
    const callbacks = windowAny.WVJBCallbacks || windowAny.WKWVJBCallbacks;
    if (callbacks) {
        return callbacks.push(callback);
    }
    windowAny.WVJBCallbacks = [callback];
    windowAny.WKWVJBCallbacks = [callback];
    if (windowAny.WKWebViewJavascriptBridge) {
        // for https://github.com/Lision/WKWebViewJavascriptBridge
        windowAny.webkit.messageHandlers.iOS_Native_InjectJavascript.postMessage(null);
    }
    else {
        // for https://github.com/marcuswestin/WebViewJavascriptBridge
        const WVJBIframe = document.createElement('iframe');
        WVJBIframe.style.display = 'none';
        WVJBIframe.src = 'https://__bridge_loaded__';
        document.documentElement.appendChild(WVJBIframe);
        setTimeout(() => { document.documentElement.removeChild(WVJBIframe); }, 0);
    }
}
function init(cb) {
    setupWebViewJavascriptBridge(cb);
}
export default {
    init,
};
