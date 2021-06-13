import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import Cards from '../ejemplo/Cards'
import Alertmessage from '../alert/Alertmessage'

const useStyles = makeStyles((theme) => ({
  col: {
    padding: '10px',
  },
}))

const Recargos = ({ loading, data }) => {
  const classes = useStyles()

  return (
    <>
      <Grid container spacing={0} xs={12} sm={12} md={12} lg={12} xl={12} className={classes.col}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {data ? (
              data.recargosLast.map((item) => (
                <>
                  <Grid spacing={1} xs={12} sm={4} md={4} lg={4} xl={4}>
                    <Cards titulo='Factor nocturno' valor={item.factorNocturno} isporc={true} fecha={item.fecha} />
                  </Grid>
                  <Grid spacing={1} xs={12} sm={4} md={4} lg={4} xl={4}>
                    <Cards titulo='Factor festivo' valor={item.factorFestivo} isporc={true} fecha={item.fecha} />
                  </Grid>
                  <Grid spacing={1} xs={12} sm={4} md={4} lg={4} xl={4}>
                    <Cards titulo='Factor dominical' valor={item.factorDominical} isporc={true} fecha={item.fecha} />
                  </Grid>
                  <Grid spacing={1} xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Cards titulo='Jornada inicial' valor={item.jornadaInicial}  fecha={item.fecha} />
                  </Grid>
                  <Grid spacing={1} xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Cards titulo='jornada final' valor={item.jornadaFinal}  fecha={item.fecha} />
                  </Grid>
                </>
              ))
            ) : (
              <Alertmessage message='Sin conexion al servidor' />
            )}
          </>
        )}
      </Grid>
    </>
  )
}

export default Recargos
