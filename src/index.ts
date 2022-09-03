import express from 'express'
import computerRoute from './routes/computers'

const app = express()
app.use(express.json())

app.get('/ping', (_req, res) => {
  res.send('pong')
})

app.use('/api/computers', computerRoute)

const port = (process.env.PORT != null) || 4000
// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
app.listen(port, () => console.log(`app ready on port ${port}`))
