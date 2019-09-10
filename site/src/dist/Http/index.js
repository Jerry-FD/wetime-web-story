import queryString from 'query-string';
import AppInfo from '../AppInfo';
import Native from '../Native';
function getHandle(param, url, resolve, reject) {
    if (!param) {
        param = {};
    }
    const windowAny = window;
    windowAny.WebViewJavascriptBridge.callHandler('nativeGetUserInfo', JSON.stringify(param), (data) => {
        const _userInfo = typeof (data) === 'object' ? data : JSON.parse(data);
        const timestamp = Math.floor(new Date().getTime() / 1000);
        const _protocol = window.location.protocol.slice(0, -1);
        let encryptionParam = {};
        if (param.host && param.host === 'babytree') {
            encryptionParam = Object.assign({}, param, { protocol: _protocol, timestamp, host: 'http://mapiweb.babytree-test.com' });
        }
        else {
            encryptionParam = Object.assign({}, param, { protocol: _protocol, timestamp });
        }
        windowAny.WebViewJavascriptBridge.callHandler('nativeGetApiEncryption', JSON.stringify(encryptionParam), (dataN) => {
            const signature = typeof (dataN) === 'object' ? dataN : JSON.parse(dataN);
            delete param.host;
            // @ts-ignore
            fetch(url + '?' + queryString.stringify(Object.assign({}, param, { protocol: _protocol })), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    signature: signature.signature || signature.sigurature,
                    timestamp,
                    token: _userInfo.loginString,
                    loginstring: _userInfo.loginString,
                    platform: AppInfo.getBrowserInfo().ios ? '20' : '21',
                },
            })
                .then(res => res.json())
                .then(res => resolve(res))
                .catch(err => reject(err));
        });
    });
}
export function get(url, param) {
    const windowAny = window;
    return new Promise((resolve, reject) => {
        if (windowAny.WebViewJavascriptBridge) {
            getHandle(param, url, resolve, reject);
        }
        else {
            Native.init(() => {
                getHandle(param, url, resolve, reject);
            });
        }
    });
}
function postHandle(param, url, resolve, reject) {
    if (!param) {
        param = {};
    }
    const windowAny = window;
    windowAny.WebViewJavascriptBridge.callHandler('nativeGetUserInfo', JSON.stringify(param), (data) => {
        const _userInfo = typeof (data) === 'object' ? data : JSON.parse(data);
        const timestamp = Math.floor(new Date().getTime() / 1000);
        const _protocol = window.location.protocol.slice(0, -1);
        let encryptionParam = {};
        if (param.host && param.host === 'babytree') {
            encryptionParam = Object.assign({}, param, { protocol: _protocol, timestamp, host: 'http://mapiweb.babytree-test.com' });
        }
        else {
            encryptionParam = Object.assign({}, param, { protocol: _protocol, timestamp });
        }
        windowAny.WebViewJavascriptBridge.callHandler('nativeGetApiEncryption', JSON.stringify(encryptionParam), (dataenc) => {
            const _signature = typeof (dataenc) === 'object' ? dataenc : JSON.parse(dataenc);
            delete param.host;
            // @ts-ignore
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    signature: _signature.signature || _signature.sigurature,
                    timestamp,
                    token: _userInfo.loginString,
                    loginstring: _userInfo.loginString,
                    platform: AppInfo.getBrowserInfo().ios ? '20' : '21',
                },
                body: queryString.stringify(Object.assign({}, param, { protocol: _protocol })),
            })
                .then(res => res.json())
                .then(res => resolve(res))
                .catch(err => reject(err));
        });
    });
}
function post(url, param) {
    const windowAny = window;
    return new Promise((resolve, reject) => {
        if (windowAny.WebViewJavascriptBridge) {
            postHandle(param, url, resolve, reject);
        }
        else {
            Native.init(() => {
                postHandle(param, url, resolve, reject);
            });
        }
    });
}
function getH5(url, param) {
    return new Promise((resolve, reject) => {
        // @ts-ignore
        fetch(url + '?' + queryString.stringify(Object.assign({}, param)), {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                signature: 1,
                timestamp: 1,
                token: 1,
                loginstring: 1,
                platform: AppInfo.getBrowserInfo().ios ? '20' : '21',
            },
        })
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
}
function postH5(url, param) {
    return new Promise((resolve, reject) => {
        // @ts-ignore
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                signature: 1,
                timestamp: 1,
                token: 1,
                loginstring: 1,
                platform: 1,
            },
            body: queryString.stringify(param),
        })
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
}
export default {
    get,
    post,
    getH5,
    postH5,
};
