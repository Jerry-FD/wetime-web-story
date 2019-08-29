import Markdown from '../../libs/markdown';

export default class DefaultPage extends Markdown {
  document() {
    return require(`../../docs/zh-CN/default-page.md`);
  }
}
