import { Dispatch, SetStateAction, useState } from 'react'

export type UseIOReturn<T> = {
  value: T
  onChange: Dispatch<SetStateAction<T>>
}
export function useIO<T>(initialValue: T | (() => T)): UseIOReturn<T> {
  const [value, onChange] = useState(initialValue)

  return { value, onChange }
}
