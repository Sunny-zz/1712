import React, { Component } from 'react'
import PropTypes from 'prop-types'
class Button extends Component {
  render() {
    const { login, color } = this.props
    return <button style={{ backgroundColor: color }}>{login}</button>
  }
}

// 设置 props 的类型
Button.propTypes = {
  login: PropTypes.string
}
// 给 props 定义默认值
Button.defaultProps = {
  login: '登录',
  color: 'red'
}
export default Button
