import SearchInput from '@/components/Core/Input/SearchInput'
import { OptionSelect } from '@/components/Core/Select/OptionSelect'
import { authors, labels, sorts } from '@/constants'
import { colors } from '@/theme'
import AdjustIcon from '@mui/icons-material/Adjust'
import CheckIcon from '@mui/icons-material/Check'
import { SelectChangeEvent, Stack, Typography } from '@mui/material'
import { ChangeEvent, FC, useState } from 'react'

interface Props {
  handleChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const TaskHeader: FC<Props> = ({ handleChange }) => {
  const [label, setLabel] = useState<string>(labels[0].title)
  const [author, setAuthor] = useState<string>(authors[0].title)
  const [sort, setSort] = useState<string>(sorts[0].title)

  const handleChangeLabel = (event: SelectChangeEvent) => {
    setLabel(event.target.value as string)
  }

  const handleChangeAuthor = (event: SelectChangeEvent) => {
    setAuthor(event.target.value as string)
  }

  const handleChangeSort = (event: SelectChangeEvent) => {
    setSort(event.target.value as string)
  }

  return (
    <Stack
      p={'16px 16px'}
      direction={{ desktop: 'row', xs: 'column' }}
      sx={{ backgroundColor: colors.dark2 }}
      alignItems={'center'}
      gap={3}
      justifyContent={'space-between'}
    >
      <Stack direction={'row'} flexGrow={1} maxWidth={'500px'} gap={1.5} alignItems={'center'}>
        <AdjustIcon sx={{ fontSize: '20px', color: '#fff' }} />
        <Typography
          variant='body1'
          component={'span'}
          color='white'
          sx={{ maxWidth: '450px', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden', mr: 2 }}
        >
          145 Open
        </Typography>
        <CheckIcon sx={{ fontSize: '20px', color: '#82868B' }} />
        <Typography
          variant='body1'
          component={'span'}
          color='gray2'
          sx={{ maxWidth: '450px', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}
        >
          45 Solved
        </Typography>
      </Stack>
      <Stack direction={{ desktop: 'row', xs: 'column' }} gap={2} alignItems={'center'}>
        <SearchInput handleChange={handleChange} />
        <Stack direction={'row'} gap={1.5} flexGrow={0}>
          <OptionSelect items={labels} value={label} handleChange={handleChangeLabel} />
          <OptionSelect items={authors} value={author} handleChange={handleChangeAuthor} />
          <OptionSelect items={sorts} value={sort} handleChange={handleChangeSort} />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default TaskHeader
