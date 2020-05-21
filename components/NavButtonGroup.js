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

const NavButtonGroup = ({ biomeName }) => {
  const classes = useStyles()

  return (
    <Fragment>
      <div className={classes.root} align="center">
        <Button variant="outlined" href="/">
          Home
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          href="/ancient_forest"
          disabled={biomeName === 'ancientForest'}
        >
          Ancient Forest
        </Button>
        <Button
          variant="outlined"
          color="primary"
          href="/wildspire_waste"
          disabled={biomeName === 'wildspireWaste'}
        >
          Wildspire Waste
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          href="/coral_highlands"
          disabled={biomeName === 'coralHighlands'}
        >
          Coral Highlands
        </Button>
        <Button
          variant="outlined"
          color="primary"
          href="/rotten_vale"
          disabled={biomeName === 'rottenVale'}
        >
          Rotten Vale
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          href="/elders_recess"
          disabled={biomeName === 'eldersRecess'}
        >
          Elders Recess
        </Button>
      </div>
    </Fragment>
  )
}

export default NavButtonGroup
