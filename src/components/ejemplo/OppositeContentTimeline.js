import * as React from 'react'
import Timeline from '@material-ui/lab/Timeline'
import TimelineItem from '@material-ui/lab/TimelineItem'
import TimelineSeparator from '@material-ui/lab/TimelineSeparator'
import TimelineConnector from '@material-ui/lab/TimelineConnector'
import TimelineContent from '@material-ui/lab/TimelineContent'
import TimelineDot from '@material-ui/lab/TimelineDot'
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent'
import { makeStyles } from '@material-ui/core/styles'
// import SimpleAccordion from './SimpleAccordion'

const useStyles = makeStyles(() => ({
  oppositeContent: {
    // TODO: adjust this value accordingly
    flex: 0.2,
  },
}))

export default function OppositeContentTimeline() {
  const classes = useStyles()
  return (
    <Timeline align='left'>
      <TimelineItem>
        <TimelineOppositeContent className={classes.oppositeContent} color='textSecondary'>
          09:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          {/* <SimpleAccordion title='Limpieza picina' /> */}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent className={classes.oppositeContent} color='textSecondary'>
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          {/* <SimpleAccordion title='Instrumentos Musicales' /> */}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent className={classes.oppositeContent} color='textSecondary'>
          12:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          {/* <SimpleAccordion title='Entrenador Deportivo' /> */}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent className={classes.oppositeContent} color='textSecondary'>
          9:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        {/* <SimpleAccordion title='Enfermeria' /> */}
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}
