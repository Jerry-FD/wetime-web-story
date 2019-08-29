## Toast 组件
小时光，趣种草Toast组件

### Loading用法

Toast Loading用法

:::demo Button 组件默认提供7种主题，由`type`属性来定义，默认为`default`。

```js
render() {
    const loadClick = () => Toast.loading()
    return (
        <div style={{width: '100%', height: '100%', transform: 'translate3d(0, 0, 0)'}}>
          <iframe width='375' height='675' src='http://wetime.babytree-test.com/h5/app/wetime-mobile-demo/toast.html' ></iframe>
        </div>
    )
}
```
:::

### API:
- Toast.loading(duration, content)
  > 小时光Toast专用

- Toast.loadingFancylife(duration, content)
  >  趣种草Toast专用

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| duration     | 展示时间   | number  |   any            |    3000    |
| content     | 图片链接   | string    |   - |     —    |

##### 注：现在只有loading，后面有需求可以加其他的toast方法


