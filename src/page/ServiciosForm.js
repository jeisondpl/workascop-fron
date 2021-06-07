import React, { useState } from 'react'
import { makeStyles, Grid, TextField, Divider, Link, Button } from '@material-ui/core'
import { useAddServicio } from '../graphql/custom-hooks'

const useStyles = makeStyles((theme) => ({
  containers: {
    paddingTop: '30px',
    alignItems: 'center',
    marginBottom: '20px',
  },
  separador: {
    marginTop: '30px',
  },
  textField: {
    marginLeft: '10px',
  },
}))

const ServiciosForm = ({ notifyError }) => {
  const classes = useStyles()
  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [url, setUrl] = useState('')

  //create
  const [createServicios] = useAddServicio({ notifyError })

  const handleSubmit = (e) => {
    e.preventDefault()
    //create
    createServicios({ variables: { nombre, descripcion, url } })
    setNombre('')
    setDescripcion('')
    setUrl('')
  }

  return (
    <>
      <h2>Crear nuevo servicio</h2>

      <form onSubmit={handleSubmit}>
        <TextField className={classes.textField} id='standard-basic' label='Nombre' value={nombre} onChange={(evt) => setNombre(evt.target.value)} />
        <TextField className={classes.textField} id='standard-basic' label='Descripcion' value={descripcion} onChange={(evt) => setDescripcion(evt.target.value)} />
        <TextField className={classes.textField} id='standard-basic' label='Url' value={url} onChange={(evt) => setUrl(evt.target.value)} />
        <Button color='primary' type='submit' variant='outlined'>
          Agregar servicio
        </Button>
      </form>
    </>
  )
}

export default ServiciosForm
