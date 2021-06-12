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

const RetencionFuente = ({ loading, data }) => {
  const classes = useStyles()
  return (
    <>
      <Grid container spacing={1} xs={12} sm={12} md={12} lg={12} xl={12} className={classes.col}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {data ? (
              data.retencionFuenteLast.map((item) => (
                <>
                  <Grid spacing={1} xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Cards titulo='Proc Retefuente' valor={item.porcRetefuente} isporc={true} fecha={item.fecha} />
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

export default RetencionFuente
