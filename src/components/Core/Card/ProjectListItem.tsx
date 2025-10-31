import { IProject } from '@/types'
import { Chip, IconButton, Stack, Typography } from '@mui/material'
import moment from 'moment'
import { FC } from 'react'
import AppIcon from '../AppIcon'

interface Props {
  project: IProject
}

const ProjectListItem: FC<Props> = ({ project }) => {
  return (
    <Stack
      p={2}
      direction={{ desktop: 'row', xs: 'column' }}
      sx={{ backgroundColor: '#363636' }}
      alignItems={{ sm: 'center', xs: 'flex-start' }}
      gap={3}
      justifyContent={'space-between'}
    >
      <Typography
        variant='h5'
        component={'span'}
        color='white'
        sx={{
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          width: '50%'
        }}
      >
        {project.title}
      </Typography>
      <Chip
        label={project.isVerified ? 'Allowed' : 'Pending'}
        color={project.isVerified ? 'success' : 'warning'}
        clickable={false}
        onClick={() => {}}
        sx={{ mr: 1 }}
      />
      <Typography variant='body1' component={'span'} color='gray2'>
        {moment(project.createdAt).fromNow()}
      </Typography>
      <Stack direction={{ mobile: 'row', xs: 'column' }} gap={1.5} alignItems={'center'} justifyContent={'flex-end'}>
        <IconButton color='inherit'>
          <AppIcon name='delete' size={'20px'} />
        </IconButton>
        <IconButton color='inherit'>
          <AppIcon name='more' size={'20px'} />
        </IconButton>
      </Stack>
    </Stack>
  )
}

export default ProjectListItem
