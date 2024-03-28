import express from 'express'
import * as Path from 'node:path'

import questRoutes from './routes/questions.ts'
import leaderRoutes from './routes/leaderboard.ts'

const server = express()

server.use(express.json())

server.use('/api/v1/questions', questRoutes)
server.use('/api/v1/leaderboard', leaderRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
