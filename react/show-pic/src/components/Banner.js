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
    ]
  }
  render() {
    const { pic } = this.state
    const imgWidth = 100 / pic.length + '%'
    const picWidth = pic.length * 100 + '%'
    const showPic = pic.map(pic => (
      <img style={{ width: imgWidth }} src={pic.src} alt="" key={pic.id} />
    ))
    return (
      <Show>
        <div style={{ width: picWidth }}>{showPic}</div>
      </Show>
    )
  }
}

export default Banner
const Show = styled.div`
  width: 80%;
  margin: 100px auto;
  overflow: hidden;
`
