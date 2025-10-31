import { DashboardBox } from '@/components/Core/Styled'
import { veraContractAbi, veraContractAddr } from '@/constants'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, FormControl, FormLabel, TextField, Typography } from '@mui/material'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useWaitForTransactionReceipt, useWriteContract } from 'wagmi'
import * as yup from 'yup'

interface FormValues {
  amount: number
}

const VeraCoinDeposite: FC = () => {
  const schema = yup.object().shape({
    amount: yup
      .number()
      .required('Amouint is required')
      .moreThan(0, 'Amouint must be greater than 0')
      .typeError('Amouint must be a number') // Handles non-numeric input
  })

  const { control, handleSubmit } = useForm({
    defaultValues: {
      amount: 0
    },
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const { writeContract, data: hash, isPending, error: writeError } = useWriteContract()
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash })

  const onSubmit = async (data: FormValues) => {
    if (!data.amount) {
      return
    }
    writeContract({
      address: veraContractAddr,
      abi: veraContractAbi,
      functionName: 'deposit',
      args: [BigInt(data.amount * 10 ** 18)]
    })
  }

  return (
    <DashboardBox>
      <Box
        component='form'
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          gap: 3,
          justifyContent: 'flex-start',
          alignItems: 'flex-end'
        }}
      >
        <FormControl fullWidth>
          <FormLabel htmlFor='fullName' sx={{ color: '#747474' }}>
            Deposite
          </FormLabel>
          <Controller
            name='amount'
            control={control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                type='number'
                placeholder='Enter your number'
                autoComplete='amount'
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
        <Box width={{ md: 'auto', xs: '100%' }}>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            size='small'
            aria-label='Submit'
            disabled={isPending || isConfirming}
          >
            <Typography variant='body2'>
              {isPending ? 'Confirming...' : isConfirming ? 'Waiting for confirmation...' : 'Deposite'}
            </Typography>
          </Button>
        </Box>
      </Box>
      <Typography variant='body1'>
        {isConfirmed ? 'isConfirmed' : null}
        {writeError ? 'Error' : null}
      </Typography>
    </DashboardBox>
  )
}

export default VeraCoinDeposite
