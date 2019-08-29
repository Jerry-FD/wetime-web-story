## Toast 组件

小时光，趣种草 Toast 组件

### Loading 用法

Toast Loading 用法

:::demo Button 组件默认提供 7 种主题，由`type`属性来定义，默认为`default`。

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

-   Toast.loading(duration, content)

    > 小时光 Toast 专用

-   Toast.loadingFancylife(duration, content)
    > 趣种草 Toast 专用

### Attributes

| 参数     | 说明     | 类型   | 可选值 | 默认值 |
| -------- | -------- | ------ | ------ | ------ |
| duration | 展示时间 | number | any    | 3000   |
| content  | 图片链接 | string | -      | —      |

##### 注：现在只有 loading，后面有需求可以加其他的 toast 方法
