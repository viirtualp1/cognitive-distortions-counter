import type { FC } from 'react'
import { Button, Grid, Typography } from '@mui/material'
import ClearIcon from '@mui/icons-material/clear'

interface Props {
  title: string
  count: number
  addCount: () => void
  clearCount: () => void
}

const CounterGrid: FC<Props> = ({ title, count, addCount, clearCount }) => {
  return (
    <Grid container alignItems="center" spacing={5} sx={{ width: '100%' }}>
      <Grid size={7}>
        <Typography textTransform="uppercase">{title}</Typography>
      </Grid>
      <Grid size={2}>
        <Button
          variant="contained"
          sx={{ minHeight: '64px', width: '100%', fontSize: 18 }}
          color="primary"
          onClick={addCount}
        >
          {count}
        </Button>
      </Grid>
      <Grid size={2}>
        <Button
          variant="contained"
          sx={{ minHeight: '64px', width: '100%', fontSize: 18 }}
          color="error"
          onClick={clearCount}
        >
          <ClearIcon />
        </Button>
      </Grid>
    </Grid>
  )
}

export default CounterGrid
