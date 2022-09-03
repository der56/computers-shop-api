import { PowerSupply, State } from '../enums'
import { newComputerEntry } from '../types'

const parsePassword = (passwordFromRequest: any): string => {
  if (!isString(passwordFromRequest)) {
    throw new Error('Incorrect or missing password')
  }

  return passwordFromRequest
}

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date')
  }

  return dateFromRequest
}

const parseState = (stateFromRequest: any): State => {
  if (!isString(stateFromRequest) || !isState(stateFromRequest)) {
    throw new Error('Incorrect or missing state')
  }

  return stateFromRequest
}

const parsePowerSupply = (powerSupplyFromRequest: any): PowerSupply => {
  if (!isString(powerSupplyFromRequest) || !isPowerSupply(powerSupplyFromRequest)) {
    throw new Error('Incorrect or missing power supply')
  }

  return powerSupplyFromRequest
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const isString = (string: string): boolean => {
  return typeof string === 'string'
}

const isState = (param: any): boolean => {
  return Object.values(State).includes(param)
}

const isPowerSupply = (param: any): boolean => {
  return Object.values(PowerSupply).includes(param)
}

const toNewComputerEntry = (object: any): newComputerEntry => {
  const newEntry: newComputerEntry = {
    password: parsePassword(object.password),
    date: parseDate(object.date),
    state: parseState(object.state),
    powerSupply: parsePowerSupply(object.powerSupply)
  }

  return newEntry
}

export default toNewComputerEntry
