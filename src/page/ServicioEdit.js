import React, { useState, useEffect } from 'react'
import { makeStyles, Grid, TextField, Divider, Link, Button } from '@material-ui/core'
import { useEditServicio } from '../graphql/custom-hooks'

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

const ServicioEdit = ({ notifyError }) => {
  const classes = useStyles()
  const [idServicio, setIdServicio] = useState('')
  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [url, setUrl] = useState('')

  //Update
  const [changeNumber, result] = useEditServicio()

  const handleSubmit = (e) => {
    e.preventDefault()
    let id = parseInt(idServicio)
    //Update
    changeNumber({ variables: { id, nombre, descripcion, url } })
    setNombre('')
    setDescripcion('')
    setUrl('')
    setIdServicio('')
  }

  useEffect(() => {
    if (result.data && result.data.updateServicio.servicios === null) notifyError('servicio not found')
  }, [result.data])

  return (
    <>
      <h2>Editar servicio</h2>

      <form onSubmit={handleSubmit}>
        {/* <TextField  id="standard-number"  label="Number"  type="number" InputLabelProps={{ shrink: true,}} onChange={(evt) => setIdServicio(evt.target.value)} /> */}
        <TextField className={classes.textField} type='number' id='standard-basic' label='Id' value={idServicio} onChange={(evt) => setIdServicio(evt.target.value)} />
        <TextField className={classes.textField} id='standard-basic' label='Nombre' value={nombre} onChange={(evt) => setNombre(evt.target.value)} />
        <TextField className={classes.textField} id='standard-basic' label='Descripcion' value={descripcion} onChange={(evt) => setDescripcion(evt.target.value)} />
        <TextField className={classes.textField} id='standard-basic' label='Url' value={url} onChange={(evt) => setUrl(evt.target.value)} />
        <Button color='primary' type='submit' variant='outlined'>
          Editar servicio
        </Button>
      </form>
    </>
  )
}

export default ServicioEdit
