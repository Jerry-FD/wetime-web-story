import Markdown from '../../libs/markdown';

export default class Utils extends Markdown {
  document() {
    return require(`../../docs/zh-CN/utils.md`);
  }
}
