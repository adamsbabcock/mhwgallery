import { createMuiTheme } from '@material-ui/core/styles'
import { blue, red, pink } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: pink,
    error: red,
    background: {
      default: '#fff',
    },
  },
})

export default theme
