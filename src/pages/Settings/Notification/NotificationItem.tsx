import { readNotification } from '@/services'
import { dispatch, markNotificationAsRead } from '@/store'
import { NotificationType } from '@/types'
import { Stack, styled, Typography } from '@mui/material'
import moment from 'moment'
import { FC, useRef } from 'react'
import NotificationTypeIcon from './NotificationTypeIcon'

interface Props {
  item: NotificationType
  isInHead: boolean
}

interface ContainerProps {
  isRead: boolean
}

const StyledNotificationContainer = styled(Stack, {
  shouldForwardProp: prop => prop !== 'isRead'
})<ContainerProps>(({ theme, isRead }) => ({
  padding: '12px',
  position: 'relative',
  gap: 2,
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column'
  },
  background: isRead ? '#1A1A1A' : '#3f3824',
  color: isRead ? '#747474' : '#ffffff'
}))

const NotificationItem: FC<Props> = ({ item, isInHead }) => {
  const stackRef = useRef<HTMLDivElement>(null)

  const handleNotificationRead = async (notificationId: string) => {
    if (!item.isRead) {
      try {
        const result = await readNotification(notificationId)
        if (result) {
          dispatch(markNotificationAsRead(notificationId))
        }
      } catch (error: any) {
        console.log(error.message)
      }
    }
  }

  return (
    <StyledNotificationContainer
      isRead={item.isRead}
      onClick={() => handleNotificationRead(item._id)}
      sx={{ flexShrink: 0, cursor: 'pointer' }}
    >
      <Stack flexDirection='row' gap={'12px'} alignItems={'flex-start'}>
        <NotificationTypeIcon type={item.type} isRead={item.isRead} />
        <Stack
          direction={isInHead ? 'column' : { md: 'row', xs: 'column' }}
          ref={stackRef}
          justifyContent={'space-between'}
          alignItems={isInHead ? 'flex-start' : { md: 'center', xs: 'flex-start' }}
          gap={2}
          flexGrow={1}
        >
          <Stack
            flexDirection={'column'}
            gap={0.5}
            sx={{
              color: item.isRead ? '#747474' : '#1f1f1f'
            }}
          >
            <Typography
              variant='h4'
              fontSize={'20px'}
              fontWeight={500}
              fontFamily={'Inter'}
              color={item.isRead ? 'gray' : 'white'}
            >
              {item.title}
            </Typography>
            <Typography variant='body2' fontWeight={400} color={item.isRead ? 'gray' : 'white'}>
              {`from ${item.fromUser} ${moment(item.createdAt).fromNow()}`}
            </Typography>
            <Typography
              variant='body1'
              fontWeight={400}
              color={item.isRead ? 'gray' : 'white'}
              fontSize={'16px !important'}
            >
              {item.content}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </StyledNotificationContainer>
  )
}

export default NotificationItem
