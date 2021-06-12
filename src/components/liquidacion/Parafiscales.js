import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import Title from '../../components/ejemplo/Title'
import Cards from '../../components/ejemplo/Cards'
import Alertmessage from '../alert/Alertmessage'

const useStyles = makeStyles((theme) => ({
  col: {
    padding: '10px',
  },
}))

const Parafiscales = ({ loading, data }) => {
  const classes = useStyles()
  return (
    <>
      <Grid container spacing={1} xs={12} sm={12} md={12} lg={12} xl={12} className={classes.col}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {data ? (
              data.parafiscalesLast.map((item) => (
                <>
                  <Grid spacing={1} xs={12} sm={6} md={4} lg={4} xl={4}>
                    <Cards titulo='CAJA' valor={item.porcCajaComp} isporc={true} fecha={item.fecha} />
                  </Grid>
                  <Grid spacing={1} xs={12} sm={6} md={4} lg={4} xl={4}>
                    <Cards titulo='SENA' valor={item.porcSena} isporc={true} fecha={item.fecha} />
                  </Grid>
                  <Grid spacing={1} xs={12} sm={6} md={4} lg={4} xl={4}>
                    <Cards titulo='ICBF' valor={item.porcIcbf} isporc={true} fecha={item.fecha} />
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

export default Parafiscales
