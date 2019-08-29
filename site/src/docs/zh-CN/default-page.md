## DefaultPage 组件(支持小时光h5)
小时光常用缺省页组件

### 基础用法

基础的按钮用法。

:::demo Button 组件默认提供7种主题，由`type`属性来定义，默认为`default`。

```js
render() {
    return (
        <div style={{width: '100%', height: '100%'}}>
          <iframe width='375' height='675' src='http://wetime.babytree-test.com/h5/app/wetime-mobile-demo/index.html#/defaultPage' ></iframe>
        </div>
    )
}
```
:::


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| des     | 文字描述   | string  |   any            |    记录已删除    |
| imgSrc     | 图片链接   | string    |   - |     —    |
| isBack     | 是否有返回按钮   | Boolean    | true,false | false   |
