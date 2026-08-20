import cors from 'cors'
import express from 'express'

const app = express()
const port = Number(process.env.PORT) || 4000

app.use(cors())
app.use(express.json())

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', service: 'campusconnect-api' })
})

app.get('/api/events', (_request, response) => {
  response.json({ events: [] })
})

app.listen(port, () => {
  console.log(`CampusConnect API listening on http://localhost:${port}`)
})
