import React, { Component } from 'react'
import PostBody from './PostBody'
import PostComments from './PostComments'
import axios from 'axios'
class Post extends Component {
  // 把数据搬家到 Post 组件 因为 PostBody 和 PostComments 兄弟组件之间要进行数据交换 所以把要交换的数据移步到父组件 Post 中
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
  render() {
    // console.log(this.props.match.params.id)
    // console.log(this.props.location.state)
    // 路由组件默认会接受到很多 props, 其中 location 下的 state 就是 Link 的 to 属性传递过来的数据
    // 其中 match 下的 params 就是路由参数
    const title = this.props.location.state

    return (
      <div>
        <PostBody title={title} />
        <PostComments comments={this.state.comments} />
      </div>
    )
  }
}

export default Post
