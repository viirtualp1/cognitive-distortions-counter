import { useMemo } from 'react'
import { useLocalStorage } from '@uidotdev/usehooks'
import { distortions } from '../../utils/distortions'

type State = Record<string, number>

const INITIAL: State = Object.fromEntries(
  distortions.map((k) => [k, 0]),
) as State

export function useCounters() {
  const [counts, setCounts] = useLocalStorage<State>(
    'distortion-counts',
    INITIAL,
  )

  return useMemo(() => {
    const api: Record<
      string,
      { count: number; addCount: () => void; decrementCount: () => void }
    > = {}

    for (const key of distortions) {
      api[key] = {
        count: counts[key] ?? 0,
        addCount: () =>
          setCounts((prev) => ({ ...prev, [key]: (prev[key] ?? 0) + 1 })),
        decrementCount: () =>
          setCounts((prev) => ({
            ...prev,
            [key]: Math.max(0, (prev[key] ?? 0) - 1),
          })),
      }
    }

    return api
  }, [counts, setCounts])
}
