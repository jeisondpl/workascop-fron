import React from 'react'
import clsx from 'clsx'
import Drawer from '@material-ui/core/Drawer'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import { MainListItems, secondaryListItems } from './ListItems'
import logo from '../../assets/img/logo2.png'
import Image from 'material-ui-image'
import { useHistory } from 'react-router-dom'

const drawerWidth = 231

const useStyles = makeStyles((theme) => ({
  toolbarIcon: {
    //   ...theme.mixins.toolbar,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    height: '55px',
  },

  drawerPaper: {
    backgroundColor:'#ECE5FF',
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
   
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
}))

const Cajon = ({ handleDrawerClose, open, onClose }) => {
  const history = useHistory()
  const classes = useStyles()
  const styleImage = {
    width: '100px',
    height: '40px',
    marginTop: '15px',
    marginBottom: '20px',
  }

  const handleClick = (page) => {
    history.push(page)
  }

  return (
    <Drawer
      variant='permanent'
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
      onClose={onClose ? onClose : null}
    >
      <div className={classes.toolbarIcon}>
        <Image aspectRatio={0} disableSpinner={true} style={styleImage} cover={true} color src={logo} />
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <MainListItems handleClick={handleClick} />
      </List>
      <Divider />
      <List>{secondaryListItems}</List>
    </Drawer>
  )
}

export default Cajon
