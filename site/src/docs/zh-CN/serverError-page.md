## ServerErrorPage 组件(支持趣种草h5)
趣种草网络错误页面组件

### 基础用法

基础的按钮用法。

:::demo Button 组件默认提供7种主题，由`type`属性来定义，默认为`default`。

```js
render() {
    return (
        <div style={{width: '100%', height: '100%'}}>
          <iframe width='375' height='675' src='http://wetime.babytree-test.com/h5/app/wetime-mobile-demo/serverError_page.html' ></iframe>
        </div>
    )
}
```
:::


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| refresh     | 刷新按钮事件   | Function  |               |    ()=>{}    |
