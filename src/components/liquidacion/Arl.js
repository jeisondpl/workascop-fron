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

const Arl = ({ loading, data }) => {
  const classes = useStyles()

  return (
    <>
      <Grid container spacing={0} xs={12} sm={12} md={12} lg={12} xl={12} className={classes.col}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {data ? (
              data.arlLast.map((item) => (
                <>
                  <Grid spacing={1} xs={12} sm={6} md={4} lg={4} xl={4}>
                    <Cards titulo='ARL I' valor={item.porcArl1} isporc={true} fecha={item.fecha} />
                  </Grid>
                  <Grid spacing={1} xs={12} sm={6} md={4} lg={4} xl={4}>
                    <Cards titulo='ARL II' valor={item.porcArl2} isporc={true} fecha={item.fecha} />
                  </Grid>
                  <Grid spacing={1} xs={12} sm={6} md={4} lg={4} xl={4}>
                    <Cards titulo='ARL III' valor={item.porcArl3} isporc={true} fecha={item.fecha} />
                  </Grid>
                  <Grid spacing={1} xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Cards titulo='ARL IV' valor={item.porcArl4} isporc={true} fecha={item.fecha} />
                  </Grid>
                  <Grid spacing={1} xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Cards titulo='ARL V' valor={item.porcArl5} isporc={true} fecha={item.fecha} />
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

export default Arl
