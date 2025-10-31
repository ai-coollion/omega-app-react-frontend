import { Stack, Typography } from '@mui/material'
import { FC, ReactNode } from 'react'

interface Props {
  title: string
  description: string
  children?: ReactNode
}

const PageDescription: FC<Props> = ({ title, description, children }) => {
  return (
    <Stack display={'column'} gap={4}>
      <Stack direction={'column'} gap={1}>
        <Typography variant='h1' color='white'>
          {title}
        </Typography>
        <Typography variant='body1' color='grey'>
          {description}
        </Typography>
      </Stack>
      {children}
    </Stack>
  )
}

export default PageDescription
