import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  titulo: {
    flex: 1,
    justifyContent: 'center',
  },
})

export default function Title({children}) {
  const classes = useStyles()
  return (
    <Typography className={classes.titulo} component='h2' variant='69' color='primary' gutterBottom>
      {children}
    </Typography>
  )
}

Title.propTypes = {
  children: PropTypes.node,
}
