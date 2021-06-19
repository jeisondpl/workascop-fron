import React from 'react'
import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import { makeStyles, Typography, Grid, Box } from '@material-ui/core'
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

const useStyles = makeStyles(() => ({
  oppositeContent: {
    // TODO: adjust this value accordingly
    flex: 0.1,
  },
  text: {
    fontSize: '14px',
  },
  heading: {
    fontSize: '16px',
  },
}))

export default function BasicTimeline() {
  const classes = useStyles()
  return (
   
        <Timeline align='left'>
          <TimelineItem>
            <TimelineOppositeContent className={classes.oppositeContent} color='textSecondary'>
              <Typography className={classes.text}>$150.000</Typography>
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
                  <Typography className={classes.heading}>Limpieza de Piscinas</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <LiquidacionColaborador servicio='Limpieza de piscinas' codigociiu='8129' arl='IV' abc='L' />
                </AccordionDetails>
              </Accordion>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent className={classes.oppositeContent} color='textSecondary'>
              <Typography className={classes.text}>$120.000</Typography>
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
                  <Typography className={classes.heading}>Corete de cabello</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <LiquidacionCliente servicio='Corete de cabello' codigociiu='8129' arl='IV' abc='L' />
                </AccordionDetails>
              </Accordion>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent className={classes.oppositeContent} color='textSecondary'>
              <Typography className={classes.text}>$30.000</Typography>
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
                  <Typography className={classes.heading}>Limpieza de Piscinas</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <LiquidacionColaborador servicio='Limpieza de piscinas' codigociiu='8129' arl='IV' abc='L' />
                </AccordionDetails>
              </Accordion>
            </TimelineContent>
          </TimelineItem>
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
            <Typography style={{paddingTop:"4px"}} variant="h6" >300.000</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
    
  )
}
