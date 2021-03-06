# wetime-mobile

> 小时光fe团队组件库

[![NPM](https://img.shields.io/npm/v/wetime-mobile.svg)](https://www.npmjs.com/package/wetime-mobile) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# 注
- 缺少单元测试部分

## 安装

```bash
bnpm install --save @bbt.wetime/wetime-mobile
```

## 使用

```tsx
import * as React from 'react'

import { DefaultPage } from '@bbt.wetime/wetime-mobile'

class Example extends React.Component {
  render () {
    return (
      <DefaultPage />
    )
  }
}
```


## gulp
- es6 输出，支持在项目中使用tree shaking
- eslint eslint-config-airbnb
配置修改：
- 支持less
- 翻译ts

## typescript
静态类型检测

## 参与开发
开发目录  src
- cd src
- mkdir component-name(大驼峰式命名法,例如DefaultPage)
- cd component-name
- touch index.tsx
- touch index.css
- touch test.tsx
- 开发完自己的组件 进入 src/index.tsx 像这样引入
```
export { default as Toast } from './Toast'
```
- 到此已经完成了组件的基本开发

---
注：
1. 组件开发需要使用[typescript](https://www.tslang.cn/index.html/)
2. 样式命名 遵从[BEM命名规范](https://www.jianshu.com/p/287a89b364f0)，例如 block-element_modifier


## 调试
调试目录 example
- 调试目录是一个单独的react脚手架搭建成的应用，作用是方便大家组件开发中的逻辑调试跟样式调试，我们可以这样直接引入需要调试的组件，在App.js中

```
import React, { Component } from 'react'
import './App.css'

import { DefaultPage } from 'wetime-mobile'

export default class App extends Component {
  componentDidMount() {
  }
  render () {
    return (
        <div className="App">
          <DefaultPage></DefaultPage>
        </div>
    )
  }
}
```
- 热刷新 npm run watch
- 当然也启用组件的实时编译 在根目录下 npm start

## 文档
文档目录 site
site下也是一个单独的react脚手架搭建成的应用，作用是生成对应的文档APP
- 创建组件文档 在site/src/docs/zh-CN 下创建对应的组件的.md文件并写好对应的readme
- 创建组件路由 在site/src/pages 下创建对应路由
- 创建对应menu 在site/src/locales 下创建的对应的menu
文档APP demo
- 因为组件是给移动端使用的，有时候写文档时会用到APP环境下的demo
- wetime-web下 wetime-mobile-demo 是专门给文档创造demo使用的仓库
- wetime-mobile-demo的发布流程跟wetime-web下的其他项目一样


## 构建
npm run build
- 构建目录 dist

## 提交
提交是提交到gitlab
- npm run prepare
- git add .
- git commit -m ''
- git push

## 发布
发布到公司私服
bnpm login  (用户名：bbsfe   密码：bbsfe)
bnpm publish
---

## 组件list

| 基础组件      | 业务组件    | 功能组件     |
|---------- |-------- |---------- |
| DefaultPage(已完成)   | withComment  | crossImage(已完成)  |
| Toast loading(已完成)   | CommDownload (已完成) |     |
| Video (已完成)   | Deeplink(已完成)  |   utils(随时补充)  |
| TransformPage |    |     |
| 瀑布流   |    |     |
| dialog  |    |     |
| HTTP（趣种草）(已完成)   |    |     |
| Native （趣种草)(已完成)|    |     |
| serverErrorPage （趣种草)(已完成)  |    |     |
| AppInfo (已完成) |    |     |

## 组件开发计划排期
原则：团队每人每周贡献一个组件

| 1.21-1.25      | 1.28-2.1    | 2.11-2.15| 2.18-2.22|
|---------- |-------- |---------- |---------- |
| DefaultPage(已完成)   | video(已完成)  | Deeplink(已完成)  | TransformPage |
| Toast loading(已完成)   |   |   crossImage  |withComment|
|    |   |   CommDownload(已完成)  |瀑布流|
| utils 公用组件在开发其他组件用到时，开发者添加|  dialog|

