import React from 'react'
import { Card, makeStyles, CardContent, Typography, CardActions, Button } from '@material-ui/core'
import Title from './Title'

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    margin: '3px',
    height: '150px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 0px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 0,
    fontSize: '11px',
  },
})

const Cards = ({ titulo, valor, fecha, isporc }) => {
  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant='h6' component='h2'>
          {titulo}
        </Typography>

        <Typography variant='h6' component='h2'>
          {isporc ? `${valor}%` : `$${valor}`}
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
