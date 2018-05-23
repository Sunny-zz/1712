import React, { Component } from 'react'
import HelloWorld from './HelloWorld'
class App extends Component {
  render() {
    return (
      <div>
        <HelloWorld />
      </div>
    )
  }
}

export default App

// jsx 语法  必须导入 React 才能支持 jsx 语法
// 如果想要在 jsx 语法内写 js 的话 必须要使用大括号包裹
