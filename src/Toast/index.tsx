import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'

interface IToast {
  loading: (duration: number, content?: string) => void,
  loadingFancylife: (duration: number, content?: string) => void,
  hide: () => void,
}

function load(duration = 3000, content: string) {
  if (document.getElementById('wetimeToast')) return
  const div = document.createElement('div')
  div.addEventListener('touchstart', (e) => { e.preventDefault() }, { passive: false })
  div.id = 'wetimeToast'
  div.className = 'wetime-toast'
  document.body.appendChild(div)
  setTimeout(() => {
    this.hide()
  }, duration)
  ReactDOM.render(
    <div className="wetime-toast">
      <div className="wetime-toast_wrap">
        <svg className="toast-refresh_icon" viewBox="0 0 39.24 39.24" xmlns="http://www.w3.org/2000/svg">
          <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="93.93" x2="113.26" y1="83.68" y2="83.68">
            <stop offset="0" stopColor="#fff" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <circle cx="19.62" cy="19.62" fill="none" opacity=".8" r="16.62" stroke="#818181" strokeMiterlimit="10" strokeWidth="6" />
          <path d="m113.25 92.21a19.2 19.2 0 0 0 -15.84-19.86 2.82 2.82 0 0 0 -3.41 2.12 3.2 3.2 0 0 0 2.22 3.72 13.7 13.7 0 0 1 11.09 14 3 3 0 0 0 3.08 2.87 2.87 2.87 0 0 0 2.87-2.87z" fill="url(#a)" transform="translate(-74.11 -72)" />
        </svg>
        {
          content
            ? <div className="wetime-toast_text">{content}</div> : null
        }
      </div>
    </div>, div,
  )
}

function loadFancylife(duration = 3000, content = '加载中') {
  if (document.getElementById('wetimeToast')) return
  const div = document.createElement('div')
  div.addEventListener('touchstart', (e) => { e.preventDefault() }, { passive: false })
  div.id = 'wetimeToast'
  div.className = 'wetime-toast-fancylife'
  document.body.appendChild(div)
  setTimeout(() => {
    this.hide()
  }, duration)
  ReactDOM.render(
    <div className="wetime-toast-fancylife">
      <div className="wetime-toast_wrap">
        <svg className="toast-refresh_icon" viewBox="0 0 39.24 39.24" xmlns="http://www.w3.org/2000/svg">
          <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="93.93" x2="113.26" y1="83.68" y2="83.68">
            <stop offset="0" stopColor="#fff" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <circle cx="19.62" cy="19.62" fill="none" opacity=".8" r="16.62" stroke="#818181" strokeMiterlimit="10" strokeWidth="6" />
          <path d="m113.25 92.21a19.2 19.2 0 0 0 -15.84-19.86 2.82 2.82 0 0 0 -3.41 2.12 3.2 3.2 0 0 0 2.22 3.72 13.7 13.7 0 0 1 11.09 14 3 3 0 0 0 3.08 2.87 2.87 2.87 0 0 0 2.87-2.87z" fill="url(#a)" transform="translate(-74.11 -72)" />
        </svg>
        {
          content
            ? <div className="wetime-toast_text">{content}</div> : null
        }
      </div>
    </div>, div,
  )
}

function hideFn() {
  const div: any = document.getElementById('wetimeToast')
  if (div !== null) {
    ReactDOM.unmountComponentAtNode(div);
    div.parentNode.removeChild(div);
  }
}

const Toast: IToast = {
  loading: load,
  loadingFancylife: loadFancylife,
  hide: hideFn,
}


export default Toast
