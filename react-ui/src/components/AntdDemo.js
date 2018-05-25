import React, { Component } from 'react'
// import { DatePicker } from 'antd'
// import Test from './Test'
import { Button } from 'antd'

class AntdDemo extends Component {
  state = {
    loading: false
  }
  enterLoading = () => {
    this.setState({ loading: true })
  }
  handelClose = () => {
    this.setState({ loading: false })
  }
  render() {
    return (
      <div>
        <Button ghost={true} onClick={this.handelClose} type="primary">
          Default
        </Button>
        <Button
          type="primary"
          loading={this.state.loading}
          onClick={this.enterLoading}
          size="large"
        >
          Click me!
        </Button>
        {/* <Test>111</Test> */}
      </div>
    )
  }
}

export default AntdDemo
