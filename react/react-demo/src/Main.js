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
          <Route path="/post/:id" component={Post} />
        </div>
      </Router>
    )
  }
}

export default Main
