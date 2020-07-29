const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const db = require('./db')

const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const models = require('./models')

const port = 4000
const DB_HOST = 'mongodb://localhost:27017/CFC'
const app = express()

const schedule = require('./scheduleCFC.js')

schedule() // Checks if an schedule pattern is already set. If doesnt, creates one

db.connect(DB_HOST)

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({req}) => {
    const studentId = req.headers.studentid || ''
    return { models, studentId }
  }
})

server.applyMiddleware({ app, path: '/api' })

app.listen({ port }, () =>
  console.log(
    `GraphQL Server running at http://localhost:${port}${server.graphqlPath}`
  )
);
