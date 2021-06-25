import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Graphql is now the way')
})

const port = 5000 || process.env.PORT

app.listen(port, () => {
  console.log(`Server is running at: ${port}`)
})
