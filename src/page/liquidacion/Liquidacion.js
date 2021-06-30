import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { makeStyles, Divider, Grid, Paper, Button, TextField } from '@material-ui/core'
import Contenedor from '../../components/Contenedor'
import Title from '../../components/ejemplo/Title'
import { useAllLiquidacion } from '../../graphql/liquidacion/Custom-hooks'
import Arl from '../../components/liquidacion/Arl'
import Ibl from '../../components/liquidacion/Ibl'
import Parafiscales from '../../components/liquidacion/Parafiscales'
import Prestacion from '../../components/liquidacion/Prestacion'
import PisoSeguridadSocial from '../../components/liquidacion/PisoSeguridadSocial'
import RetencionFuente from '../../components/liquidacion/RetencionFuente'
import SeguridadSocials from '../../components/liquidacion/SeguridadSocials'
import Acordeon from '../../components/liquidacion/Acordeon'
import Recargos from '../../components/liquidacion/Recargos'
import BasicTimeline from '../../components/ejemplo/BasicTimeline'
import DatosGenerales from '../../components/ejemplo/DatosGenerales'
import { useFindLiquidacion } from '../../graphql/liquidacion/Custom-hooks'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
  },
  message: {
    color: 'red',
    marginInlineStart: '10px',
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
  const [expanded, setExpanded] = useState(false)
  const [identificacion, setIdentificacion] = useState('')
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
  const fixedHeightPaper2 = clsx(classes.paper)
  const [liquidacion, setLiquidacion] = useState(null)
  const [message, setMessage] = useState('')

  //get liquidacion
  const [getLiquidacion, result] = useFindLiquidacion()
  useEffect(() => {
    if (result.data) {
      if (result.data.liquidacion.length > 0 && result.data.findColaboradorSmall.length > 0) {
        setLiquidacion(result.data)
      } else {
        setMessage('No se encuentra registrada esta identificacion')
        setLiquidacion(undefined)
        setTimeout(function () {
          setMessage('')
        }, 1500)
      }
    }
  }, [result])

  //porcentajes liquidacion
  const { data, loading, error } = useAllLiquidacion()

  const hadleOnLiqidar = () => {
    if (identificacion) getLiquidacion({ variables: { Idcolaborador: identificacion } })
  }

  const hadleOnChange = (evt) => {
    setIdentificacion(evt.target.value)
    if (liquidacion) setLiquidacion(undefined)
  }

  const handleChangeAcordeon = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  if (error !== undefined) {
    console.log('Error ', error)
  }

  return (
    <Contenedor>
      <Grid container spacing={2}>
        <Grid spacing={1} xs={12} sm={12} md={12} lg={12} xl={12} className={classes.col}>
          <Title>Liquidacion</Title>
          <Divider />
        </Grid>
        {/* input */}
        <label className={classes.message}>{message}</label>
        <Grid spacing={1} xs={12} sm={12} md={12} lg={12} xl={12} className={classes.col}>
          <TextField
            id='standard-number'
            label='Cedula colaborador'
            type='number'
            InputLabelProps={{
              shrink: true,
            }}
            value={identificacion}
            onChange={(evt) => hadleOnChange(evt)}
          />

          <Button color='primary' type='submit' variant='outlined' onClick={hadleOnLiqidar} style={{ marginTop: '10px', marginLeft: '15px' }}>
            Liquidar
          </Button>
          <Divider className={classes.divider} />
        </Grid>

        {/* col-3 Resumen total<*/}
        <Grid container spacing={1} xs={12} sm={12} md={3} lg={3} xl={3} className={classes.col}>
          <Paper className={fixedHeightPaper}>
            <Grid spacing={1} xs={12} sm={12} md={12} lg={12} xl={12}>
              <Title>Resumen total</Title>
            </Grid>
            <Grid spacing={1} xs={12} sm={12} md={12} lg={12} xl={12} className={classes.col}>
              {liquidacion !== undefined && liquidacion ? <DatosGenerales data={liquidacion} /> : []}
            </Grid>
          </Paper>
        </Grid>

        {/* col-5 Resumen de servicios*/}
        <Grid container spacing={1} xs={12} sm={12} md={5} lg={5} xl={5} className={classes.col}>
          <Paper className={fixedHeightPaper}>
            <Grid spacing={1} xs={12} sm={12} md={12} lg={12} xl={12}>
              <Title>Resumen de servicios</Title>
            </Grid>
            <Grid spacing={1} xs={12} sm={12} md={12} lg={12} xl={12} className={classes.col}>
              {liquidacion !== undefined && liquidacion ? <BasicTimeline data={liquidacion} /> : []}
            </Grid>
          </Paper>
        </Grid>

        {/* col-4 Porcentajes base*/}
        <Grid container spacing={1} xs={12} sm={12} md={4} lg={4} xl={4} className={classes.col}>
          <Paper className={fixedHeightPaper2}>
            <Grid spacing={1} xs={12} sm={12} md={12} lg={12} xl={12}>
              <Title>Porcentajes base</Title>
            </Grid>
            {data !== undefined && liquidacion !== undefined && liquidacion ? (
              <Grid spacing={1} xs={12} sm={12} md={12} lg={12} xl={12} className={classes.col}>
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
            ) : (
              []
            )}
          </Paper>
        </Grid>
      </Grid>
    </Contenedor>
  )
}

export default Index
