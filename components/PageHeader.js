import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

export default class PageHeader extends Component {
  render() {
    const { pageTitle } = this.props

    return (
      <Box pt={5}>
        <Typography variant="h2" component="h1" align="center" gutterBottom>
          {pageTitle}
        </Typography>
      </Box>
    )
  }
}
