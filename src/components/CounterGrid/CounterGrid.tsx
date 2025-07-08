import type { FC } from 'react'
import { Button, Grid, Typography } from '@mui/material'

interface Props {
  title: string
  count: number
  addCount: () => void
}

const CounterGrid: FC<Props> = ({ title, count, addCount }) => {
  return (
    <Grid container alignItems="center" spacing={2} sx={{ width: '100%' }}>
      <Grid size={8}>
        <Typography textTransform="uppercase">{title}</Typography>
      </Grid>
      <Grid size={4}>
        <Button
          variant="contained"
          sx={{ minHeight: '64px', width: '100%', fontSize: 18 }}
          color="primary"
          onClick={addCount}
        >
          {count}
        </Button>
      </Grid>
    </Grid>
  )
}

export default CounterGrid
