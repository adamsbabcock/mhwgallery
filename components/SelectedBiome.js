import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
import Box from '@material-ui/core/Box'
import DefaultLayout from './layouts/default'
import PageHeader from './PageHeader'
import NavButtonGroup from './NavButtonGroup'
import { makeStyles } from '@material-ui/core/styles'
import GridListTile from '@material-ui/core/GridListTile'
import * as biomeMap from '../models/tile-data'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 500,
  },
}))

export default function SelectedBiome(props) {
  const classes = useStyles()

  const { pageTitle, biomeName } = props

  return (
    <DefaultLayout>
      <PageHeader pageTitle={pageTitle} />

      <NavButtonGroup biomeName={biomeName} />

      <Box pt={5}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className={classes.root}>
              <GridList cellHeight={160} className={classes.gridList} cols={3}>
                {biomeMap[biomeName].map((tile) => (
                  <GridListTile key={tile.img} cols={tile.cols || 1}>
                    <img src={tile.img} alt={tile.title} />
                  </GridListTile>
                ))}
              </GridList>
            </div>
          </Grid>
        </Grid>
      </Box>
    </DefaultLayout>
  )
}
