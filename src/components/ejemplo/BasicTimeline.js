import React, { useState, useEffect } from 'react'
import { makeStyles, Theme, withStyles, Typography, Grid, Box, createStyles, TableContainer, Table, TableRow, TableBody, TableCell } from '@material-ui/core'
import CardContent from '@material-ui/core/CardContent'
import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import Paper from '@material-ui/core/Paper'
import HotelIcon from '@material-ui/icons/Hotel'
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'
import OppositeContentTimeline from './OppositeContentTimeline'
import DoneAllIcon from '@material-ui/icons/DoneAll'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import LiquidacionColaborador from './LiquidacionColaborador'
import LiquidacionCliente from './LiquidacionCliente'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'

import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'

import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Title from './Title'
import Acordeon from '../liquidacion/Acordeon'
import MuiTableHead from '@material-ui/core/TableHead'

// const useStyles = makeStyles(() => ({
//   oppositeContent: {
//     // TODO: adjust this value accordingly
//     flex: 0.2,
//   },
//   text: {
//     fontSize: '14px',
//   },
//   heading: {
//     fontSize: '16px',
//   },
// }))

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    oppositeContent: {
      // TODO: adjust this value accordingly
      flex: 0.2,
    },
    text: {
      fontSize: '14px',
    },
    heading: {
      fontSize: '16px',
    },
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

export default function BasicTimeline({ data }) {
  const classes = useStyles()

  return (
    <Timeline align='left'>
      {data &&
        data.liquidacion.map((item) => (
          <TimelineItem>
            <TimelineOppositeContent className={classes.oppositeContent} color='textSecondary'>
              <Typography className={classes.text}>{item.subTotal}</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color='primary'>
                <DoneAllIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
                  <Typography className={classes.heading}>{item.servicio}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Card className={classes.root} elevation='0'>
                    <CardHeader
                      avatar={
                        <Avatar aria-label='recipe' className={classes.avatar}>
                          {item.servicio.substring(0, 2)}
                        </Avatar>
                      }
                      // action={
                      //   <IconButton aria-label='settings'>
                      //     <MoreVertIcon />
                      //   </IconButton>
                      // }
                      title={item.servicio}
                      subheader={item.servicio}
                    />

                    <CardContent>
                      <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label='customized table' size='small'>
                          <TableHead>
                            <TableRow>
                              <TableHeaderCell>Conceptos</TableHeaderCell>
                              <TableHeaderCell align='right'>Valor</TableHeaderCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <StyledTableRow>
                              <StyledTableCell component='th' scope='row'>
                                Valor servicio
                              </StyledTableCell>
                              <StyledTableCell align='right'>{item.total}</StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                              <StyledTableCell component='th' scope='row'>
                                <Box fontWeight='fontWeightBold'>Seguridad Social</Box>
                              </StyledTableCell>
                              <StyledTableCell align='right'></StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                              <StyledTableCell component='th' scope='row'>
                                Aporte obligatorio a salud EPS
                              </StyledTableCell>
                              <StyledTableCell align='right'>{item.calculoSalud}</StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                              <StyledTableCell component='th' scope='row'>
                                Aporte obligatorio a pensión AFP
                              </StyledTableCell>
                              <StyledTableCell align='right'>{item.calculoPension}</StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                              <StyledTableCell component='th' scope='row'>
                                Riesgo ARL
                              </StyledTableCell>
                              <StyledTableCell align='right'>{item.calculoRiesgo}</StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                              <StyledTableCell component='th' scope='row'>
                                <Box fontWeight='fontWeightBold'>SUBTOTAL</Box>
                              </StyledTableCell>
                              <StyledTableCell align='right'>{item.subTotal}</StyledTableCell>
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
                              <StyledTableCell align='right'>{item.subTotal}</StyledTableCell>
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
                </AccordionDetails>
              </Accordion>
            </TimelineContent>
          </TimelineItem>
        ))}
      <TimelineItem>
        <TimelineOppositeContent className={classes.oppositeContent} color='textSecondary'>
          <Typography className={classes.text}>TOTAL</Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='Secondary'>
            <MonetizationOnIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Typography style={{ paddingTop: '4px' }} variant='h6'>
            {data && data.findColaboradorSmall[0].subTotal}
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}
