import { useEffect, useState } from 'react'
import { useLocalStorage } from '@uidotdev/usehooks'

export function useCounter(key: string) {
  const [storeValue, setStoreValue] = useLocalStorage(key, 0)
  const [count, setCount] = useState(0)

  const addCount = () => {
    setStoreValue((prev) => prev + 1)
  }

  const clearCount = () => {
    const isConfirmed = confirm('Are you sure you want to clear the count?')

    if (!isConfirmed) return

    setStoreValue(0)
  }

  useEffect(() => {
    setCount(storeValue)
  }, [storeValue])

  return {
    count,
    addCount,
    clearCount,
  }
}
