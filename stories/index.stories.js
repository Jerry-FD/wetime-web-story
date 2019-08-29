import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button, Welcome } from '@storybook/react/demo'
import NotExitPage from '../dist/NotExistPage'
import Toast from '../dist/Toast'

console.log(99999, NotExitPage)
storiesOf('Welcome', module).add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')} />
))

// storiesOf('Button', module)
//     .add('with text', () => (
//         <Button onClick={action('clicked')}>Hello Button</Button>
//     ))
//     .add('with some emoji', () => (
//         <Button onClick={action('clicked')}>
//             <span role="img" aria-label="so cool">
//                 😀 😎 👍 💯
//             </span>
//         </Button>
//     ))

storiesOf('NotExitPage', module).add('不存在页面展示', () => <NotExitPage />)

storiesOf('Toast', module).add('样式1-3s消失', () => {
    const loadClick = () => Toast.loading(3000, '3秒消失')
    loadClick()
    return (
        <div style={{position: 'absolute', zIndex: 1003}}>
        </div>
    )
}).add('样式1-控制' , () => {
  const loadClick = () => Toast.loading(100000000, '加载中')
  loadClick()
  return (
      <div style={{position: 'absolute', zIndex: 1003}}>
        <Button  onClick={()=> {
          Toast.hide()
        }}>结束</Button>
      </div>
  )
}).add('样式2', () => {
  const loadClick = () => Toast.loadingFancylife(3000, '3秒消失')
  loadClick()
  return (
      <div style={{position: 'absolute', zIndex: 1003}}>
      </div>
  )
})
