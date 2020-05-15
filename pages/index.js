import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import DefaultLayout from '../components/layouts/default'
import PageHeader from '../components/PageHeader'
import Biome from '../components/Biome'
import Box from '@material-ui/core/Box'

const biomes = [
  {
    imageLocation: '/images/20200322134046_1.jpg',
    imageTitle: 'Ancient Forest',
    captionHeading: 'Ancient Forest',
    biomeUrl: '/ancient_forest',
  },
  {
    imageLocation: '/images/20200330222154_1.jpg',
    imageTitle: 'Wild Spire Waste',
    captionHeading: 'Wild Spire Waste',
    biomeUrl: '/wildspire_waste',
  },
]

export default function Home() {
  const spacing = 2

  return (
    <DefaultLayout>
      <PageHeader pageTitle="Testing" />

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            {biomes.map(
              ({ imageLocation, imageTitle, captionHeading, biomeUrl }) => (
                <Grid key={imageLocation} item>
                  <Biome
                    imageLocation={imageLocation}
                    imageTitle={imageTitle}
                    captionHeading={captionHeading}
                    biomeUrl={biomeUrl}
                  />
                </Grid>
              )
            )}
          </Grid>
        </Grid>
      </Grid>

      <Box mt={6} p={2} pt={3} boxShadow={4} bgcolor="primary.main">
        <Typography variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
      </Box>
    </DefaultLayout>
  )
}
