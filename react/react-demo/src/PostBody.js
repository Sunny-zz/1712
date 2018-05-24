import React, { Component } from 'react'
import styled from 'styled-components'

class PostBody extends Component {
  render() {
    const { title, number } = this.props
    return (
      <Wrapper>
        {title}
        <Number>{number} 评论</Number>
      </Wrapper>
    )
  }
}

export default PostBody

const Wrapper = styled.div`
  width: 400px;
  height: 200px;
  background-color: #00b3d4;
  border: 1px solid #ccc;
  margin: 50px auto;
  text-align: center;
  position: relative;
`
const Number = styled.span`
  position: absolute;
  right: 5px;
  bottom: 5px;
`
