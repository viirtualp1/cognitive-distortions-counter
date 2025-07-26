import type { FC } from 'react'
import {
  Grid,
  IconButton,
  type SxProps,
  type Theme,
  Typography,
} from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove'

interface Props {
  title: string
  description: string
  count: number
  addCount: () => void
  decrementCount: () => void
}

const buttonStyles: SxProps<Theme> = {
  width: '100%',
  borderRadius: '10px',
}

const CounterGrid: FC<Props> = ({
  title,
  description,
  count,
  addCount,
  decrementCount,
}) => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      spacing={2}
      sx={{ width: '100%' }}
    >
      <Grid size={8}>
        <Typography textTransform="uppercase" fontWeight={700}>
          {title}
        </Typography>

        <Typography color="gray" fontSize={12}>
          {description}
        </Typography>
      </Grid>
      <Grid size={2}>
        <IconButton color="primary" sx={buttonStyles} onClick={addCount}>
          {count}
        </IconButton>
      </Grid>
      <Grid size={2}>
        <IconButton color="error" sx={buttonStyles} onClick={decrementCount}>
          <RemoveIcon />
        </IconButton>
      </Grid>
    </Grid>
  )
}

export default CounterGrid
