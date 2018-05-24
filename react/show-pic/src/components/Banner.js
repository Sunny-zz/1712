import React, { Component } from 'react'
import firstPic from '../assets/1.jpg'
import secondPic from '../assets/2.jpg'
import thirdPic from '../assets/3.jpg'
import forthPic from '../assets/4.jpg'
import styled from 'styled-components'
class Banner extends Component {
  state = {
    pic: [
      {
        id: 1,
        src: firstPic
      },
      {
        id: 2,
        src: secondPic
      },
      {
        id: 3,
        src: thirdPic
      },
      {
        id: 4,
        src: forthPic
      },
      {
        id: 5,
        src: forthPic
      }
    ],
    show: 0
  }
  handleClick = ind => {
    this.setState({
      show: ind
    })
  }
  render() {
    const { pic, show } = this.state
    const imgWidth = 100 / pic.length + '%'
    const picWidth = pic.length * 100 + '%'
    const ml = show * -100 + '%'
    const showPic = pic.map(pic => (
      <img style={{ width: imgWidth }} src={pic.src} alt="" key={pic.id} />
    ))
    const buttonList = pic.map((pic, index) => (
      <Button
        style={{ backgroundColor: show === index ? '#00b3d4' : '#f1f8f9' }}
        key={pic.id}
        onClick={() => this.handleClick(index)}
      />
    ))
    return (
      <Show>
        <div
          style={{
            width: picWidth,
            transition: 'margin-left 0.75s linear',
            marginLeft: ml
          }}
        >
          {showPic}
        </div>
        <List>{buttonList}</List>
      </Show>
    )
  }
}

export default Banner
const Show = styled.div`
  width: 60%;
  margin: 100px auto;
  overflow: hidden;
  position: relative;
`
const List = styled.ul`
  width: 40%;
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  display: flex;
  bottom: 18px;
  left: 50%;
  margin-left: -20%;
  justify-content: space-between;
`
const Button = styled.li`
  width: 25px;
  height: 25px;
  opacity: 0.6;
  border-radius: 50%;
  cursor: pointer;
`
