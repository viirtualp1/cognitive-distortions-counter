import type { FC } from 'react'
import { Grid, IconButton, Typography } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'

interface Props {
  title: string
  description: string
  count: number
  addCount: () => void
  clearCount: () => void
}

const CounterGrid: FC<Props> = ({
  title,
  description,
  count,
  addCount,
  clearCount,
}) => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      sx={{ width: '100%' }}
    >
      <Grid size={8}>
        <Typography textTransform="uppercase">{title}</Typography>

        <Typography color="gray" fontSize={12}>
          {description}
        </Typography>
      </Grid>
      <Grid size={2}>
        <IconButton
          color="primary"
          sx={{
            width: '100%',
            borderRadius: '10px',
          }}
          onClick={addCount}
        >
          {count}
        </IconButton>
      </Grid>
      <Grid size={1}>
        <IconButton
          color="error"
          sx={{
            width: '100%',
            borderRadius: '10px',
          }}
          onClick={clearCount}
        >
          <ClearIcon />
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default CounterGrid
