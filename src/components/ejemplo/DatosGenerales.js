import React from 'react'
import { createStyles, TableContainer, Table, TableHead, TableRow, TableBody, TableCell, Grid, Box } from '@material-ui/core'
import { makeStyles, Theme, withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { red } from '@material-ui/core/colors'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  })
)

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell)

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow)

const DatosGenerales = () => {
  const classes = useStyles()
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='customized table'>
        <TableHead>
          {/* <TableRow>
            <StyledTableCell>Concepto</StyledTableCell>
            <StyledTableCell align='right'>Valor</StyledTableCell>
          </TableRow> */}
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell component='th' scope='row'>
              <Box fontWeight='fontWeightBold'>DATOS GENERALES</Box>
            </StyledTableCell>
            <StyledTableCell align='right'></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component='th' scope='row'>
              Identificacion
            </StyledTableCell>
            <StyledTableCell align='right'>84457625</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component='th' scope='row'>
              Nombre
            </StyledTableCell>
            <StyledTableCell align='right'>Jeison diaz</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component='th' scope='row'>
              <Box fontWeight='fontWeightBold'>LIQUIDACION TOTAL</Box>
            </StyledTableCell>
            <StyledTableCell align='right'></StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component='th' scope='row'>
              Total servicios
            </StyledTableCell>
            <StyledTableCell align='right'>$300.000</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component='th' scope='row'>
              Aporte obligatorio a salud EPS
            </StyledTableCell>
            <StyledTableCell align='right'>$15.000</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component='th' scope='row'>
              Aporte obligatorio a pensión AFP
            </StyledTableCell>
            <StyledTableCell align='right'>$12.000</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component='th' scope='row'>
              Riesgo ARL
            </StyledTableCell>
            <StyledTableCell align='right'>$13.000</StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell component='th' scope='row'>
              <Box fontWeight='fontWeightBold'>SUBTOTAL</Box>
            </StyledTableCell>
            <StyledTableCell align='right'>260.000</StyledTableCell>
          </StyledTableRow>
          {/* <StyledTableRow>
              <StyledTableCell component='th' scope='row'>
                Servicio WORKAScop
              </StyledTableCell>
              <StyledTableCell align='right'>4</StyledTableCell>
              <StyledTableCell align='right'>$120.000</StyledTableCell>
            </StyledTableRow> */}
          <StyledTableRow>
            <StyledTableCell component='th' scope='row'>
              <Box textAlign='right' fontWeight='fontWeightBold'>
                TOTAL
              </Box>
            </StyledTableCell>
            <StyledTableCell align='right'> <Box fontWeight='fontWeightBold'>$260.000</Box></StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DatosGenerales
