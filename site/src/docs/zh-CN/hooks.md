# Hooks 函数
react hooks函数，需要在v16.8及以后版本使用
## 1. useIntersectionObserver
> 监听页面某一元素是否在可视区域
### Arguments
  - callback(Function): 回调函数
  - element(Element): 需要监听的Dom元素
  - option(?Object): [IntersectionObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver)
### 用法
```
import { Hooks } from '@bbt.wetime/wetime-mobile'
Hooks.useIntersectionObserver((e) => {
        if(e[0].intersectionRatio === 1) {
            setTimeout(() => {
                // if(!!window.isAutoPlay) {
                    window.currentVideo = ref.current
                    Array.from(document.getElementsByTagName('video')).forEach(video => {
                            video.pause()
                    })
                    if(window.videoCanAutoPlay) {
                        ref.current && ref.current.play()

                    }
                // }
                // setLoading(true)
            }, 500)
        } else {
            ref.current && ref.current.pause()
        }

    }, ref.current, {
        threshold: [0, 1]
})
```

## 2. useIsContentMore
> 根据传入字数限定，返回需要隐藏展示的内容，可以处理换行符

### Arguments
  - content(String): 需要传入的段落内容
  - num(Number): 字符限定字数

### Return
  - [content, hasMore]
    - content(String): 处理后的字符串
    - hasMore: 是否展开

## 3. useInterval
> 函数组件执行的时候，会设置一个setInterval的定时器
### Arguments
  - callback(Function): 回调函数
  - delay(String): 每隔多少时间调用一次callback

### 用法
```
import { Hooks } from '@bbt.wetime/wetime-mobile'
Hooks.useInterval(() => {
  ...
}, 500)
```
