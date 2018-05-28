import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import pink from '@material-ui/core/colors/pink'
class MaterialDemo extends Component {
  render() {
    const theme = createMuiTheme({
      palette: {
        primary: pink
      }
    })
    return (
      <MuiThemeProvider theme={theme}>
        <Button variant="raised" disableRipple={true} color="primary">
          按钮
        </Button>
        <Button variant="raised" disableRipple={true} color="secondary">
          按钮
        </Button>
      </MuiThemeProvider>
    )
  }
}

export default MaterialDemo
