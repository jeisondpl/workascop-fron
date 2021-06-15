import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
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
import Recargos from '../../components/liquidacion/Recargos'
import RecipeReviewCard from '../../components/ejemplo/RecipeReviewCard'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
  separador: {
    marginTop: '30px',
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
  paper: {
    padding: theme.spacing(2),
    overflow: 'auto',
    flexDirection: 'column',
    flexGrow: 1,
  },
  fixedHeight: {
    height: '100%',
  },
  divider: {
    marginTop: '20px',
    // background:"white"
  },
}))
const Index = () => {
  const classes = useStyles()
  const [datos, setDatos] = useState([])
  const [expanded, setExpanded] = useState(false)
  const [total, setTotal] = useState('')

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
  const fixedHeightPaper2 = clsx(classes.paper)
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
      <Grid container spacing={2}>
        <Grid spacing={1} xs={12} sm={12} md={12} lg={12} xl={12} className={classes.col}>
          <Title>Liquidacion</Title>
          <Divider />
        </Grid>
        {/* input */}
        <Grid spacing={1} xs={12} sm={12} md={12} lg={12} xl={12} className={classes.col}>
          <TextField
            id='standard-number'
            label='Cedula'
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
          <Divider className={classes.divider} />
        </Grid>

        {/* header */}
        <Grid className={classes.col} container spacing={1} xs={12} sm={12} md={12} lg={12} xl={12}>
          <Paper className={fixedHeightPaper}>
            <Grid spacing={1} xs={12} sm={12} md={12} lg={12} xl={12}>
              <Title>Datos Generales</Title>
            </Grid>
            <Typography component='h4' variant='body1' color='textPrimary' gutterBottom>
              Identificacion
            </Typography>
            <Typography component='h4' variant='body1' color='textPrimary' gutterBottom>
              Nombre colaborador
            </Typography>
            <Typography component='h4' variant='body1' color='textPrimary' gutterBottom>
              Valor total
            </Typography>
          </Paper>
        </Grid>

        <Grid container spacing={1} xs={12} sm={12} md={12} lg={12} xl={12}>
        
        
          {/* col-8 */}
          <Grid spacing={1} xs={8} sm={8} md={8} lg={8} xl={8} className={classes.col}>
            <Paper className={fixedHeightPaper}>
              <Grid spacing={1} xs={12} sm={12} md={12} lg={12} xl={12}>
                <Title>Resumen de servicios</Title>
              </Grid>
              {/* card */}
              <Grid container spacing={1} xs={12} sm={12} md={12} lg={12} xl={12}>
                <Grid spacing={1} xs={12} sm={6} md={6} lg={6} xl={6} className={classes.col}>
                  <RecipeReviewCard servicio='Limpieza de Piscinas' codigociiu='8129' arl='IV' abc='L' />
                </Grid>
                <Grid spacing={1} xs={12} sm={6} md={6} lg={6} xl={6} className={classes.col}>
                  <RecipeReviewCard servicio='Instrumentos Musicales' codigociiu='9529' arl='II' abc='I' />
                </Grid>
                <Grid spacing={1} xs={12} sm={6} md={6} lg={6} xl={6} className={classes.col}>
                  <RecipeReviewCard servicio='Edición de videos' codigociiu='5912' arl='II' abc='E' />
                </Grid>
                <Grid spacing={1} xs={12} sm={6} md={6} lg={6} xl={6} className={classes.col}>
                  <RecipeReviewCard servicio='Entrenador Deportivo' codigociiu='8552' arl='I' abc='D' />
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          {/* col-4 */}
          <Grid  spacing={1} xs={4} sm={4} md={4} lg={4} xl={4} className={classes.col}>
            {datos !== undefined ? (
              <Paper className={fixedHeightPaper2}>
                  <Grid spacing={1} xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Title>Porcentajes base</Title>
                  </Grid>
                  <Grid container spacing={1} xs={12} sm={12} md={12} lg={12} xl={12} className={classes.col}>
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
                    <Acordeon title='Recargo' name='panel8' handleChangeAcordeon={handleChangeAcordeon} expanded={expanded}>
                      <Recargos loading={loading} data={data} />
                    </Acordeon>
                </Grid>
              </Paper>
            ) : (
              <p>Sin conexion al servidor</p>
            )}
            {/* </Grid> */}
          </Grid>
        </Grid>
      </Grid>
    </Contenedor>
  )
}

export default Index
