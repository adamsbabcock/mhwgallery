import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

const NavButtonGroup = () => {
  const classes = useStyles()

  return (
    <Fragment>
      <div className={classes.root} align="center">
        <Button variant="contained" href="/">
          Home
        </Button>
        <Button variant="contained" color="primary" href="/wildspire_waste">
          Wildspire Waste
        </Button>
        <Button variant="contained" color="secondary">
          Rotten Vale
        </Button>
        <Button variant="contained">Elders Recess</Button>
      </div>
    </Fragment>
  )
}

export default NavButtonGroup
