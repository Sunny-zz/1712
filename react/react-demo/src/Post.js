import React, { Component } from 'react'
import PostBody from './PostBody'
import PostComments from './PostComments'
class Post extends Component {
  render() {
    return (
      <div>
        <PostBody />
        <PostComments />
      </div>
    )
  }
}

export default Post
