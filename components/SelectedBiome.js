import Grid from '@material-ui/core/Grid'

import DefaultLayout from './layouts/default'
import PageHeader from './PageHeader'
import Biome from './Biome'
import NavButtonGroup from './NavButtonGroup'

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
}

export default function SelectedBiome(props) {
  const spacing = 2

  const { pageTitle, biomeName } = props

  return (
    <DefaultLayout>
      <PageHeader pageTitle={pageTitle} />

      <NavButtonGroup />

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            {biomeMap[biomeName].biomes.map(
              ({ imageLocation, imageTitle, captionHeading }) => (
                <Grid key={imageLocation} item>
                  <Biome
                    imageLocation={imageLocation}
                    imageTitle={imageTitle}
                    captionHeading={captionHeading}
                  />
                </Grid>
              )
            )}
          </Grid>
        </Grid>
      </Grid>
    </DefaultLayout>
  )
}
