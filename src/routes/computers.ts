import express from 'express'
import * as computerServices from '../services/computerServices'
import toNewComputerEntry from '../utils/dataValidator'

const computerRoute = express.Router()

computerRoute.get('/', (_req, res) => {
  res.send(computerServices.getComputersWithoutSesitiveInfo())
})

computerRoute.get('/:id', (req, res) => {
  const computer = computerServices.findByiD(+req.params.id) // + parse this to a number
  return (computer != null)
    ? res.send(computer)
    : res.status(404)
})

computerRoute.post('/', (req, res) => {
  try {
    const newComputerEntry = toNewComputerEntry(req.body)
    const addedComputerEntry = computerServices.addComputer(newComputerEntry)
    res.json(addedComputerEntry)
  } catch (e: any) {
    res.status(400).send(e.message)
  }
})

export default computerRoute
