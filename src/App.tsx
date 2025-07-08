import { Container, Grid } from '@mui/material'
import { useCounter } from './composables/useCounter/useCounter.ts'
import CounterGrid from './components/CounterGrid/CounterGrid.tsx'

function App() {
  const {
    addCount: addMMCount,
    count: mMCount,
    clearCount: clearMMCount,
  } = useCounter('magnification-minimization')

  const {
    addCount: addSSCount,
    count: sSCount,
    clearCount: clearSSCount,
  } = useCounter('should-statements')

  const {
    addCount: addFPMRCount,
    count: fPMRCount,
    clearCount: clearFPMRCount,
  } = useCounter('future-predicting-mind-reading')

  const {
    addCount: addERCount,
    count: eRCount,
    clearCount: clearERCount,
  } = useCounter('emotional-reasoning')

  const {
    addCount: addLabelingCount,
    count: labelingCount,
    clearCount: clearLabelingCount,
  } = useCounter('labeling')

  return (
    <Container>
      <Grid container sx={{ marginTop: '24px' }} spacing={2}>
        <CounterGrid
          title="magnification-minimization"
          count={mMCount}
          addCount={addMMCount}
          clearCount={clearMMCount}
        />

        <CounterGrid
          title="should-statements"
          count={sSCount}
          addCount={addSSCount}
          clearCount={clearSSCount}
        />

        <CounterGrid
          title="Predicting the future and 'mind reading'"
          count={fPMRCount}
          addCount={addFPMRCount}
          clearCount={clearFPMRCount}
        />

        <CounterGrid
          title="Emotional reasoning"
          count={eRCount}
          addCount={addERCount}
          clearCount={clearERCount}
        />

        <CounterGrid
          title="Labeling"
          count={labelingCount}
          addCount={addLabelingCount}
          clearCount={clearLabelingCount}
        />
      </Grid>
    </Container>
  )
}

export default App
