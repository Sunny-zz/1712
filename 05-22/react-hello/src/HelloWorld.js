import React, { Component } from 'react'
import styled from 'styled-components'
class HelloWorld extends Component {
  state = {
    text: 'hello',
    comments: [
      {
        id: 1,
        body: 'hahaha'
      },
      {
        id: 2,
        body: 'lalala'
      }
    ]
  }
  // handleClick() {
  //   // 使用组件的 setState 方法修改 state
  //   this.setState({
  //     text: 'hello world'
  //   })
  // }
  // 定义函数时 如果函数内部使用了 this(这个组件) 请将函数定义成 es6 的箭头函数
  handleClick = () => {
    this.setState({
      text: 'hello world'
    })
  }
  render() {
    const styles = { color: 'red', fontSize: '50px' }
    const commentsList = this.state.comments.map(comment => (
      <li key={comment.id}>{comment.body}</li>
    ))
    return (
      <Wrapper>
        <h1 className="hello" style={styles}>
          {this.state.text}
        </h1>
        <ul>{commentsList}</ul>
        <button onClick={this.handleClick}>按钮</button>
      </Wrapper>
    )
  }
}
export default HelloWorld

const Wrapper = styled.div`
  background-color: yellow;
`
// 因为 react 的行内样式 要写成 style = {} 形式 所以在 jsx 之中要写成 style ={{ color:'red' }}
// npm install --save styled-components 安装这个包可以将组件的样式私有
