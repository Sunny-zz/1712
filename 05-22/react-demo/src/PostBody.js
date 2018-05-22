import React, { Component } from 'react'
import styled from 'styled-components'

class PostBody extends Component {
  render() {
    return <Wrapper>postbody</Wrapper>
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
  line-height: 200px;
  &:hover {
    color: red;
  }
`
