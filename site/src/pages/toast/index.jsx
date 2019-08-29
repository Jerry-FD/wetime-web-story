import Markdown from '../../libs/markdown';

export default class Toast extends Markdown {
  document() {
    return require(`../../docs/zh-CN/toast.md`);
  }
}
