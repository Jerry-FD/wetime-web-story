const isToday = require('date-fns/is_today');
const format = require('date-fns/format');
const isYesterday = require('date-fns/is_yesterday');
const isSameDay = require('date-fns/is_same_day');
const subDays = require('date-fns/sub_days');
// 过万点赞数显示
function transformCommNum(num) {
    if (typeof num === 'number') {
        if (num > 9999) {
            const numStr = num / 10000 + '';
            return numStr.substring(0, numStr.indexOf(".") + 2) + '万';
        }
        return Math.floor(num);
    }
    return num;
}
function getParam(url, name) {
    const reg = new RegExp("(^|&|\\?)" + name + "=([^&]*)(&|$)");
    const r = url.match(reg);
    if (r !== null) {
        return decodeURIComponent(r[2]);
    }
    return null;
}
function getWetimeHost(env, app = 'api') {
    const host = window.location.host;
    const protocol = window.location.protocol;
    if (env === 'php') {
        const _api = app;
        const HostObj = {
            dev: `${protocol}//${_api}-yangqianyi.babytree-dev.com`,
            test: `${protocol}//${_api}-20.babytree-test.com`,
            pre: `${protocol}//${_api}-pre-fpm.babytree.com`,
            online: `${protocol}//${_api}.babytree.com`,
        };
        if (host.indexOf('dev') > -1)
            return HostObj.dev;
        if (host.indexOf('test') > -1)
            return HostObj.test;
        if (host.indexOf('pre') > -1)
            return HostObj.pre;
        return HostObj.online;
    }
    if (env === 'java') {
        const HostObj = {
            dev: `${protocol}//wetime-web.babytree-dev.com`,
            test: `${protocol}//wetime-web.babytree-test.com`,
            pre: `${protocol}//prewetime-web.babytree-test.com`,
            online: `${protocol}//wetimeapi.babytree.com`,
        };
        if (host.indexOf('dev') > -1)
            return HostObj.dev;
        if (host.indexOf('test') > -1)
            return HostObj.test;
        if (host.indexOf('pre') > -1)
            return HostObj.pre;
        return HostObj.online;
    }
    if (env === 'web') {
        const HostObj = {
            dev: `${protocol}//wetime.babytree-dev.com`,
            test: `${protocol}//wetime.babytree-test.com`,
            pre: `${protocol}//wetime.pre.fpm.babytree.com`,
            online: `${protocol}//wetime.babytree.com`,
        };
        if (host.indexOf('dev') > -1)
            return HostObj.dev;
        if (host.indexOf('test') > -1)
            return HostObj.test;
        if (host.indexOf('pre') > -1)
            return HostObj.pre;
        return HostObj.online;
    }
    return '';
}
export function getFancylifeHost() {
    const host = window.location.host;
    const protocol = window.location.protocol;
    const HostObj = {
        test: `${protocol}//sit-m.quzhongcao.cn`,
        pre: `${protocol}//pre-m.quzhongcao.cn`,
        online: `${protocol}//m.quzhongcao.cn`,
    };
    if (host.indexOf('sit') > -1)
        return HostObj.test;
    if (host.indexOf('pre') > -1)
        return HostObj.pre;
    return HostObj.online;
}
export function getMapiHost() {
    const host = window.location.host;
    const protocol = window.location.protocol;
    const HostObj = {
        test: `${protocol}//mapiweb.babytree-test.com`,
        pre: `${protocol}//premapiweb.babytree-test.com`,
        online: `${protocol}//mapiweb.babytree.com`,
    };
    if (host.indexOf('sit') > -1)
        return HostObj.test;
    if (host.indexOf('pre') > -1)
        return HostObj.pre;
    return HostObj.online;
}
export function getMeitunHost() {
    const host = window.location.host;
    const protocol = window.location.protocol;
    const HostObj = {
        test: `${protocol}//sit-m.meitun.com`,
        pre: `${protocol}//pre-m.meitun.com`,
        online: `${protocol}//m.meitun.com`,
    };
    if (host.indexOf('sit') > -1)
        return HostObj.test;
    if (host.indexOf('pre') > -1)
        return HostObj.pre;
    return HostObj.online;
}
// 视频时间格式转化
function formatMiniutes(time) {
    let second = 0;
    let miniutes = 0;
    let _second = '';
    let _miniutes = '';
    miniutes = Math.floor(time / 60);
    second = time - miniutes * 60;
    if (Math.floor(second) < 10) {
        _second = '0' + Math.floor(second);
    }
    else {
        _second = Math.floor(second).toString();
    }
    if (miniutes < 10) {
        _miniutes = `0${miniutes}`;
    }
    return `${_miniutes}:${_second}`;
}
// 新版评论时间显示
export function commentTimeTransform(time) {
    if (isToday(time)) {
        return format(time, 'HH:mm');
    }
    if (isYesterday(time)) {
        return '昨天 ' + format(time, 'HH:mm');
    }
    if (isSameDay(subDays(new Date(), 2), new Date(time))) {
        return '前天 ' + format(time, 'HH:mm');
    }
    return format(time, 'YYYY-MM-DD HH:mm');
}
//  静态资源协议转化
export function httpTohttps(url) {
    const protocol = window.location.protocol;
    if (typeof (url) === 'string') {
        return protocol + url.split(':')[1];
    }
    return url;
}
export default {
    transformCommNum,
    getParam,
    getWetimeHost,
    getFancylifeHost,
    formatMiniutes,
    commentTimeTransform,
    getMapiHost,
    httpTohttps,
};
