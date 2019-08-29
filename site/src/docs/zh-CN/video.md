## Video 组件
小时光Video组件
### 基础用法


:::demo Button 组件默认提供7种主题，由`type`属性来定义，默认为`default`。

```js
render() {
    return (
        <div style={{width: '100%', height: '100%', transform: 'translate3d(0, 0, 0)'}}>
          <iframe width='375' height='675' src='http://wetime.babytree-test.com/h5/app/wetime-mobile-demo/index.html#/video' ></iframe>
        </div>
    )
}
```
:::



### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| autoPlay     | 自动播放   | bool  |   -            |    false    |
| playsInline     | 内联播放   | bool    |   - |     false   |
| poster     | 视频封面   | string    |   - |     -   |
| source     | 视频资源   | string    |   - |     -   |
| loop     | 循环播放   | bool    |   - |     false   |
| isDeviceOrientation     | 允许自动横屏效果   | bool    |   - |     true   |
| topBar     | 视频顶部信息栏   | react.element    |   - |     -   |
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
| togglePlay     | 暂停播放触发函数（用于埋点等场景用）   | function    |   - |     -   |
| toggleFullscreen     | 全屏触发函数（用于埋点等场景用）   | function    |   - |     -   |
| subscribeToStateChange(listener)    | 监听获取   | function    |   - |     -   |






