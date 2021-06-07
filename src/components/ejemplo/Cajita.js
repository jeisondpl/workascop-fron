import React from 'react'
import { Box, Grid } from '@material-ui/core'

const Cajita = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={6} md={6}>
          <Box border={2} m={2} p={2}>
            Zharick
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Box border={2} m={2} p={2}>
            Hilari
          </Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cajita
