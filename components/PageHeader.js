import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'

export default class PageHeader extends Component {
  render() {
    const { pageTitle } = this.props

    return (
      <div>
        <Typography variant="h1" component="h2" align="center" gutterBottom>
          {pageTitle}
        </Typography>
      </div>
    )
  }
}
