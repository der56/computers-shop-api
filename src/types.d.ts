import { State, PowerSupply } from './enums'

export interface ComputerEntry {
  id: number
  date: string
  state: State
  powerSupply: PowerSupply
  password: string
}

export type NoSensitiveInfoComputerEntry = Omit<ComputerEntry, 'password'>
export type newComputerEntry = Omit<ComputerEntry, 'id'>
