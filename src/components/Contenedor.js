import React from 'react'
import { makeStyles, Container } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import BarraNav from './nav_drawer/BarraNav'
import AppDrawer from './nav_drawer/AppDrawer'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(4),
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    // backgroundColor: '#ECE5FF',
  },
}))
export default function Contenedor(props) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <BarraNav handleDrawerOpen={handleDrawerOpen} open={open} />
      <AppDrawer handleDrawerClose={handleDrawerClose} open={open} />

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Container maxWidth='xl' className={classes.container}>
          {props.children}
        </Container>
      </main>
    </div>
  )
}
