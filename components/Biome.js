import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 200,
    width: 400,
  },
})

const Biome = (props) => {
  const classes = useStyles()

  const {
    imageLocation,
    imageTitle,
    captionHeading,
    captionText,
    biomeUrl,
  } = props

  return (
    <Card>
      <CardActionArea href={biomeUrl}>
        <CardMedia
          className={classes.media}
          image={imageLocation}
          title={imageTitle}
        />
        {captionHeading && (
          <CardContent>
            <Typography gutterBottom align="center" variant="h6" component="h1">
              {captionHeading}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {captionText}
            </Typography>
          </CardContent>
        )}
      </CardActionArea>
    </Card>
  )
}

export default Biome
