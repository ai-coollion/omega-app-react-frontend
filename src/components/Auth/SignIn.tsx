import { routers } from '@/configs'
import { loginUser } from '@/services'
import { dispatch, login } from '@/store'
import { colors } from '@/theme'
import { AuthFormData } from '@/types'
import { handleError } from '@/utils'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, FormControl, TextField, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import { FC, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as yup from 'yup'

interface Props {
  authChage: (currentState: boolean) => void
  onClose: () => void
}

const SignIn: FC<Props> = ({ authChage, onClose }) => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState<boolean>(false)

  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Email is invalid')
      .required('Email is required')
      .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Email is invalid'),
    password: yup.string().required('Password is required')
  })

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const onSubmit = async (formData: AuthFormData) => {
    try {
      setLoading(true)
      const response = await loginUser(formData)
      if (response) {
        dispatch(login({ user: response.user, accessToken: response.token }))
        if (response.user.role === 'admin') navigate(routers.Admin.Project)
        else navigate(routers.Settings)
        toast.success('Successfully Sign In')
        onClose()
      }
    } catch (error: any) {
      handleError(error)
    } finally {
      setLoading(false)
    }
  }

  const onRegisterClicked = async () => {
    authChage(false)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
        padding: '50px 30px',
        color: colors.white,
        backgroundColor: '#292929',
        borderRadius: 2
      }}
    >
      <Typography variant='h3' fontFamily='Inter' textAlign='center' width='80%' fontSize={'40px'}>
        Sign In
      </Typography>
      <Box
        component='form'
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          gap: 3,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <FormControl fullWidth>
          <Controller
            name='email'
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                type='email'
                placeholder='Email'
                autoComplete='email'
                fullWidth
                size='small'
                variant='outlined'
                error={Boolean(error)}
                helperText={error?.message}
                {...field}
              />
            )}
          />
        </FormControl>
        <FormControl fullWidth>
          <Controller
            name='password'
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                type='password'
                placeholder='Password'
                autoComplete='password'
                fullWidth
                size='small'
                variant='outlined'
                error={Boolean(error)}
                helperText={error?.message}
                {...field}
              />
            )}
          />
        </FormControl>
        <Stack direction='column' gap={2} width={'100%'}>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            size='small'
            aria-label='Signin Submit'
            loading={loading}
          >
            <Typography variant='subtitle2'>Sign In</Typography>
          </Button>
          <Button variant='contained' color='secondary' size='small' fullWidth onClick={onRegisterClicked}>
            <Typography variant='subtitle2'>Sign Up</Typography>
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}

export default SignIn
