import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import Cajon from './Cajon'
import NavBar from './Nav/NavBar'
import Container from '@material-ui/core/Container'
import Cajita from './ejemplo/Cajita'
import MiniDrawer from './nav_drawer/MiniDrawer'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  root2: {
    flexGrow: 1,
  },
  toolbar: theme.mixins.toolbar,
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  content: {
    flexGrow: 1,
    BackgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    marginTop: '40px',
  },
  iconos: {
    color: 'white',
  },

  containers: {
    paddingTop: '30px',
    alignItems: 'center',
    marginBottom: '20px',
  },
  containersGrafica: {
    marginTop: '40px',
  },
  containerTabla: {
    marginTop: '40px',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
}))

const Contenedor = (props) => {
  const classes = useStyles()
  const [open, setOpen] = useState(true)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <MiniDrawer />
    </div>
  )
}
export default Contenedor
