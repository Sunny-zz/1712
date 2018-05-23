import React, { Component } from 'react'
import PostBody from './PostBody'
import PostComments from './PostComments'
class Post extends Component {
  render() {
    // console.log(this.props.match.params.id)
    // console.log(this.props.location.state)
    // 路由组件默认会接受到很多 props, 其中 location 下的 state 就是 Link 的 to 属性传递过来的数据
    // 其中 match 下的 params 就是路由参数
    const title = this.props.location.state
    const { id } = this.props.match.params
    return (
      <div>
        <PostBody title={title} />
        <PostComments postId={id} />
      </div>
    )
  }
}

export default Post
