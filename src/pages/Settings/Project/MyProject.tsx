import { DashboardBox, StyledTableCell } from '@/components/Core/Styled'
import { colors } from '@/theme'
import { IProject } from '@/types'
import {
  Box,
  Chip,
  Link,
  Paper,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'
import { FC } from 'react'

interface Props {
  projects: IProject[]
}

const MyProject: FC<Props> = ({ projects }) => {
  return (
    <DashboardBox>
      <Stack flexDirection={'column'} gap={3}>
        <Box>
          <Typography variant='h4'>My Projects</Typography>
          <Typography variant='body2' sx={{ color: '#747474' }}>
            Manage My Project
          </Typography>
        </Box>
        <Stack gap={1}>
          <TableContainer component={Paper} sx={{ position: 'relative' }}>
            <Table aria-label='transaction history table'>
              <TableHead>
                <TableRow>
                  <StyledTableCell>ProjectName</StyledTableCell>
                  <StyledTableCell>Provider</StyledTableCell>
                  <StyledTableCell>GithubLink</StyledTableCell>
                  <StyledTableCell>Price</StyledTableCell>
                  <StyledTableCell>Status</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {projects.map((item, index) => (
                  <TableRow
                    key={`row${index}`}
                    sx={{
                      overflow: 'hidden',
                      backgroundColor: index % 2 ? '#292929 !important' : '#363636 !important',
                      border: 'none'
                    }}
                  >
                    <StyledTableCell align='left'>{item.title}</StyledTableCell>
                    <StyledTableCell align='left'>{item.provider?.username}</StyledTableCell>
                    <StyledTableCell align='left'>
                      <Link
                        href={item.githubLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline', color: colors.prime } }}
                      >
                        {item.githubLink}
                      </Link>
                    </StyledTableCell>
                    <StyledTableCell align='left'>
                      <Box
                        component='span'
                        sx={{
                          color: colors.prime
                        }}
                      >
                        {item.price}
                      </Box>
                    </StyledTableCell>
                    <StyledTableCell align='left'>
                      <Chip
                        color={item.isVerified ? 'success' : 'warning'}
                        label={item.isVerified ? 'Allowed' : 'Pending'}
                        clickable={false}
                        onClick={() => {}}
                      />
                    </StyledTableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </Stack>
    </DashboardBox>
  )
}

export default MyProject
