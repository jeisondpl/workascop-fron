import React from 'react'
import { Grid, makeStyles, Box } from '@material-ui/core'
import Title from '../ejemplo/Title'
import Cards from '../ejemplo/Cards'

const useStyles = makeStyles((theme) => ({
  col: {
    padding: '10px',
  },
}))

const SeguridadSocials = ({ loading, data }) => {
  const classes = useStyles()
  return (
    <>
      <Grid container spacing={1} xs={12} sm={12} md={12} lg={12} xl={12} className={classes.col}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {data.seguridadSocialsLastCliente &&
              data.seguridadSocialsLastCliente.map((item) => (
                <>
                  <Grid spacing={1} xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Cards titulo='Salud Cliente' valor={item.porcSalud} isporc={true} fecha={item.fecha} />
                  </Grid>
                  <Grid spacing={1} xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Cards titulo='Pension Cliente' valor={item.porcPension} isporc={true} fecha={item.fecha} />
                  </Grid>
                </>
              ))}
          </>
        )}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {data.seguridadSocialsLastColaborador &&
              data.seguridadSocialsLastColaborador.map((item) => (
                <>
                  <Grid spacing={1} xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Cards titulo='Salud Colaborador' valor={item.porcSalud} isporc={true} fecha={item.fecha} />
                  </Grid>
                  <Grid spacing={1} xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Cards titulo='Pension Colaborador' valor={item.porcPension} isporc={true} fecha={item.fecha} />
                  </Grid>
                </>
              ))}
          </>
        )}
      </Grid>
    </>
  )
}

export default SeguridadSocials
