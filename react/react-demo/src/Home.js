import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
class Home extends Component {
  state = {
    posts: []
  }
  // 组件的生命周期函数 中的  componentDidMount 中允许修改 state, 在这个函数中 通常用来获取 异步的数据 更新 state
  componentDidMount() {
    const uri = 'http://localhost:3008/posts'
    axios.get(uri).then(res => {
      this.setState({
        posts: res.data
      })
    })
  }
  render() {
    const { posts } = this.state
    const postList = posts.map(post => (
      <li key={post.id}>
        <Link to={`/post/${post.id}`}>{post.title}</Link>
      </li>
    ))
    const content =
      posts.length === 0 ? <div>加载中。。。</div> : <ul>{postList}</ul>
    return content
  }
}

export default Home
