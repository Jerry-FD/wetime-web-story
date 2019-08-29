export default {
  documents: {
    'quick-start': require('./quick-start')
  },
  components: {
    '视图组件': {
      'default-page': require('./default-page'),
      'toast': require('./toast'),
      'notexist-page':require('./notexist-page'),
      'video': require('./video'),
      'serverError-page':require('./serverError-page')
    },
    '工具组件': {
      'utils': require('./utils'),
      'appInfo': require('./appInfo'),
      'hooks': require('./hooks'),
    },
    'cross-image': {
      'default-page': require('./default-page'),
    },
    'Http': {
      'default-page': require('./default-page'),
      'toast': require('./toast'),
      'video': require('./video')
    },
    'Native': {
      'default-page': require('./default-page'),
    }
    // 'Form': {
    //   'radio': require('./radio'),
    //   'checkbox': require('./checkbox'),
    //   'input': require('./input'),
    //   'input-number': require('./input-number'),
    //   'select': require('./select'),
    //   'cascader': require('./cascader'),
    //   'switch': require('./switch'),
    //   'slider': require('./slider'),
    //   'time-picker': require('./time-picker'),
    //   'date-picker': require('./date-picker'),
    //   'datetime-picker': require('./datetime-picker'),
    //   'upload': require('./upload'),
    //   'rate': require('./rate'),
    //   'color-picker': require('./color-picker'),
    //   'transfer': require('./transfer'),
    //   'form': require('./form')
    // },
    // 'Data': {
    //   'table': require('./table'),
    //   'tag': require('./tag'),
    //   'progress': require('./progress'),
    //   'tree': require('./tree'),
    //   'pagination': require('./pagination'),
    //   'badge': require('./badge')
    // },
    // 'Notice': {
    //   'alert': require('./alert'),
    //   'loading': require('./loading'),
    //   'message': require('./message'),
    //   'message-box': require('./message-box'),
    //   'notification': require('./notification')
    // },
    // 'Nav': {
    //   'menu': require('./menu'),
    //   'tabs': require('./tabs'),
    //   'breadcrumb': require('./breadcrumb'),
    //   'dropdown': require('./dropdown'),
    //   'steps': require('./steps')
    // },
    // 'Others': {
    //   'dialog': require('./dialog'),
    //   'tooltip': require('./tooltip'),
    //   'popover': require('./popover'),
    //   'card': require('./card'),
    //   'carousel': require('./carousel'),
    //   'collapse': require('./collapse')
    // }
  }
}
