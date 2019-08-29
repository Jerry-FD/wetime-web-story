import Markdown from '../../libs/markdown';

export default class Video extends Markdown {
  document() {
    return require(`../../docs/zh-CN/video.md`);
  }
}
