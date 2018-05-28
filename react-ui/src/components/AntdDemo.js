import React, { Component } from 'react'
// import { DatePicker } from 'antd'
// import Test from './Test'
// import { Button } from 'antd'
import { Modal } from 'antd'

class AntdDemo extends Component {
  // state = {
  //   loading: false
  // }
  // enterLoading = () => {
  //   this.setState({ loading: true })
  // }
  // handelClose = () => {
  //   this.setState({ loading: false })
  // }
  state = {
    visible: false
  }
  showModal = () => {
    this.setState({
      visible: true
    })
  }
  handleOk = e => {
    console.log(e)
    this.setState({
      visible: false
    })
  }
  handleCancel = e => {
    console.log(e)
    this.setState({
      visible: false
    })
  }
  render() {
    return (
      <div>
        {/* <Button ghost={true} onClick={this.handelClose} type="primary">
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
        <Test>111</Test> */}
        <button onClick={this.showModal}>按钮</button>
        <Modal
          title="标题"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          maskClosable={false}
          okText="确定"
        >
          khkjhkjh
        </Modal>
      </div>
    )
  }
}

export default AntdDemo
