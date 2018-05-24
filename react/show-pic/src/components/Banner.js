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
      }
    ]
  }
  render() {
    const { pic } = this.state
    const showPic = pic.map(pic => <img src={pic.src} alt="" key={pic.id} />)
    return (
      <div>
        <div>{showPic}</div>
      </div>
    )
  }
}

export default Banner
