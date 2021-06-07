import React from 'react'
import { Card, makeStyles, CardContent, Typography, CardActions, Button } from '@material-ui/core'
import Title from './Title'

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    margin:'5px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

const Cards = ({ titulo, valor, fecha, isporc }) => {
  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>
  return (
    <Card className={classes.root}>
      <CardContent>
        <Title>{titulo}</Title>
        <Typography variant='h5' component='h2'>
          {valor}
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          {fecha}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  )
}
export default Cards
