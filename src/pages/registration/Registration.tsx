import React, { useContext } from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { ReactComponent as LogoSVG } from '../../assets/LOGO.svg'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Context } from '../../index'
import { observer } from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'

export interface RegisterFormProps {
  firstName: string
  lastName: string
  email: string
  password: string
}

const validationSchema = yup
  .object({
    firstName: yup.string().required('Введите своё имя'),
    lastName: yup.string().required('Введите своё имя'),
    email: yup.string().email('Неверная почта').required('Введите почту'),
    password: yup.string().min(6, '​Минимальная длина пароля 6 символов').required(),
  })
  .required()

export const Registration: React.FC = observer(() => {
  const navigate = useNavigate()
  const { store } = useContext(Context)

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: values => store.registration(values.email, values.password),
  })

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <LogoSVG width="68" />
        <Typography align="center" component="h1" variant="h6">
          Регистрация в приложении "Chat App"
        </Typography>
        <Box component="form" noValidate onSubmit={formik.handleSubmit} id="myForm" sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="Имя"
                autoFocus
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={formik.touched.firstName && !!formik.errors.firstName}
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Фамилия"
                name="lastName"
                autoComplete="family-name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={formik.touched.lastName && !!formik.errors.lastName}
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Введите Email"
                name="email"
                autoComplete="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && !!formik.errors.email}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Пароль"
                type="password"
                id="password"
                autoComplete="new-password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && !!formik.errors.password}
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" form="myForm" sx={{ mt: 3, mb: 2 }}>
            Зарегистрироваться
          </Button>
          <Button variant="outlined" fullWidth onClick={() => navigate('/auth')}>
            Войти
          </Button>
        </Box>
      </Box>
    </Container>
  )
})
