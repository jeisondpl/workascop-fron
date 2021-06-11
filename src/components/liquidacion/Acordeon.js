import React, { useState } from 'react'
import { Typography, makeStyles, Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles((theme) => ({
  accordion: {
    flexGrow: 1,
  },
}))

const Acordeon = ({ title, name, children, handleChangeAcordeon, expanded }) => {
  const classes = useStyles()

  return (
    <Accordion expanded={expanded === name} onChange={handleChangeAcordeon(name)} className={classes.accordion}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1bh-content' id='panel1bh-header'>
        <Typography className={classes.secondaryHeading}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  )
}

export default Acordeon
