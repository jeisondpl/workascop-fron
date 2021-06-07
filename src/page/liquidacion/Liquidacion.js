import React from 'react'
import { makeStyles, Divider, Grid, FormControl, FormHelperText, InputLabel, Input, Button } from '@material-ui/core'
import clsx from 'clsx'
import Deposits from '../../components/ejemplo/Deposits'
import Contenedor from '../../components/Contenedor'
import Title from '../../components/ejemplo/Title'
import Cards from '../../components/ejemplo/Cards'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
  separador: {
    marginTop: '30px',
  },
  paper: {
    marginTop: '20px',
    padding: theme.spacing(3),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    margin: '5px',
  },
  col: {
    padding: '10px',
  },
}))

const Index = () => {
  const classes = useStyles()

  return (
    <Contenedor>
      <Title>Liquidacion</Title>
      <Divider />
      <Grid container spacing={2}>
        <Grid container spacing={1} xs={12} sm={12} md={12} lg={12} xl={12} className={classes.col}></Grid>
        <Grid className={classes.col} container spacing={1} xs={6} sm={6} md={6} lg={6} xl={6}>
          <Grid container spacing={1} xs={12} sm={12} md={12} lg={12} xl={12} className={classes.col}>
            <Grid spacing={1} xs={12} sm={6} md={3} lg={3} xl={3}>
              <Cards titulo='titulos' valor='202' fecha='2021-05-10' isporc={false} />
            </Grid>
            <Grid spacing={1} xs={12} sm={6} md={3} lg={3} xl={3}>
              <Cards titulo='titulos' valor='202' fecha='2021-05-10' isporc={false} />
            </Grid>
            <Grid spacing={1} xs={12} sm={6} md={3} lg={3} xl={3}>
              <Cards titulo='titulos' valor='202' fecha='2021-05-10' isporc={false} />
            </Grid>
            <Grid spacing={1} xs={12} sm={6} md={3} lg={3} xl={3}>
              <Cards titulo='titulos' valor='202' fecha='2021-05-10' isporc={false} />
            </Grid>
            <Grid spacing={1} xs={12} sm={6} md={3} lg={3} xl={3}>
              <Cards titulo='titulos' valor='202' fecha='2021-05-10' isporc={false} />
            </Grid>
            <Grid spacing={1} xs={12} sm={6} md={3} lg={3} xl={3}>
              <Cards titulo='titulos' valor='202' fecha='2021-05-10' isporc={false} />
            </Grid>
            <Grid spacing={1} xs={12} sm={6} md={3} lg={3} xl={3}>
              <Cards titulo='titulos' valor='202' fecha='2021-05-10' isporc={false} />
            </Grid>
            <Grid spacing={1} xs={12} sm={6} md={3} lg={3} xl={3}>
              <Cards titulo='titulos' valor='202' fecha='2021-05-10' isporc={false} />
            </Grid>
          </Grid>
        </Grid>
        {/* metrad */}
        <Grid className={classes.col} container spacing={1} xs={6} sm={6} md={6} lg={6} xl={6}>
          <Grid container spacing={1} xs={12} sm={12} md={12} lg={12} xl={12} className={classes.col}>
            <FormControl>
              <InputLabel htmlFor='my-input'>C.c. Empleado</InputLabel>
              <Input id='my-input' aria-describedby='my-helper-text' />
              <FormHelperText id='my-helper-text'>Id del colaborador</FormHelperText>
              <Button color='primary' type='submit' variant='outlined'>
                Agregar servicio
              </Button>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </Contenedor>
  )
}

export default Index
