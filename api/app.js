import express from 'express'

const app = express()
const port = Number(process.env.PORT || 3001)

app.disable('x-powered-by')
app.use(express.json({ limit: '16kb' }))

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.listen(port, () => {
  console.log(`Sensoria API: http://localhost:${port}`)
})
