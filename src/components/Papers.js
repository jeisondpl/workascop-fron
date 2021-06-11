import React from 'react'
import { makeStyles, Paper } from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles({
  paper: {
    marginTop: '10px',
    padding: '30px',
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    margin: '5px',
  },

  fixedHeight: {
    height: ({ height }) => height,
  },
})

const Papers = ({ children, height }) => {
  const classes = useStyles({ height: height })
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)
  return <Paper className={fixedHeightPaper}>{children}</Paper>
}

export default Papers
