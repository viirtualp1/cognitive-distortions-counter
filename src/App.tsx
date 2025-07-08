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
          description="Чужие успехи и свои ошибки — «гигантские», свои достижения — «мелочь»."
          count={mMCount}
          addCount={addMMCount}
          clearCount={clearMMCount}
        />

        <CounterGrid
          title="should-statements"
          description="Жёсткие внутренние правила («я обязан быть идеальным»)."
          count={sSCount}
          addCount={addSSCount}
          clearCount={clearSSCount}
        />

        <CounterGrid
          title="Predicting the future and 'mind reading'"
          description="Уверенность, что знаете, как всё кончится или что думают другие."
          count={fPMRCount}
          addCount={addFPMRCount}
          clearCount={clearFPMRCount}
        />

        <CounterGrid
          title="Emotional reasoning"
          description="«Я так чувствую, значит, это правда»."
          count={eRCount}
          addCount={addERCount}
          clearCount={clearERCount}
        />

        <CounterGrid
          title="Labeling"
          description="Ошибка ↔ «я неудачник»."
          count={labelingCount}
          addCount={addLabelingCount}
          clearCount={clearLabelingCount}
        />
      </Grid>
    </Container>
  )
}

export default App
