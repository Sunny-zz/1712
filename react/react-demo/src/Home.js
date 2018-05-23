import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Home extends Component {
  state = {
    posts: []
  }
  // 组件的生命周期函数 中的  componentDidMount 中允许修改 state 在这个函数中 通常用来获取 异步的数据 更新 state
  componentDidMount() {}
  render() {
    console.log(this.state.posts)
    const postList = this.state.posts.map(post => (
      <li key={post.id}>
        <Link to={`/post/${post.id}`}>{post.title}</Link>
      </li>
    ))
    return <ul>{postList}</ul>
  }
}

export default Home
