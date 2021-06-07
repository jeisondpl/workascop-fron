import React, { useState, useEffect } from 'react'
import { makeStyles, Grid, Divider, Link } from '@material-ui/core'
import clsx from 'clsx'
import Deposits from '../components/ejemplo/Deposits'
import Title from '../components/ejemplo/Title'
import Paper from '@material-ui/core/Paper'
import Contenedor from '../components/Contenedor'
import ServiciosForm from './ServiciosForm'
import { useServicio, useFindServicio } from '../graphql/custom-hooks'
import Notyfy from '../components/notyfy/Notyfy'
import ServicioEdit from './ServicioEdit'

const useStyles = makeStyles((theme) => ({
  containers: {
    paddingTop: '30px',
    alignItems: 'center',
    marginBottom: '20px',
  },
  separador: {
    marginTop: '30px',
  },
}))

const Servicios = () => {
  const classes = useStyles()
  const [datos, setDatos] = useState([])
  const [servicio, setServicio] = useState(null)

  //all servicios
  const { data, loading, error } = useServicio()

  //get id serevicio
  const [getServicios, result] = useFindServicio()

  const handleClick = (id) => {
    getServicios({ variables: { id: parseInt(id) } })
  }
  const [errorMessage, setErrorMessage] = useState(null)

  //buscar servicios
  useEffect(() => {
    if (result.data) {
      setServicio(result.data.servicioById[0])
    }
  }, [result])

  //recibe lista de servicios
  useEffect(() => {
    if (data !== undefined) {
      const { servicios } = data
      setDatos(servicios)
    }
  }, [data])

  const notifyError = (message) => {
    console.log(message)
    setErrorMessage(message)
    setTimeout(() => setErrorMessage(null), 5000)
  }

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  return (
    <Contenedor>
      <Title>Servicios</Title>
      <Divider />
      <Grid container spacing={5}>
        <Grid className={classes.containers} container spacing={1} xs={12} sm={12} md={12} lg={12} xl={12}>
          <Divider />
          <Notyfy errorMessage={errorMessage} />
          <Grid item xs={12} sm={6} md={12} lg={12} xl={12}>
            <ServiciosForm notifyError={notifyError} />
            <ServicioEdit notifyError={notifyError} />
            <Grid className={classes.separador} item xs={12} sm={6} md={2} lg={2} xl={2}>
              <Paper className={fixedHeightPaper}>{servicio && <Deposits titulo={servicio.nombre} valor={servicio.id} fecha='2021-05-10' isporc={false} />}</Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classes.containers} container spacing={1} xs={12} sm={12} md={12} lg={12} xl={12}>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <>
              {datos &&
                datos.map((item) => (
                  <Grid item xs={12} sm={6} md={2} lg={2} xl={2} key={item.id}>
                    <Paper className={fixedHeightPaper}>
                      <Deposits titulo={item.nombre} valor={item.id} fecha='2021-05-10' isporc={false} />
                      <Link
                        href='#'
                        onClick={() => {
                          handleClick(item.id)
                        }}
                      >
                        {item.nombre}
                      </Link>
                    </Paper>
                  </Grid>
                ))}
            </>
          )}
        </Grid>
      </Grid>
    </Contenedor>
  )
}

export default Servicios
