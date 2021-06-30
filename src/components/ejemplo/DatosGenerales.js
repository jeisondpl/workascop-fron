import React, { useEffect, useState } from 'react'
import { createStyles, TableContainer, Table, TableRow, TableBody, TableCell, Grid, Box, Divider } from '@material-ui/core'
import { makeStyles, Theme, withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { red } from '@material-ui/core/colors'
import MuiTableHead from '@material-ui/core/TableHead'

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
    divider: {
      marginTop: '20px',
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

const TableHead = withStyles((theme) => ({
  root: {
    backgroundColor: '#757575',
  },
}))(MuiTableHead)

const TableHeaderCell = withStyles((theme) => ({
  root: {
    color: 'white',
  },
}))(TableCell)

const DatosGenerales = ({ data }) => {
  const classes = useStyles()
  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='customized table' size='small' >
          <TableHead>
            <TableRow>
              <TableHeaderCell>DATOS GENERALES</TableHeaderCell>
              <TableHeaderCell></TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell component='th' scope='row'>
                Identificacion
              </StyledTableCell>
              <StyledTableCell align='right'>{data && data.findColaboradorSmall[0].identificacion}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component='th' scope='row'>
                Nombre
              </StyledTableCell>
              <StyledTableCell align='right'>{data && data.findColaboradorSmall[0].nombre}</StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Divider className={classes.divider} />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='customized table' size='small'>
          <TableHead>
            <TableRow>
              <TableHeaderCell>LIQUIDACION TOTAL</TableHeaderCell>
              <TableHeaderCell></TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell component='th' scope='row'>
                Total servicios
              </StyledTableCell>
              <StyledTableCell align='right'>{data && data.findColaboradorSmall[0].totalServicios}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component='th' scope='row'>
                Aporte obligatorio a salud EPS
              </StyledTableCell>
              <StyledTableCell align='right'>{data && data.findColaboradorSmall[0].totalSalud}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component='th' scope='row'>
                Aporte obligatorio a pensión AFP
              </StyledTableCell>
              <StyledTableCell align='right'>{data && data.findColaboradorSmall[0].totalpension}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component='th' scope='row'>
                Riesgo ARL
              </StyledTableCell>
              <StyledTableCell align='right'>{data && data.findColaboradorSmall[0].totalArl}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell component='th' scope='row'>
                <Box fontWeight='fontWeightBold'>SUBTOTAL</Box>
              </StyledTableCell>
              <StyledTableCell align='right'>{data && data.findColaboradorSmall[0].subTotal}</StyledTableCell>
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
              <StyledTableCell align='right'>
                {' '}
                <Box fontWeight='fontWeightBold'>${data && data.findColaboradorSmall[0].subTotal}</Box>
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default DatosGenerales
