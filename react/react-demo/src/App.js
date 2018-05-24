import React, { Component } from 'react'
import Main from './Main'
import Header from './Header'
import { BrowserRouter as Router } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Main />
        </div>
      </Router>
    )
  }
}

export default App
