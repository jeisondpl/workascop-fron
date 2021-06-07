import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, makeStyles } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

const TableServicios = ({ data }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell align='center'>id</StyledTableCell>
            <StyledTableCell align='center'>video</StyledTableCell>
            <StyledTableCell align='center'>fecha</StyledTableCell>
            <StyledTableCell align='center'>numero</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((elemento) => (
            <TableRow key={elemento.id}>
              <TableCell align='center'>{elemento.id}</TableCell>
              <TableCell align='center'>{elemento.video}</TableCell>
              <TableCell align='center'>{elemento.fecha}</TableCell>
              <TableCell align='center'>{elemento.numero}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableServicios
