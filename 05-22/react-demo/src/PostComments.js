import React, { Component } from 'react'
import styled from 'styled-components'
class PostComments extends Component {
  state = {
    comments: [
      {
        id: 1,
        body: 'vue 真的很不错'
      },
      {
        id: 2,
        body: 'react 也很不错'
      }
    ],
    text: ''
  }
  handleCommit = event => {
    // 修改 state 是一个异步操作
    this.setState({
      text: event.target.value
    })
    // react 表单要写成受控组件  第一： 将表单变化的东西写成 state 第二： 使用 onChang 事件修改 state ，修改成 event.target.value
  }
  render() {
    const commentsList = this.state.comments.map(comment => (
      <li key={comment.id}>{comment.body}</li>
    ))
    return (
      <Wrapper>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleCommit}
        />
        <button>评论</button>
        <ul>{commentsList}</ul>
      </Wrapper>
    )
  }
}

export default PostComments
const Wrapper = styled.div`
  width: 400px;
  height: 200px;
  background-color: #819a9e;
  border: 1px solid #ccc;
  margin: 50px auto;
`
