import { TaskResType } from '@/types'
import { Stack } from '@mui/material'
import { ChangeEvent, FC } from 'react'
import TaskHeader from './TaskHeader'
import TaskItem from './TaskItem'

interface Props {
  taskList: TaskResType[]
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void
  handleModalOpen: () => void
  handleCurrentId: (taskId: string) => void
}

const TaskList: FC<Props> = ({ taskList, handleChange, handleCurrentId, handleModalOpen }) => {
  return (
    <Stack gap={0} sx={{ border: '1px solid #424242' }}>
      <TaskHeader handleChange={handleChange} />
      {taskList.map((task, index) => (
        <TaskItem
          key={`${index}-task`}
          task={task}
          id={index}
          handleModalOpen={handleModalOpen}
          handleCurrentId={handleCurrentId}
        />
      ))}
    </Stack>
  )
}

export default TaskList
