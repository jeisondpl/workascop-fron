import React from 'react'
import { Card, makeStyles, CardContent, Typography } from '@material-ui/core'

const CardHeader = ({ color, icono, titulo, texto, font }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      textAlign: 'center',
      background: color,
    },
    texto: {
      fontSize: 18,
      color: font,
    },
    titulo: {
      fontWeight: 'bold',
      fontSize: 22,
      color: font,
    },
  }))

  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardContent>
        {icono}
        <Typography className={classes.titulo}>{titulo}</Typography>
        <Typography className={classes.texto}>{texto}</Typography>
      </CardContent>
    </Card>
  )
}

export default CardHeader
