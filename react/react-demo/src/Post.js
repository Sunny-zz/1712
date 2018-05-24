import React, { Component } from 'react'
import PostBody from './PostBody'
import PostComments from './PostComments'
import axios from 'axios'
class Post extends Component {
  // 把数据搬家到 Post 组件 因为 PostBody 和 PostComments 兄弟组件之间要进行数据交换 所以把要交换的数据移步到父组件 Post 中
  // 现在的评论到了 Post 组件之中，但是我们在 PostComments 组件想要修改 Post 组件中的 state ，相当于子组件要修改父组件的 state。我们就要先在父组件内部声明修改 state 的方法，然后将这个方法当做 props 传递给子组件，让子组件执行。先声明一个 addComment 方法。
  state = {
    comments: []
  }
  componentDidMount() {
    const uri = 'http://localhost:3008/comments'
    const { id } = this.props.match.params
    axios.get(uri).then(res => {
      this.setState({
        comments: res.data.filter(commet => commet.postId.toString() === id)
      })
    })
  }
  addComment = text => {
    const uri = 'http://localhost:3008/comments'
    const { comments } = this.state
    const comment = { body: text, postId: this.props.match.params.id }
    axios.post(uri, comment).then(res => {
      this.setState({
        comments: [...comments, res.data]
      })
    })
  }
  deleteComment = id => {
    const uri = `http://localhost:3008/comments/${id}`
    const { comments } = this.state
    axios.delete(uri).then(res => {
      this.setState({
        comments: [...comments].filter(t => t.id !== id)
      })
    })
  }
  render() {
    // console.log(this.props.match.params.id)
    // console.log(this.props.location.state)
    // 路由组件默认会接受到很多 props, 其中 location 下的 state 就是 Link 的 to 属性传递过来的数据
    // 其中 match 下的 params 就是路由参数
    const title = this.props.location.state
    const { comments } = this.state
    return (
      <div>
        <PostBody title={title} number={comments.length} />
        <PostComments
          comments={comments}
          addComment={this.addComment}
          deleteComment={this.deleteComment}
        />
      </div>
    )
  }
}

export default Post
