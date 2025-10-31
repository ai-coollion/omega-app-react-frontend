import AppIcon from '@/components/Core/AppIcon'
import VideoTaskInput from '@/components/Core/Input/VideoTaskInput'
import { TaskVList } from '@/constants'
import { colors } from '@/theme'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'
import { IconButton, Stack, Typography } from '@mui/material'
import { ChangeEvent, useState } from 'react'

interface Task {
  id: string
  description: string
  disabled: boolean
}

const VideoTaskList = () => {
  const [taskList, setTaskList] = useState<Task[]>(TaskVList)
  const [currentId, setCurrentId] = useState<number>(5)
  const [input, setInput] = useState<string>('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  const handleTaskChange = (task: Task) => {
    if (task.disabled) {
      setTaskList(prevTaskList => prevTaskList.filter(item => item.id !== task.id))
    } else if (input !== '') {
      setTaskList(prevTaskList => {
        const currentTaskList = prevTaskList.filter(item => item.disabled)
        setCurrentId(currentId + 1)
        setInput('')

        return [
          ...currentTaskList,
          { id: `#${(currentId + 1).toString()}`, description: `${input}`, disabled: true },
          { id: `#${(currentId + 2).toString()}`, description: ``, disabled: false }
        ]
      })
    }
  }

  return (
    <Stack
      p={3}
      gap={3}
      sx={{ backgroundColor: colors.dark2, border: '1px solid #424242', flexGrow: 1, borderRadius: 1 }}
    >
      <Stack gap={0.5}>
        <Typography variant='h4' color='white'>
          Task List
        </Typography>
        <Typography variant='body2' color='gray2' fontFamily={'Open Sans'}>
          Manage Task description
        </Typography>
      </Stack>
      <Stack gap={2}>
        {taskList.map(task => (
          <Stack direction={'row'} gap={1} alignItems={'center'}>
            <IconButton color='default' sx={{ flexGrow: 0 }}>
              <DragIndicatorIcon sx={{ color: '#82868B', fontSize: '16px' }} />
            </IconButton>
            <VideoTaskInput task={task} handleChange={handleChange} value={input} />
            <IconButton color='inherit' sx={{ flexGrow: 0 }} onClick={() => handleTaskChange(task)}>
              <AppIcon name={task.disabled ? 'delete' : 'add2'} size={'20px'} />
            </IconButton>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default VideoTaskList
