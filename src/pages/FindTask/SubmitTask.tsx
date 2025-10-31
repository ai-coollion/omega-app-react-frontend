import AppIcon from '@/components/Core/AppIcon'
import { updateTask, uploadMedia } from '@/services'
import { TaskResType } from '@/types'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import { Box, Button, IconButton, Stack, Typography } from '@mui/material'
import moment from 'moment'
import { ChangeEvent, FC, useRef, useState } from 'react'
import { toast } from 'react-toastify'

interface Props {
  onCloseModal: () => void
  currentId: string
  currentTask: TaskResType
  handleTask: () => void
}

const SubmitTask: FC<Props> = ({ onCloseModal, handleTask, currentId, currentTask }) => {
  const [isDisabled, setIsDisabled] = useState<boolean>(true)
  const [selectedFile, setSelectedFile] = useState<File | string>()
  const [loading, setLoading] = useState<boolean>(false)
  const [fileName, setFileName] = useState<string>('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  const handleInputChange = (file: ChangeEvent) => {
    const { files } = file.target as HTMLInputElement
    if (files && files.length !== 0) {
      setSelectedFile(files[0])
      setFileName(files[0].name)
      setIsDisabled(false)
    }
  }

  const onDeleteButton = () => {
    setIsDisabled(true)
  }

  const onSubmit = async () => {
    try {
      let newFilename = ''
      setLoading(true)
      if (selectedFile instanceof File) {
        console.log(selectedFile)
        newFilename = await uploadMedia(selectedFile)
      }
      if (currentTask.status === 'issue') {
        const updateData = await updateTask(currentId, { solveVideo: newFilename })
        toast.success(updateData.message)
        onCloseModal()
        handleTask()
      } else {
        toast.warning('Only Issue Problems')
        onCloseModal()
      }
    } catch (err: any) {
      toast.error(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Stack
      gap={3}
      p={3}
      sx={{ backgroundColor: '#292929', borderRadius: 1, width: { md: '452px', xs: '100%' }, position: 'relative' }}
      alignItems={'center'}
    >
      <Typography variant='h1' fontSize={'32px'} color='white'>
        Submit Task
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          gap: 2,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Stack gap={1} width={'100%'}>
          <Typography variant='subtitle1' color='gray'>
            Upload Video
          </Typography>
          <Stack
            display={isDisabled ? 'flex' : 'none'}
            justifyContent={'center'}
            alignItems={'center'}
            height={'200px'}
            sx={{ backgroundColor: '#363636', border: '1px dashed #424242', borderRadius: '8px' }}
          >
            <Stack gap={2} alignItems={'center'} justifyContent={'center'}>
              <IconButton color='inherit' onClick={handleButtonClick}>
                <AppIcon name='upload' color='white' />
              </IconButton>
              <input
                id='account-settings-upload-image'
                type='file'
                ref={fileInputRef} // Attach the ref to the input
                hidden
                accept='video/mp4'
                onChange={handleInputChange}
              />
              <Stack alignItems={'center'}>
                <Typography variant='subtitle1' color='white'>
                  Upload Task
                </Typography>
                <Typography variant='body1' color='gray'>
                  file Format
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            display={isDisabled ? 'none' : 'flex'}
            direction={'row'}
            gap={2}
            p={2}
            sx={{ backgroundColor: '#363636', border: '1px solid #424242', borderRadius: '8px' }}
          >
            <IconButton color='default'>
              <AppIcon name='video' />
            </IconButton>
            <Stack flexGrow={1}>
              <Typography variant='body1' color='white'>
                {fileName}
              </Typography>
              <Typography variant='body1' color='gray'>
                {moment(Date.now()).format()}
              </Typography>
            </Stack>
            <IconButton color='default' onClick={onDeleteButton}>
              <AppIcon name='delete' color='white' />
            </IconButton>
          </Stack>
        </Stack>
        <Typography variant='body2' color='gray'>
          *Submitting the task according to the issue and intentions. Keep in mind that be sure to do your homework and
          consider how you'll be using your Omegacoin
        </Typography>
        <Button
          fullWidth
          variant='contained'
          color='primary'
          size='small'
          aria-label='Submit'
          loading={loading}
          disabled={isDisabled}
          onClick={onSubmit}
        >
          <Typography variant='body2'>SUBMIT TASK</Typography>
        </Button>
      </Box>
      <IconButton color='default' sx={{ position: 'absolute', top: '12px', right: '12px' }} onClick={onCloseModal}>
        <CloseOutlinedIcon />
      </IconButton>
    </Stack>
  )
}

export default SubmitTask
