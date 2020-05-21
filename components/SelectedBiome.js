import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
import DefaultLayout from './layouts/default'
import PageHeader from './PageHeader'
import Biome from './Biome'
import NavButtonGroup from './NavButtonGroup'
// import GridListTile from '@material-ui/core/GridListTile'
// import tileData from './tileData'

const biomeMap = {
  ancientForest: {
    biomes: [
      {
        imageLocation: '/images/mhwancientforest.jpg',
      },
    ],
  },
  wildspireWaste: {
    biomes: [
      {
        imageLocation: '/images/mhwwildspirewaste.jpg',
      },
    ],
  },
  coralHighlands: {
    biomes: [
      {
        imageLocation: '/images/mhwcoralhighlands.jpeg',
      },
    ],
  },
  eldersRecess: {
    biomes: [
      {
        imageLocation: '/images/elders_recess.jpg',
      },
    ],
  },
  rottenVale: {
    biomes: [
      {
        imageLocation: '/images/mhwrottenvale.jpg',
      },
    ],
  },
}

export default function SelectedBiome(props) {
  const spacing = 2

  const { pageTitle, biomeName } = props

  return (
    <DefaultLayout>
      <PageHeader pageTitle={pageTitle} />

      <NavButtonGroup biomeName={biomeName} />

      <Grid container spacing={2}>
        <Grid item xs={12}>
          {/*<Grid container justify="center" spacing={spacing}>*/}
          {/*  {biomeMap[biomeName].biomes.map(*/}
          {/*    ({ imageLocation, imageTitle, captionHeading }) => (*/}
          {/*      <Grid key={imageLocation} item>*/}
          {/*        <Biome*/}
          {/*          imageLocation={imageLocation}*/}
          {/*          imageTitle={imageTitle}*/}
          {/*          captionHeading={captionHeading}*/}
          {/*        />*/}
          {/*      </Grid>*/}
          {/*    )*/}
          {/*  )}*/}
          {/*</Grid>*/}
        </Grid>
      </Grid>
    </DefaultLayout>
  )
}
