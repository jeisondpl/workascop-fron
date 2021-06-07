import React from 'react'

const trabajadoBody = () => {
  return (
    <div>
      <div className={classes.root}>
        <Navbar handleDrawerToggle={handleDrawerToggle} />
        <Hidden xsDown>
          <Cajon variant='permanent' open={true} />
        </Hidden>
        <Hidden smUp>
          <Cajon variant='temporary' open={openDrawer} onClose={handleDrawerToggle} />
        </Hidden>
        <div className={classes.content}>
          <div className={classes.toolbar}></div>
          <div className={classes.root2}>
            <Grid container spacing={3}>
              {/* header */}
              <Grid container spacing={1}>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                  <CardHeader color='rgba(248,80,50,1)' icono={<YouTubeIcon className={classes.iconos} />} titulo='Servicios' texto='Bor javaScripts' font='white' />
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                  <CardHeader color='#757de8' icono={<PublicIcon className={classes.iconos} />} titulo='SubServicios' texto='Sub categorias de servicios' font='white' />
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                  <CardHeader color='#3f50b5' icono={<VideoLibraryIcon className={classes.iconos} />} titulo='Facturacion' texto='Modulo de facturacion' font='white' />
                </Grid>
              </Grid>
              {/* body */}
              <Grid className={classes.containers} container spacing={1} xs={12} sm={12} md={6} lg={6} xl={6}>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                  <Cards titulo='Servicios' texto='Bor javaScripts' />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                  <Cards titulo='Servicios' texto='Bor ' />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                  <Cards titulo='Servicios' texto='Bor ' />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                  <Cards titulo='Servicios' texto='Bor ' />
                </Grid>
              </Grid>
              <Grid item xs={0} sm={0} md={1} lg={1} xl={1}></Grid>
              <Grid className={classes.containersGrafica} item xs={12} sm={12} md={5} lg={5} xl={5}>
                <Graphics />
              </Grid>
              <Grid className={classes.containerTabla} item xs={12}>
                <TableServicios data={data} />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  )
}

export default trabajadoBody




<div className={classes.content}>
<div className={classes.toolbar}></div>
<Grid container spacing={3}>
  {/* header */}
  <Grid container spacing={1}>
    <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
      <CardHeader color='rgba(248,80,50,1)' icono={<YouTubeIcon className={classes.iconos} />} titulo='Servicios' texto='Bor javaScripts' font='white' />
    </Grid>
    <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
      <CardHeader color='#757de8' icono={<PublicIcon className={classes.iconos} />} titulo='SubServicios' texto='Sub categorias de servicios' font='white' />
    </Grid>
    <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
      <CardHeader color='#3f50b5' icono={<VideoLibraryIcon className={classes.iconos} />} titulo='Facturacion' texto='Modulo de facturacion' font='white' />
    </Grid>
  </Grid>
  {/* body */}
  <Grid className={classes.containers} container spacing={1} xs={12} sm={12} md={6} lg={6} xl={6}>
    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
      <Cards titulo='Servicios' texto='Bor javaScripts' />
    </Grid>
    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
      <Cards titulo='Servicios' texto='Bor ' />
    </Grid>
    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
      <Cards titulo='Servicios' texto='Bor ' />
    </Grid>
    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
      <Cards titulo='Servicios' texto='Bor ' />
    </Grid>
  </Grid>

  <Grid item xs={0} sm={0} md={1} lg={1} xl={1}></Grid>
  <Grid className={classes.containersGrafica} item xs={12} sm={12} md={5} lg={5} xl={5}>
    <Graphics />
  </Grid>

  <Grid className={classes.containers} container spacing={1} xs={12} sm={12} md={6} lg={6} xl={6}>
    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
      <Paper className={fixedHeightPaper}>
        <Deposits />
      </Paper>
    </Grid>
    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
      <Paper className={fixedHeightPaper}>
        <Deposits />
      </Paper>
    </Grid>
    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
      <Paper className={fixedHeightPaper}>
        <Deposits />
      </Paper>
    </Grid>
    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
      <Paper className={fixedHeightPaper}>
        <Deposits />
      </Paper>
    </Grid>
  </Grid>

  <Grid item xs={0} sm={0} md={1} lg={1} xl={1}></Grid>
  <Grid className={classes.containersGrafica} item xs={12} sm={12} md={5} lg={5} xl={5}>
    <Graphics />
  </Grid>

  <Grid className={classes.containerTabla} item xs={12}>
    <TableServicios data={data} />
  </Grid>
</Grid>
</div>