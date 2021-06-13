import React from 'react'
import { Card, makeStyles, CardContent, Typography, CardActions, Button } from '@material-ui/core'
import Title from './Title'

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    margin: '3px',
    height: '150px',
  },
  text2: {
    marginTop: 10,
  },
  fecha: {
    marginTop: 10,
    marginBottom: 0,
    fontSize: '12px',
  },
})

const Comprobante = ({ titulo, valor, fecha, isporc = '' }) => {
  const classes = useStyles()
  return (
    <Title>Liquidacion</Title>
    <Divider />
    <Card className={classes.root}>
      <CardContent>
        <Typography variant='h6' color='textSecondary'>
          {titulo}
        </Typography>
        <Typography variant='h6' component='h2' className={classes.text2}>
          {isporc ? `${valor}%` : isporc === '' ? valor : `$${valor}`}
        </Typography>
        <Typography className={classes.fecha} color='textSecondary'>
          {fecha}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  )
}

export default Comprobante
