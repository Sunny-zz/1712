import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './Home'
import Post from './Post'
class Main extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Home} />
          {
            // 被当做路由的组件 默认会被传递 props 包括路由的一些信息 location history match
          }
          <Route path="/post/:id" component={Post} />
        </div>
      </Router>
    )
  }
}

export default Main
