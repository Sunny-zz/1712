import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
class Button extends Component {
  handelClick = () => {
    this.props.click()
  }
  render() {
    return <Btn onClick={this.handelClick}>{this.props.text}</Btn>
  }
}
Button.propTypes = {
  text: PropTypes.string,
  click: PropTypes.func
}
Button.defaultProps = {
  text: 'open',
  click: () => {}
}
export default Button
const Btn = styled.button`
  color: #fff;
  background-color: #1890ff;
  outline: 0;
  line-height: 1.5;
  text-align: center;
  cursor: pointer;
  padding: 0 15px;
  font-size: 14px;
  border-radius: 4px;
  border: 0;
  height: 32px;
`
