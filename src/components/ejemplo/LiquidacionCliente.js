import React, { useState } from 'react'
import { createStyles, TableContainer, Table, TableHead, TableRow, TableBody, TableCell, Grid, Box } from '@material-ui/core'
import { makeStyles, Theme, withStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Paper from '@material-ui/core/Paper'
import Title from './Title'
import Acordeon from '../liquidacion/Acordeon'

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


export default function LiquidacionCliente({ servicio, codigociiu, arl, abc }) {
  const classes = useStyles()
  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  const [expandedacor, setExpandedacor] = useState(false)
  const handleChangeAcordeon = (panel) => (event, isExpanded) => {
    setExpandedacor(isExpanded ? panel : false)
  }
  const str_date = `ARL: ${arl} -  CIIU: ${codigociiu} `
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label='recipe' className={classes.avatar}>
            {abc}
          </Avatar>
        }
        // action={
        //   <IconButton aria-label='settings'>
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={servicio}
        subheader={str_date}
      />

      <CardContent>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label='customized table'>
            <TableHead>
              <TableRow>
                <StyledTableCell>Concepto</StyledTableCell>
                <StyledTableCell align='right'>%</StyledTableCell>
                <StyledTableCell align='right'>Valor</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell component='th' scope='row'>
                  Valor servicio
                </StyledTableCell>
                <StyledTableCell align='right'></StyledTableCell>
                <StyledTableCell align='right'>$ 20.000</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component='th' scope='row'>
                  <Box fontWeight='fontWeightBold'>Seguridad Social</Box>
                </StyledTableCell>
                <StyledTableCell align='right'></StyledTableCell>
                <StyledTableCell align='right'></StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component='th' scope='row'>
                  Aporte obligatorio a salud EPS
                </StyledTableCell>
                <StyledTableCell align='right'>4</StyledTableCell>
                <StyledTableCell align='right'>140.000</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component='th' scope='row'>
                  Aporte obligatorio a pensión AFP
                </StyledTableCell>
                <StyledTableCell align='right'>4</StyledTableCell>
                <StyledTableCell align='right'>$120.000</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component='th' scope='row'>
                  Riesgo ARL
                </StyledTableCell>
                <StyledTableCell align='right'>4</StyledTableCell>
                <StyledTableCell align='right'>$120.000</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component='th' scope='row'>
                  <Box fontWeight='fontWeightBold'>Parafiscales</Box>
                </StyledTableCell>
                <StyledTableCell align='right'></StyledTableCell>
                <StyledTableCell align='right'></StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component='th' scope='row'>
                  Caja de compensación familiar
                </StyledTableCell>
                <StyledTableCell align='right'>4</StyledTableCell>
                <StyledTableCell align='right'>$120.000</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component='th' scope='row'>
                  SENA
                </StyledTableCell>
                <StyledTableCell align='right'>4</StyledTableCell>
                <StyledTableCell align='right'>$120.000</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component='th' scope='row'>
                  ICBF
                </StyledTableCell>
                <StyledTableCell align='right'>4</StyledTableCell>
                <StyledTableCell align='right'>$120.000</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component='th' scope='row'>
                  <Box fontWeight='fontWeightBold'>Retenciones</Box>
                </StyledTableCell>
                <StyledTableCell align='right'></StyledTableCell>
                <StyledTableCell align='right'></StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component='th' scope='row'>
                  Retención en la fuente
                </StyledTableCell>
                <StyledTableCell align='right'>4</StyledTableCell>
                <StyledTableCell align='right'>$120.000</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component='th' scope='row'>
                  <Box fontWeight='fontWeightBold'>SUBTOTAL</Box>
                </StyledTableCell>
                <StyledTableCell align='right'></StyledTableCell>
                <StyledTableCell align='right'>23.428</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component='th' scope='row'>
                  Servicio WORKAScop
                </StyledTableCell>
                <StyledTableCell align='right'>4</StyledTableCell>
                <StyledTableCell align='right'>$1.000</StyledTableCell>
              </StyledTableRow>
              <StyledTableRow>
                <StyledTableCell component='th' scope='row'>
                  <Box textAlign='right' fontWeight='fontWeightBold'>
                    TOTAL
                  </Box>
                </StyledTableCell>
                <StyledTableCell align='right'></StyledTableCell>
                <StyledTableCell align='right'>325.000</StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
        <Typography className={classes.fecha} color='textSecondary'>
          Detalle
        </Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions> */}

      {/* <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Grid spacing={1} xs={12} sm={12} md={12} lg={12} xl={12}>
            <Acordeon title='Servicio 1' name='panel1' handleChangeAcordeon={handleChangeAcordeon} expanded={expandedacor}>
              <p>Componente detalle</p>
            </Acordeon>
            <Acordeon title='Servicio 2' name='panel2' handleChangeAcordeon={handleChangeAcordeon} expanded={expandedacor}>
              <p>Componente detalle</p>
            </Acordeon>
            <Acordeon title='Servicio 3' name='panel3' handleChangeAcordeon={handleChangeAcordeon} expanded={expandedacor}>
              <p>Componente detalle</p>
            </Acordeon>
            <Acordeon title='Servicio 4' name='panel4' handleChangeAcordeon={handleChangeAcordeon} expanded={expandedacor}>
              <p>Componente detalle</p>
            </Acordeon>
            <Acordeon title='Servicio 5' name='panel5' handleChangeAcordeon={handleChangeAcordeon} expanded={expandedacor}>
              <p>Componente detalle</p>
            </Acordeon>
          </Grid>
        </CardContent>
      </Collapse> */}

    </Card>
  )
}


