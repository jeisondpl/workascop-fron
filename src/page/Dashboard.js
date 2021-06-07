import React from 'react'
import theme from '../TemaConfig'
import { ThemeProvider } from '@material-ui/core'
import Contenedor from '../components/Contenedor'

const Dashboard = () => {
  return (
    <ThemeProvider theme={theme}>
      <Contenedor />
    </ThemeProvider>
  )
}

export default Dashboard
