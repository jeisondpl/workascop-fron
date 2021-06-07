import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText, Divider } from '@material-ui/core'
import CloudQueueIcon from '@material-ui/icons/CloudQueue'
import DeckIcon from '@material-ui/icons/Deck'
import AppsIcon from '@material-ui/icons/Apps'

const Listas = () => {
  return (
    <>
      <List component='nav'>
        <ListItem button>
          <ListItemIcon>
            <CloudQueueIcon />
          </ListItemIcon>
          <ListItemText primary='Servicios' />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DeckIcon />
          </ListItemIcon>
          <ListItemText primary='SubServicios' />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <AppsIcon />
          </ListItemIcon>
          <ListItemText primary='Facturacion' />
        </ListItem>
      </List>
    </>
  )
}

export default Listas
