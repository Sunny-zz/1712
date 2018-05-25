import React, { Component } from 'react'
import styled from 'styled-components'
import Button from './Button'
import PropTypes from 'prop-types'
class Modal extends Component {
  state = {
    show: false
  }
  // event.stopPropagation() 通过事件对象的 stopPropagation 方法阻止事件冒泡
  render() {
    const { title } = this.props
    return (
      <div>
        <Button text="打开" click={() => this.setState({ show: true })} />
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
              <h3>{title}</h3>
              <Close onClick={() => this.setState({ show: false })}>X</Close>
            </ModalHead>
            <ModalContent>
              <p>sdfh ksjgf ksjgf kh</p>
            </ModalContent>
            <ModalFooter>
              <Button
                text="确定"
                click={() =>
                  this.setState({
                    show: false
                  })
                }
              />
            </ModalFooter>
          </DivModal>
        </Wrapper>
      </div>
    )
  }
}
Modal.propTypes = {
  title: PropTypes.string
}
Modal.defaultProps = {
  title: '默认的标题'
}
export default Modal

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
`
const DivModal = styled.div`
  width: 400px;
  margin: 100px auto;
  background-color: #fff;
  border-radius: 5px;
`
const ModalHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #d9d8d8;
  h3 {
    margin: 20px 10px;
  }
`
const Close = styled.span`
  width: 30px;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  color: #5f5656;
  border-radius: 3px;
  border: 1px solid #e4dfdf;
  text-align: center;
  margin-right: 10px;
  cursor: pointer;
`

const ModalContent = styled.div`
  padding: 10px;
  border-bottom: 1px solid #e4dfdf;
  p {
    margin: 10px 0px;
  }
`
const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`
