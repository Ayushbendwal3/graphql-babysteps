import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import resolvers from './resolvers'
import schema from './schema'

const app = express()

app.get('/', (req, res) => {
  res.send('Graphql is now the way')
})

const root = resolvers

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
    rootValue: root
  })
)

const port = 5000 || process.env.PORT
app.listen(port, () => {
  console.log(`Server is running at: ${port}`)
})
