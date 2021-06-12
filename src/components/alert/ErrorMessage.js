import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
    flex: 1,
    justifyContent: 'center',
    color:'yellow'
  },
})

export default function ErrorMessage({message}) {
  const classes = useStyles()
  return (
    <Typography className={classes.root} component='h2' variant='69' color='primary' gutterBottom>
        {message}
    </Typography>
  )
}


