import { Container, Grid } from '@mui/material'
import CounterGrid from './components/CounterGrid/CounterGrid.tsx'
import { DistortionsType } from './utils/distortions.ts'
import { useCounters } from './composables/useCounters/useCounters.ts'

function App() {
  const counters = useCounters()

  return (
    <Container>
      <Grid container sx={{ marginTop: '24px' }} spacing={2}>
        <CounterGrid
          title="Magnification-minimization"
          description="Other people's successes and their mistakes are ‘gigantic’, their own achievements are ‘petty’."
          count={counters[DistortionsType.MagnificationMinimization].count}
          decrementCount={
            counters[DistortionsType.MagnificationMinimization].decrementCount
          }
          addCount={
            counters[DistortionsType.MagnificationMinimization].addCount
          }
        />

        <CounterGrid
          title="Should-statements"
          description="Rigid internal rules (‘I have to be perfect’)."
          count={counters[DistortionsType.ShouldStatements].count}
          addCount={counters[DistortionsType.ShouldStatements].addCount}
          decrementCount={
            counters[DistortionsType.ShouldStatements].decrementCount
          }
        />

        <CounterGrid
          title="Predicting the future and 'mind reading'"
          description="Confidence in knowing how things will turn out or what others think."
          count={counters[DistortionsType.FuturePredictingMindReading].count}
          addCount={
            counters[DistortionsType.FuturePredictingMindReading].addCount
          }
          decrementCount={
            counters[DistortionsType.FuturePredictingMindReading].decrementCount
          }
        />

        <CounterGrid
          title="Emotional reasoning"
          description="‘I feel this way, so it must be true.’"
          count={counters[DistortionsType.EmotionalReasoning].count}
          addCount={counters[DistortionsType.EmotionalReasoning].addCount}
          decrementCount={
            counters[DistortionsType.EmotionalReasoning].decrementCount
          }
        />

        <CounterGrid
          title="Behavioral inertia"
          description="Unwillingness to change habitual behaviour, even if it is ineffective."
          count={counters[DistortionsType.BehavioralInertia].count}
          addCount={counters[DistortionsType.BehavioralInertia].addCount}
          decrementCount={
            counters[DistortionsType.BehavioralInertia].decrementCount
          }
        />
      </Grid>
    </Container>
  )
}

export default App
