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
  componentDidMount() {
    // 组件内部只能定义方法 想要定义一个在组件内的全局变量 让组件内的所有方法都可以访问， 我们需要想下面一样使用 this.timerId 定义,这样这个 timerId 变量，组件内的任何方法都可以访问了。
    this.timer()
    // const { show, pic } = this.state
    // this.setState({
    //   show: show >= pic.length - 1 ? 0 : show + 1
    // })
  }
  timer = () => {
    this.timerId = setInterval(() => {
      this.handleChange('right')
    }, 1000)
  }
  handleClick = ind => {
    this.setState({
      show: ind
    })
  }
  handleChange = arrow => {
    const { show, pic } = this.state
    // 判断
    if (arrow === 'left') {
      this.setState({
        show: show <= 0 ? pic.length - 1 : show - 1
      })
    } else {
      this.setState({
        show: show >= pic.length - 1 ? 0 : show + 1
      })
    }
  }
  handleEnter = () => {
    // 停止 setInterval
    clearInterval(this.timerId)
  }
  handleLeave = () => {
    this.timer()
  }
  // handleLeft = () => {
  //   const { show, pic } = this.state
  //   const newShow = show <= 0 ? pic.length - 1 : show - 1
  //   this.setState({
  //     show: newShow
  //   })
  // }
  // handleRight = () => {
  //   const { show, pic } = this.state
  //   const newShow = show >= pic.length - 1 ? 0 : show + 1
  //   this.setState({
  //     show: newShow
  //   })
  // }
  render() {
    const { pic, show } = this.state
    const imgWidth = 100 / pic.length + '%'
    const picWidth = pic.length * 100 + '%'
    const ml = show * -100 + '%'
    const showPic = pic.map(pic => (
      <img style={{ width: imgWidth }} src={pic.src} alt="" key={pic.id} />
    ))
    console.log(show)
    const buttonList = pic.map((pic, index) => (
      <Button
        style={{ backgroundColor: show === index ? '#00b3d4' : '#f1f8f9' }}
        key={pic.id}
        onClick={() => this.handleClick(index)}
      />
    ))
    return (
      <Show onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
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
        <ArrowLeft onClick={() => this.handleChange('left')}>{'<'}</ArrowLeft>
        <ArrowRight onClick={() => this.handleChange('right')}>
          {'>'}
        </ArrowRight>
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
const Arrow = styled.span`
  width: 60px;
  height: 80px;
  background-color: rgb(0, 0, 0);
  line-height: 80px;
  position: absolute;
  top: 50%;
  margin-top: -40px;
  text-align: center;
  font-size: 50px;
  color: #fff;
  opacity: 0.5;
  cursor: pointer;
`
const ArrowLeft = styled(Arrow)`
  left: 20px;
`
const ArrowRight = styled(Arrow)`
  right: 20px;
`
