import { useNotificationInfo } from '@/hooks'
import { Stack } from '@mui/material'
import { FC } from 'react'
import NotificationItem from './NotificationItem'

interface Props {
  isInHead: boolean
}

const NotificationBox: FC<Props> = ({ isInHead }) => {
  const { notifications } = useNotificationInfo()

  return (
    <Stack flexDirection={'column'} gap={2}>
      {notifications &&
        notifications.map((item, index) => {
          if (isInHead) {
            return index < 3 ? <NotificationItem key={item._id} item={item} isInHead={isInHead} /> : null
          } else return <NotificationItem key={`row-${index}`} item={item} isInHead={isInHead} />
        })}
    </Stack>
  )
}

export default NotificationBox
