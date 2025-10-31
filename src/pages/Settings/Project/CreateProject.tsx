import AppIcon from '@/components/Core/AppIcon'
import { TypeSelect } from '@/components/Core/Select/TypeSelect'
import { DashboardBox } from '@/components/Core/Styled'
import { productCategories } from '@/constants'
import { useUserInfo } from '@/hooks'
import { uploadMedia } from '@/services'
import { createProject } from '@/services/projectServices'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  MenuItem,
  OutlinedInput,
  Stack,
  TextField,
  Typography
} from '@mui/material'
import { ChangeEvent, FC, useRef, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as yup from 'yup'

interface FormValues {
  title?: string
  description?: string
  price?: number
  type?: string
  githubLink?: string
  media: File | string
}

interface Props {
  handleMyProjects: () => void
}

const CreateProject: FC<Props> = ({ handleMyProjects }) => {
  const userInfo = useUserInfo()
  const [inputValue, setInputValue] = useState<string>('')
  const [previewUrl, setPreviewUrl] = useState<string>('/assets/images/bestGood.png')
  const [loading, setLoading] = useState<boolean>(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const schema = yup.object().shape({
    media: yup.mixed<File | string>().optional().default(''),
    description: yup.string(),
    type: yup.string(),
    price: yup.number().required('Only Number'),
    githubLink: yup
      .string()
      .url('Please enter a valid URL')
      .required('GitHub link is required')
      .matches(
        /^https:\/\/github\.com\//, // Use a regular expression to match the domain
        'Please enter a valid GitHub link (e.g., https://github.com/user/repo)'
      ),
    title: yup.string()
  })

  const { control, setValue, handleSubmit } = useForm({
    defaultValues: {
      media: `/assets/images/bestGood.png`,
      description: '',
      type: productCategories[0].value,
      price: 0,
      githubLink: '',
      title: ''
    },
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data: FormValues) => {
    if (userInfo?.role !== 'developer') {
      toast.warning('Only Developers upload project')
      return
    }
    setLoading(true)
    try {
      let mediaData = ''
      if (data.media instanceof File) {
        const filename = await uploadMedia(data.media)
        mediaData = filename
      }
      data.media = mediaData || data.media
      await createProject(data)
      handleMyProjects()
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleInputImageChange = (file: ChangeEvent) => {
    const reader = new FileReader()
    const { files } = file.target as HTMLInputElement
    if (files && files.length !== 0) {
      setValue('media', files[0])
      reader.onload = () => setPreviewUrl(reader.result as string)
      reader.readAsDataURL(files[0])

      if (reader.result !== null) {
        setInputValue(reader.result as string)
      }
    }
  }

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <DashboardBox>
      <Stack flexDirection={'column'} gap={3}>
        <Box>
          <Typography variant='h4'>Create Project</Typography>
          <Typography variant='body2' sx={{ color: '#747474' }}>
            Create your own project and register
          </Typography>
        </Box>
        <Stack flexDirection={{ md: 'row', xs: 'column' }} gap={3}>
          <Stack
            flexDirection={'column'}
            alignItems={'center'}
            p={3}
            gap={3}
            height={'250px'}
            flexGrow={0}
            sx={{ border: `1px solid #343434`, borderRadius: '16px' }}
          >
            <Box component={'img'} src={previewUrl} width={'150px'} height={'150px'} sx={{ objectFit: 'cover' }} />
            <input
              id='account-settings-upload-image'
              type='file'
              ref={fileInputRef} // Attach the ref to the input
              hidden
              accept='image/png, image/jpeg'
              onChange={handleInputImageChange}
              value={inputValue}
            />
            <Stack flexDirection={'row'} gap={2}>
              <Button
                variant='contained'
                color='secondary'
                startIcon={<AppIcon name='submit' size={20} />}
                onClick={handleButtonClick}
              >
                UPLOAD
              </Button>
            </Stack>
          </Stack>
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
                Project Name
              </FormLabel>
              <Controller
                name='title'
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    type='text'
                    placeholder='Project Name'
                    autoComplete='title'
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
              <FormLabel htmlFor='fullName' sx={{ color: '#747474' }}>
                Description
              </FormLabel>
              <Controller
                name='description'
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    type='text'
                    placeholder='Description'
                    autoComplete='description'
                    fullWidth
                    multiline
                    size='medium'
                    rows={5}
                    variant='outlined'
                    error={Boolean(error)}
                    helperText={error?.message}
                    {...field}
                  />
                )}
              />
            </FormControl>
            <FormControl fullWidth>
              <FormLabel htmlFor='fullName' sx={{ color: '#747474' }}>
                GitHubLink
              </FormLabel>
              <Controller
                name='githubLink'
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    type='text'
                    placeholder='GithubLink'
                    autoComplete='githubLink'
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
              <FormLabel htmlFor='fullName' sx={{ color: '#747474' }}>
                Price
              </FormLabel>
              <Controller
                name='price'
                control={control}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    type='number'
                    placeholder='price'
                    autoComplete='price'
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
              <FormLabel htmlFor='fullName' sx={{ color: '#747474' }}>
                Project Type
              </FormLabel>
              <Controller
                name='type'
                control={control}
                render={({ field }) => (
                  <TypeSelect
                    input={<OutlinedInput />}
                    inputProps={{ 'aria-label': 'currency option label' }}
                    size='small'
                    {...field}
                    disabled={loading}
                  >
                    {productCategories.map(item => (
                      <MenuItem key={item.value} value={item.value} sx={{ fontSize: '14px' }}>
                        <Box>{item.title}</Box>
                      </MenuItem>
                    ))}
                  </TypeSelect>
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
                loading={loading}
              >
                <Typography variant='body2'>Submit</Typography>
              </Button>
            </Box>
          </Box>
        </Stack>
      </Stack>
    </DashboardBox>
  )
}

export default CreateProject
