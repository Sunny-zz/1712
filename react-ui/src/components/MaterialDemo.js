import React, { Component } from 'react'
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles
} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import pink from '@material-ui/core/colors/pink'
import purple from '@material-ui/core/colors/purple'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
class MaterialDemo extends Component {
  state = {
    checkedB: true,
    value: 0
  }
  handleChange1 = (event, value) => {
    this.setState({ value })
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked })
  }
  render() {
    const theme = createMuiTheme({ palette: { primary: purple } })
    const { classes } = this.props
    const { value } = this.state
    return (
      <MuiThemeProvider theme={theme}>
        <Button variant="raised" disableRipple={true} color="primary">
          按钮
        </Button>
        <Button variant="raised" disableRipple={true} color="secondary">
          按钮
        </Button>

        <FormControlLabel
          control={
            <Switch
              classes={{
                switchBase: classes.iOSSwitchBase,
                bar: classes.iOSBar,
                icon: classes.iOSIcon,
                iconChecked: classes.iOSIconChecked,
                checked: classes.iOSChecked
              }}
              disableRipple
              checked={this.state.checkedB}
              onChange={this.handleChange('checkedB')}
              value="checkedB"
            />
          }
          label="iOS style"
        />
        <div>
          <AppBar position="static">
            <Tabs value={value} onChange={this.handleChange1}>
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" href="#basic-tabs" />
            </Tabs>
          </AppBar>
          {value === 0 && <div>Item One</div>}
          {value === 1 && <div>Item Two</div>}
          {value === 2 && <div>Item Three</div>}
        </div>
      </MuiThemeProvider>
    )
  }
}

const styles = theme => ({
  iOSSwitchBase: {
    '&$iOSChecked': {
      color: theme.palette.common.white,
      '& + $iOSBar': {
        backgroundColor: '#52d869'
      }
    },
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.sharp
    })
  },
  iOSChecked: {
    transform: 'translateX(15px)',
    '& + $iOSBar': {
      opacity: 1,
      border: 'none'
    }
  },
  iOSBar: {
    borderRadius: 13,
    width: 42,
    height: 26,
    marginTop: -13,
    marginLeft: -21,
    border: 'solid 1px',
    borderColor: theme.palette.grey[400],
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border'])
  },
  iOSIcon: {
    width: 24,
    height: 24
  },
  iOSIconChecked: {
    boxShadow: theme.shadows[1]
  }
})
export default withStyles(styles)(MaterialDemo)
