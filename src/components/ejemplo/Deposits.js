import React from 'react'
import Link from '@material-ui/core/Link'
import { makeStyles, Box, Typography } from '@material-ui/core'
import Title from './Title'

function preventDefault(event) {
  event.preventDefault()
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
})

export default function Deposits({ titulo, valor, fecha, isporc }) {
  const classes = useStyles()
  return (
    <>
      <Box display='flex' justifyContent='center' m={0} p={0}>
        <Box p={0}>
          <Title>{titulo}</Title>
        </Box>
      </Box>
      <Box display='flex' justifyContent='center' m={0} p={0}>
        <Box p={0}>
          <Typography justify='center' component='p' variant='h4' className={classes.depositContext}>
            {valor}
          </Typography>
        </Box>
      </Box>
      <Box display='flex' justifyContent='center' m={0} p={0}>
        <Box p={0}>
          <Typography color='textSecondary' className={classes.depositContext}>
            {fecha}
          </Typography>
        </Box>
      </Box>
      {/* <Box display='flex' justifyContent='center' m={0} p={0}>
        <Box p={1}>
          <Link color='primary' href='#' onClick={preventDefault}>
                     
          </Link>
        </Box>
      </Box> */}
    </>
  )
}
