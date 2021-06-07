import React, { useState, useEffect } from 'react'
import { makeStyles, Grid } from '@material-ui/core'
import clsx from 'clsx'
import Deposits from '../components/ejemplo/Deposits'
import Paper from '@material-ui/core/Paper'
import Contenedor from '../components/Contenedor'

const useStyles = makeStyles((theme) => ({
  containers: {
    paddingTop: '30px',
    alignItems: 'center',
    marginBottom: '20px',
  },
}))


const Home = () => {
  const classes = useStyles()
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
  return (
    <Contenedor>
      <Grid container spacing={5}>
        <Grid className={classes.containers} container spacing={1} xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
            <Paper className={fixedHeightPaper}>
              <Deposits titulo='Home' valor='1200' fecha='2021-05-10' isporc={false} />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Contenedor>
  )
}

export default Home
