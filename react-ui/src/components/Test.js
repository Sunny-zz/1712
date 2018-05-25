import React, { Component } from 'react'

class Test extends Component {
  // props 的另外一种用法，在父组件内将传递的 props 写在开始标签和结束标签内部，子组件使用 this.props.children 获取
  render() {
    console.log(this.props.children)
    return <button>{this.props.children}</button>
  }
}

export default Test
