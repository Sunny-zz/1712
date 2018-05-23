import React, { Component } from 'react'
import PostBody from './PostBody'
import PostComments from './PostComments'
class Post extends Component {
  render() {
    // console.log(this.props.match.params.id)
    // console.log(this.props.location.state)
    const title = this.props.location.state
    return (
      <div>
        <PostBody title={title} />
        <PostComments />
      </div>
    )
  }
}

export default Post
