import React, { useEffect, useState } from 'react'
import { makeStyles, Divider, Grid, Box, FormControl, InputLabel, Typography, Paper, Input, FormHelperText, Button, TextField } from '@material-ui/core'
import Contenedor from '../../components/Contenedor'
import Title from '../../components/ejemplo/Title'
import FormSearchUser from '../../components/form/FormSearchUser'
import { useAllLiquidacion } from '../../graphql/liquidacion/Custom-hooks'
import Arl from '../../components/liquidacion/Arl'
import Ibl from '../../components/liquidacion/Ibl'
import Parafiscales from '../../components/liquidacion/Parafiscales'
import Prestacion from '../../components/liquidacion/Prestacion'
import PisoSeguridadSocial from '../../components/liquidacion/PisoSeguridadSocial'
import RetencionFuente from '../../components/liquidacion/RetencionFuente'
import SeguridadSocials from '../../components/liquidacion/SeguridadSocials'
import Acordeon from '../../components/liquidacion/Acordeon'
import Papers from '../../components/Papers'
import { CalculoLiquidacion } from '../../components/liquidacion/CalculoLiquidacion'

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

  fixedHeight: {
    height: 300,
  },
  col: {
    padding: '10px',
    marginTop: '30px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(16),
    flexBasis: '100%',
    flexShrink: 0,
    marginLeft: '30px',
    color: theme.palette.text.secondary,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
  },
  accordion: {
    flexGrow: 1,
  },
  box: {
    flexGrow: 1,
  },
}))

const Index = () => {
  const classes = useStyles()
  const [datos, setDatos] = useState([])
  const [expanded, setExpanded] = useState(false)
  const [total, setTotal] = useState('')

  //all values liquidacion
  const { data, loading, error } = useAllLiquidacion()

  //recibe lista de valores de liquidacion
  useEffect(() => {
    if (data !== undefined) {
      setDatos(data)
    }
  }, [data])

  const handleChangeAcordeon = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  if (error !== undefined) {
    console.log('Error ', error)
  }

  // -------------------------------------------
  const hadleCalcular = () => {
    const { acumulado, valor_hora } = CalculoLiquidacion({ total: total, data: datos })
    console.log(acumulado)
  }

  return (
    <Contenedor>
      <Title>Liquidacion</Title>
      <Divider />
      <Grid container spacing={2}>
        {/* col-6 */}
        <Grid className={classes.col} container spacing={1} xs={12} sm={12} md={12} lg={12} xl={12}>
          <Grid container spacing={1} xs={12} sm={12} md={12} lg={12} xl={12} className={classes.col}>
            {/* FORMULARIO DE LIQUIDACION */}
            <Grid spacing={1} xs={12} sm={6} md={6} lg={6} xl={6}>
              {/* <FormControl>
                <InputLabel htmlFor='my-input'>C.c. Empleado</InputLabel>
                <Input id='my-input' aria-describedby='my-helper-text' value={total} onChange={(evt) => setTotal(evt.target.value)} />
                <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
                <FormHelperText id='my-helper-text'>Id del colaborador</FormHelperText>
              </FormControl> */}

              <TextField
                id='standard-number'
                label='Acumulado'
                type='number'
                InputLabelProps={{
                  shrink: true,
                }}
                value={total}
                onChange={(evt) => setTotal(evt.target.value)}
              />

              <Button color='primary' type='submit' variant='outlined' onClick={hadleCalcular} style={{ marginTop: '10px', marginLeft: '15px' }}>
                Liquidar
              </Button>
            </Grid>
            <Grid spacing={1} xs={12} sm={6} md={6} lg={6} xl={6}>
              <Papers height={100}>
                <Grid container spacing={1} xs={12} sm={12} md={12} lg={12} xl={12}>
                  <Typography variant='h5' color='textPrimary' gutterBottom>
                    Total $ {total}
                  </Typography>
                </Grid>
              </Papers>
            </Grid>
          </Grid>
          <Grid container spacing={1} xs={12} sm={12} md={12} lg={12} xl={12} className={classes.col}>
            <Title>Calculo</Title>
          </Grid>

          <Papers height={300}>
            <Grid container spacing={1} xs={12} sm={12} md={12} lg={12} xl={12}>
              <Grid xs={12} sm={6} md={6} lg={6} xl={6}>
                <Typography component='h4' variant='body1' color='textPrimary' gutterBottom>
                  Total laborado
                </Typography>
              </Grid>
              <Grid xs={12} sm={6} md={6} lg={6} xl={6}>
                <Typography component='h4' variant='body1' color='textPrimary' gutterBottom>
                  $550.000
                </Typography>
              </Grid>
              <Grid xs={12} sm={6} md={6} lg={6} xl={6}>
                <Typography component='h4' variant='body1' color='textPrimary' gutterBottom>
                  Total laborado
                </Typography>
              </Grid>
              <Grid xs={12} sm={6} md={6} lg={6} xl={6}>
                <Typography component='h4' variant='body1' color='textPrimary' gutterBottom>
                  $550.000
                </Typography>
              </Grid>
              <Grid xs={12} sm={6} md={6} lg={6} xl={6}>
                <Typography component='h4' variant='body1' color='textPrimary' gutterBottom>
                  Total laborado
                </Typography>
              </Grid>
              <Grid xs={12} sm={6} md={6} lg={6} xl={6}>
                <Typography component='h4' variant='body1' color='textPrimary' gutterBottom>
                  $550.000
                </Typography>
              </Grid>
              <Grid xs={12} sm={6} md={6} lg={6} xl={6}>
                <Typography component='h4' variant='body1' color='textPrimary' gutterBottom>
                  Total laborado
                </Typography>
              </Grid>
              <Grid xs={12} sm={6} md={6} lg={6} xl={6}>
                <Typography component='h4' variant='body1' color='textPrimary' gutterBottom>
                  $550.000
                </Typography>
              </Grid>
              <Grid xs={12} sm={6} md={6} lg={6} xl={6}>
                <Typography component='h4' variant='body1' color='textPrimary' gutterBottom>
                  Total laborado
                </Typography>
              </Grid>
              <Grid xs={12} sm={6} md={6} lg={6} xl={6}>
                <Typography component='h4' variant='body1' color='textPrimary' gutterBottom>
                  $550.000
                </Typography>
              </Grid>
              <Grid xs={12} sm={6} md={6} lg={6} xl={6}>
                <Typography component='h4' variant='body1' color='textPrimary' gutterBottom>
                  Total laborado
                </Typography>
              </Grid>
              <Grid xs={12} sm={6} md={6} lg={6} xl={6}>
                <Typography component='h4' variant='body1' color='textPrimary' gutterBottom>
                  $550.000
                </Typography>
              </Grid>
              <Grid xs={12} sm={6} md={6} lg={6} xl={6}>
                <Typography component='h4' variant='body1' color='textPrimary' gutterBottom>
                  Total laborado
                </Typography>
              </Grid>
              <Grid xs={12} sm={6} md={6} lg={6} xl={6}>
                <Typography component='h4' variant='body1' color='textPrimary' gutterBottom>
                  $550.000
                </Typography>
              </Grid>
              <Grid xs={12} sm={6} md={6} lg={6} xl={6}>
                <Typography component='h4' variant='body1' color='textPrimary' gutterBottom>
                  Total laborado
                </Typography>
              </Grid>
              <Grid xs={12} sm={6} md={6} lg={6} xl={6}>
                <Typography component='h4' variant='body1' color='textPrimary' gutterBottom>
                  $550.000
                </Typography>
              </Grid>
            </Grid>
          </Papers>
        </Grid>
        {/* col-6  */}
        <Grid className={classes.col} container spacing={1} xs={12} sm={12} md={12} lg={12} xl={12}>
          <Title>Datos base</Title>

          {datos !== undefined ? (
            <Grid spacing={1} xs={12} sm={12} md={12} lg={12} xl={12}>
              <Acordeon title='Ingreso base de liquidacion' name='panel1' handleChangeAcordeon={handleChangeAcordeon} expanded={expanded}>
                <Ibl loading={loading} data={data} />
              </Acordeon>
              <Acordeon title='Riesgos laborales' name='panel2' handleChangeAcordeon={handleChangeAcordeon} expanded={expanded}>
                <Arl loading={loading} data={data} />
              </Acordeon>
              <Acordeon title='Parafiscales' name='panel3' handleChangeAcordeon={handleChangeAcordeon} expanded={expanded}>
                <Parafiscales loading={loading} data={data} />
              </Acordeon>
              <Acordeon title='Prestaciones' name='panel4' handleChangeAcordeon={handleChangeAcordeon} expanded={expanded}>
                <Prestacion loading={loading} data={data} />
              </Acordeon>
              <Acordeon title='Piso seguridad social' name='panel5' handleChangeAcordeon={handleChangeAcordeon} expanded={expanded}>
                <PisoSeguridadSocial loading={loading} data={data} />
              </Acordeon>
              <Acordeon title='Retencion fuente' name='panel6' handleChangeAcordeon={handleChangeAcordeon} expanded={expanded}>
                <RetencionFuente loading={loading} data={data} />
              </Acordeon>
              <Acordeon title='Seguridad social' name='panel7' handleChangeAcordeon={handleChangeAcordeon} expanded={expanded}>
                <SeguridadSocials loading={loading} data={data} />
              </Acordeon>
            </Grid>
          ) : (
            <p>Sin conexion al servidor</p>
          )}
        </Grid>
      </Grid>
    </Contenedor>
  )
}

export default Index
