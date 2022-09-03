import computerData from './computers.json'
import { ComputerEntry, NoSensitiveInfoComputerEntry, newComputerEntry } from '../types'

const computers: ComputerEntry[] = computerData as unknown as ComputerEntry[] // using the asercion types
export const getComputers = (): ComputerEntry[] => computers

export const findByiD = (id: number): NoSensitiveInfoComputerEntry | undefined => {
  const entry = computers.find(c => c.id === id)
  if (entry != null) {
    const { password, ...restofComputer } = entry
    return restofComputer
  }

  return undefined
}

export const getComputersWithoutSesitiveInfo = (): NoSensitiveInfoComputerEntry[] => {
  return computers.map(({ id, date, state, powerSupply }) => {
    return {
      id,
      date,
      state,
      powerSupply
    }
  })
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const addComputer = (newComputerEntry: newComputerEntry) => {
  const newComputer = {
    id: Math.max(...computers.map(c => c.id)) + 1,
    ...newComputerEntry
  }

  computers.push(newComputer)
  return newComputer
}
