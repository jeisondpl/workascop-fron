import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Image from 'material-ui-image'
import logo from '../../assets/img/logo2.png'
import { useHistory, useLocation } from 'react-router-dom'

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        WorkasCop
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage:
      'url(https://previews.123rf.com/images/incomible/incomible1404/incomible140400115/27951584-patr%C3%B3n-sin-fisuras-con-las-herramientas-de-trabajo-de-reparaci%C3%B3n-de-los-iconos-.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export default function SignInSide() {
  const classes = useStyles()
  const history = useHistory()

  const styleImage = {
    width: '180px',
    height: '70px',
    marginTop: '15px',
    marginBottom: '20px',
  }

  const handleIniciar = () => {
    history.push('/liquidacion')
  }

  return (
    <Grid container component='main' className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          {/* <Avatar className={classes.avatar}> */}
          {/* <LockOutlinedIcon /> */}
          <Image aspectRatio={0} disableSpinner={true} style={styleImage} className='img_logo' cover={true} color src={logo} />
          {/* </Avatar> */}
          <Typography component='h1' variant='h5'>
            Iniciar sesion WorkasCop
          </Typography>
          <form className={classes.form} noValidate>
            <TextField variant='outlined' margin='normal' required fullWidth id='email' label='Correo electronico' name='email' autoComplete='email' autoFocus />
            <TextField variant='outlined' margin='normal' required fullWidth name='password' label='Contraseña' type='password' id='password' autoComplete='current-password' />
            <FormControlLabel control={<Checkbox value='remember' color='primary' />} label='Recuérdame' />
            <Button type='submit' fullWidth variant='contained' color='primary' onClick={handleIniciar} className={classes.submit}>
              Iniciar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href='#' variant='body2'>
                  Se te olvidó tu contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link href='#' variant='body2'>
                  {'¿No tienes una cuenta? Inscribirse'}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  )
}
