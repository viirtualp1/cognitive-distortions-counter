import { Container, Grid } from '@mui/material'
import { useCounter } from './composables/useCounter/useCounter.ts'
import CounterGrid from './components/CounterGrid/CounterGrid.tsx'

function App() {
  const { addCount: addMMCount, count: mMCount } = useCounter(
    'magnification-minimization',
  )

  const { addCount: addSSCount, count: sSCount } =
    useCounter('should-statements')

  const { addCount: addFPMRCount, count: fPMRCount } = useCounter(
    'future-predicting-mind-reading',
  )

  const { addCount: addERCount, count: eRCount } = useCounter(
    'emotional-reasoning',
  )

  const { addCount: addLabelingCount, count: labelingCount } =
    useCounter('labeling')

  return (
    <Container>
      <Grid container sx={{ marginTop: '24px' }} spacing={2}>
        <CounterGrid
          count={mMCount}
          addCount={addMMCount}
          title="magnification-minimization"
        />

        <CounterGrid
          count={sSCount}
          addCount={addSSCount}
          title="should-statements"
        />

        <CounterGrid
          title="Predicting the future and 'mind reading'"
          count={fPMRCount}
          addCount={addFPMRCount}
        />

        <CounterGrid
          title="Emotional reasoning"
          count={eRCount}
          addCount={addERCount}
        />

        <CounterGrid
          title="Labeling"
          count={labelingCount}
          addCount={addLabelingCount}
        />
      </Grid>
    </Container>
  )
}

export default App
