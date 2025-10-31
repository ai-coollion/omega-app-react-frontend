import { registerUser } from '@/services'
import { colors } from '@/theme'
import { AuthFormData } from '@/types'
import { handleError } from '@/utils'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, FormControl, TextField, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import { FC, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as yup from 'yup'

interface Props {
  authChage: (currentState: boolean) => void
  onClose: () => void
}

const SignUp: FC<Props> = ({ authChage, onClose }) => {
  const [loading, setLoading] = useState<boolean>(false)

  const schema = yup.object().shape({
    username: yup
      .string()
      .required('You must enter username.')
      .matches(/^[a-zA-Z\s]*$/, 'Only contain letters and spaces'),
    email: yup.string().required('You must enter email.').email('email is invalid.'),
    password: yup.string().required('You must enter password'),
    confirmPassword: yup
      .string()
      .required('You must confirm password')
      .oneOf([yup.ref('password')], 'Password is not matched')
  })

  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const onSubmit = async (formData: AuthFormData) => {
    try {
      setLoading(true)
      const result = await registerUser(formData)

      toast.success(result.message)
      onClose()
    } catch (error) {
      handleError(error)
    } finally {
      setLoading(false)
    }
  }

  const onLoginClicked = async () => {
    authChage(true)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
        color: colors.white,
        padding: '50px 30px',
        backgroundColor: '#292929',
        borderRadius: 2
      }}
    >
      <Typography variant='h3' fontFamily='Inter' textAlign='center' width='80%' fontSize={'40px'}>
        Sign Up
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
            name='username'
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                type='text'
                placeholder='Username'
                autoComplete='username'
                fullWidth
                size='small'
                variant='outlined'
                error={Boolean(error)}
                helperText={error?.message}
                sx={{ fontSize: '12px' }}
                {...field}
              />
            )}
          />
        </FormControl>
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
        <FormControl fullWidth>
          <Controller
            name='confirmPassword'
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                type='password'
                placeholder='Confirm Password'
                autoComplete='confirmPassword'
                fullWidth
                size='small'
                variant='outlined'
                error={Boolean(error)}
                helperText={error?.message}
                sx={{ fontSize: '12px' }}
                {...field}
              />
            )}
          />
        </FormControl>
        <Stack direction={'column'} gap={2} width={'100%'}>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            size='small'
            color='primary'
            loading={loading}
            aria-label='SignUp Submit'
          >
            <Typography variant='subtitle2'>Sign Up</Typography>
          </Button>
          <Button
            fullWidth
            variant='contained'
            color='secondary'
            size='small'
            aria-label='SignIn Submit'
            onClick={onLoginClicked}
          >
            <Typography variant='subtitle2'>Sign In</Typography>
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}

export default SignUp
