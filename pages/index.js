import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import DefaultLayout from '../components/layouts/default'
import PageHeader from '../components/PageHeader'
import Biome from '../components/Biome'
import Box from '@material-ui/core/Box'
// import React from 'react'
// import Paper from '@material-ui/'
//
// const styles = {
//   paperContainer: {
//     backgroundImage: '/images/mhwancientforest.jpg'
//   }
// };

const biomes = [
  {
    imageLocation: '/images/mhwancientforest.jpg',
    imageTitle: 'Ancient Forest',
    captionHeading: 'Ancient Forest',
    biomeUrl: '/ancient_forest',
  },
  {
    imageLocation: '/images/mhwwildspirewaste.jpg',
    imageTitle: 'Wild Spire Waste',
    captionHeading: 'Wild Spire Waste',
    biomeUrl: '/wildspire_waste',
  },
  {
    imageLocation: '/images/mhwcoralhighlands.jpeg',
    imageTitle: 'Coral Highlands',
    captionHeading: 'Coral Highlands',
    biomeUrl: '/coral_highlands',
  },
  {
    imageLocation: '/images/mhwrottenvale.jpg',
    imageTitle: 'Rotten Vale',
    captionHeading: 'Rotten Vale',
    biomeUrl: '/rotten_vale',
  },
  {
    imageLocation: '/images/elders_recess.jpg',
    imageTitle: 'Elders Recess',
    captionHeading: 'Elders Recess',
    biomeUrl: '/elders_recess',
  },
]

export default function Home() {
  const spacing = 2

  return (
    <DefaultLayout>
      <PageHeader pageTitle="Monster Hunter Scenic Gallery" />

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

      <Box mt={6} p={2} pt={3} boxShadow={2}>
        <Typography variant="body1" align="center" gutterBottom>
          Welcome to my Monster Hunter World Gallery. This is a simple website I
          have developed to host photographs taken by my friends and I while
          playing through the game. Throughout the gameplay I felt there were
          several scenic moments that were too good to pass up without taking a
          moment for a photo. Hopefully you can appreciate them as much as we
          did.
        </Typography>
        <Box fontStyle="italic">
          <Typography variant="body1" align="center" gutterBottom>
            "Photography for me is not looking, it’s feeling. If you can’t feel
            what you’re looking at, then you’re never going to get others to
            feel anything when they look at your pictures." - Don McCullin
          </Typography>
        </Box>
      </Box>
    </DefaultLayout>
  )
}
