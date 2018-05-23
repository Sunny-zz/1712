import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
class PostComments extends Component {
  state = {
    comments: [],
    text: ''
  }
  componentDidMount() {
    const uri = 'http://localhost:3008/comments'
    const { postId } = this.props
    axios.get(uri).then(res => {
      this.setState({
        comments: res.data.filter(commet => commet.postId.toString() === postId)
      })
    })
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
    if (this.state.text.trim()) {
      const { comments, text } = this.state
      const { postId } = this.props
      const comment = {
        body: text,
        postId: postId
      }
      // react  state 的不变性
      const uri = 'http://localhost:3008/comments'
      axios.post(uri, comment).then(res => {
        this.setState({
          comments: [...comments, res.data],
          text: ''
        })
      })
    }
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
