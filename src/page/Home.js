import React, { useState, useEffect } from 'react'
import { makeStyles, Grid, Container } from '@material-ui/core'
import clsx from 'clsx'
import Deposits from '../components/ejemplo/Deposits'
import Paper from '@material-ui/core/Paper'
import Contenedor from '../components/Contenedor'
import Chart from '../components/ejemplo/Chart'
import Orders from '../components/ejemplo/Orders'

const useStyles = makeStyles((theme) => ({
  containers: {
    paddingTop: '30px',
    alignItems: 'center',
    marginBottom: '20px',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}))

const Home = () => {
  const classes = useStyles()
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
  return (
    <Contenedor>
      <Container maxWidth='lg' className={classes.container}>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper className={fixedHeightPaper}>{<Deposits titulo={'Acumulado'} valor={'$120.000'} fecha='2021-05-10' isporc={false} />}</Paper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>{<Deposits titulo={'Ordenes'} valor={'160'} fecha='2021-05-10' isporc={false} />}</Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>{<Deposits titulo={'Servicios'} valor={'160'} fecha='2021-05-10' isporc={false} />}</Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>{<Deposits titulo={'Publicaciones'} valor={'160'} fecha='2021-05-10' isporc={false} />}</Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>{<Deposits titulo={'Puntuacion'} valor={'160'} fecha='2021-05-10' isporc={false} />}</Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>{<Deposits titulo={'Liquidaciones'} valor={'160'} fecha='2021-05-10' isporc={false} />}</Paper>
          </Grid>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Orders />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Contenedor>
  )
}

export default Home
