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
class MaterialDemo extends Component {
  state = {
    checkedA: true,
    checkedB: true
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked })
  }
  render() {
    const theme = createMuiTheme({
      palette: {
        primary: pink
      }
    })
    const { classes } = this.props
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
              checked={this.state.checkedA}
              onChange={this.handleChange('checkedA')}
              value="checkedA"
              classes={{
                switchBase: classes.colorSwitchBase,
                checked: classes.colorChecked,
                bar: classes.colorBar
              }}
            />
          }
          label="Custom color"
        />
      </MuiThemeProvider>
    )
  }
}

const styles = theme => ({
  colorSwitchBase: {
    color: purple[300],
    '&$colorChecked': {
      color: purple[500],
      '& + $colorBar': {
        backgroundColor: purple[500]
      }
    }
  },
  colorBar: {},
  colorChecked: {},
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
