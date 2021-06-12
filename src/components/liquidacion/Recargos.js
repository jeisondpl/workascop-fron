import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import Title from '../ejemplo/Title'
import Cards from '../ejemplo/Cards'

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
            {data.prestacion &&
              data.recargosLast.map((item) => (
                <>
                  <Grid spacing={1} xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Cards titulo='Cesantia' valor={item.porcCesantia} isporc={true} fecha={item.fecha} />
                  </Grid>
                  <Grid spacing={1} xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Cards titulo='Interes cesantia' valor={item.porcIntCesantia} isporc={true} fecha={item.fecha} />
                  </Grid>
                  <Grid spacing={1} xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Cards titulo='Prima' valor={item.porcPrima} isporc={true} fecha={item.fecha} />
                  </Grid>
                  <Grid spacing={1} xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Cards titulo='Vacaciones' valor={item.porcVacaciones} isporc={true} fecha={item.fecha} />
                  </Grid>
                </>
              ))}
          </>
        )}
      </Grid>
    </>
  )
}

export default Recargos
