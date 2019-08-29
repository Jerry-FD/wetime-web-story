import Markdown from '../../libs/markdown';

export default class AppInfo extends Markdown {
    document() {
    return require(`../../docs/zh-CN/appInfo.md`);
    }
}
