import { Component } from 'react'
import Container from '@material-ui/core/Container'

export default class DefaultLayout extends Component {
  render() {
    const { children } = this.props

    return (
      <Container>
        {/*<GlobalStyles />*/}
        {children}
      </Container>
    )
  }
}
