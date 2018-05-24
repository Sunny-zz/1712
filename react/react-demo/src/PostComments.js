import React, { Component } from 'react'
import styled from 'styled-components'
class PostComments extends Component {
  state = {
    text: ''
  }

  handleCommit = event => {
    // 修改 state 是一个异步操作
    this.setState({
      text: event.target.value
    })
    // 修改 state 为什么页面会改变 因为 state 变组件重新渲染 也就是 render 方法重新执行

    // react 表单要写成受控组件  第一： 将表单变化的东西写成 state 第二： 使用 onChang 事件修改 state ，修改成 event.target.value
  }
  addComment = () => {
    const { text } = this.state
    if (text.trim()) {
      this.props.addComment(text)
      this.setState({
        text: ''
      })
    }
  }
  deleteComment = id => {
    this.props.deleteComment(id)
  }
  // react 事件传递参数 要将调用事件传递参数 写在一个 箭头函数内 当做事件函数
  render() {
    const commentsList = this.props.comments.map(comment => (
      <li key={comment.id}>
        {comment.body}
        <button onClick={() => this.deleteComment(comment.id)}>删除</button>
      </li>
    ))
    return (
      <Wrapper>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleCommit}
        />
        <button onClick={this.addComment}>评论</button>
        <ul>{commentsList.reverse()}</ul>
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
