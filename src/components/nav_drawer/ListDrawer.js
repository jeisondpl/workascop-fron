import React from 'react'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import HomeIcon from '@material-ui/icons/Home'
import ListAltIcon from '@material-ui/icons/ListAlt';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'


const LIST_DRAWER_3 = [
  { id: 1, nombre: 'home', icon: ()=> <HomeIcon /> },
  { id: 2, nombre: 'Servicios', icon: ()=> <ContactPhoneIcon /> },
  { id: 3, nombre: 'liquidacion', icon: ()=> <ListAltIcon /> },
  { id: 4, nombre: 'config', icon: ()=> <InboxIcon /> },
]

const LIST_DRAWER_2 = ['Trabajos', 'Indicadores', 'Perfil']


const ListDrawer = ({ handleGoToPage }) => {
  return (
    <>
      <Divider />
      <List>
        {LIST_DRAWER_3.map((item) => (
          <ListItem button key={item.id} onClick={() => handleGoToPage(item.nombre)}>
            <ListItemIcon>{item.icon()}</ListItemIcon>
            <ListItemText primary={item.nombre} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {LIST_DRAWER_2.map((text, index) => (
          <ListItem button key={text} onClick={() => handleGoToPage(text)}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </>
  )
}
export default ListDrawer
