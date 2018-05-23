import React, { Component } from 'react'
import PostBody from './PostBody'
import PostComments from './PostComments'
class App extends Component {
  render() {
    return (
      <div>
        <PostBody />
        <PostComments />
      </div>
    )
  }
}

export default App
