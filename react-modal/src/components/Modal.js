import React, { Component } from 'react'
import styled from 'styled-components'
class Modal extends Component {
  state = {
    show: false
  }
  // event.stopPropagation() 通过事件对象的 stopPropagation 方法阻止事件冒泡
  render() {
    return (
      <div>
        <button onClick={() => this.setState({ show: true })}>Open</button>
        <Wrapper
          onClick={() =>
            this.setState({
              show: false
            })
          }
          style={{ display: !this.state.show && 'none' }}
        >
          <DivModal onClick={event => event.stopPropagation()}>
            <ModalHead>
              <h3>标题</h3>
              <Close onClick={() => this.setState({ show: false })}>X</Close>
            </ModalHead>
            <hr />
            <div>
              <p>sdfh ksjgf ksjgf kh</p>
            </div>
            <hr />
          </DivModal>
        </Wrapper>
      </div>
    )
  }
}

export default Modal

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
`
const DivModal = styled.div`
  width: 300px;
  margin: 100px auto;
  background-color: #fff;
`
const ModalHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Close = styled.span`
  width: 50px;
  text-align: center;
  margin-right: 10px;
  cursor: pointer;
`
