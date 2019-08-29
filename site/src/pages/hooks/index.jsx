import Markdown from '../../libs/markdown';

export default class Hooks extends Markdown {
    document() {
    return require(`../../docs/zh-CN/hooks.md`);
    }
}
