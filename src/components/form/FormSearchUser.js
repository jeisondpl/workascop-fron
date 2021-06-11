import React, { useState } from 'react'
import { Grid, FormControl, FormHelperText, InputLabel, Input, Button, Box, Typography } from '@material-ui/core'
import Papers from '../../components/Papers'

const FormSearchUser = ({ handleSearchUser }) => {
  const [User, setUser] = useState('')

  return (
    <>
      <Grid spacing={1} xs={12} sm={6} md={6} lg={6} xl={6}>
        <FormControl>
          <InputLabel htmlFor='my-input'>C.c. Empleado</InputLabel>
          <Input id='my-input' aria-describedby='my-helper-text' value={User} onChange={(evt) => setUser(evt.target.value)} />
          <FormHelperText id='my-helper-text'>Id del colaborador</FormHelperText>
        </FormControl>
        <Button color='primary' type='submit' variant='outlined' onClick={() => handleSearchUser(User)} style={{ marginTop: '10px', marginLeft: '15px' }}>
          Liquidar
        </Button>
      </Grid>
      <Grid spacing={1} xs={12} sm={6} md={6} lg={6} xl={6}>
        <Papers height={100}>
          <Grid container spacing={1} xs={12} sm={12} md={12} lg={12} xl={12}>
            <Typography variant='h5' color='textPrimary' gutterBottom>
              Total: $530.000
            </Typography>
          </Grid>
        </Papers>
      </Grid>
    </>
  )
}

export default FormSearchUser
