import { popularLabels } from '@/constants'
import { Chip, Grid, Stack, Typography } from '@mui/material'

const Poplular = () => {
  return (
    <Stack gap={2} p={{ xs: '20px', sm: '0px' }}>
      <Typography variant='subtitle1' color='white'>
        Popular Labels
      </Typography>
      <Grid container rowSpacing={1.5} columnSpacing={1.5} justifyContent={'flex-start'}>
        {popularLabels.map((label, index) => (
          <Grid key={`label-${index}`}>
            <Chip label={label} color='info' size='medium' clickable={false} onClick={() => {}} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  )
}

export default Poplular
