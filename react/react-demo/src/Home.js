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
        {
          // 因为要点击 Link 到 Post 页面展示标题 所以需要将 标题传递给 Post 组件, 但是 Home 组件和 Post 组件并不是父子关系，所以不能直接传递数据。但Home 和 Post 之间的桥梁是 Link，所以可以使用 Link 的 to 属性向路由组件传递数据
        }
        <Link
          to={{
            pathname: `/post/${post.id}`,
            state: post.title
          }}
        >
          {post.title}
        </Link>
      </li>
    ))
    const content =
      posts.length === 0 ? <div>加载中。。。</div> : <ul>{postList}</ul>
    return content
  }
}

export default Home
