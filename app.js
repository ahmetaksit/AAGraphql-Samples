console.log('AA: nodemon başlatıldı.');

import { GraphQLServer } from 'graphql-yoga'
// ... or using `require()`
// const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
  type Query {
    hello(name: String): String!
    hello1: String
    user: User!
  }

  type User {
    id: ID!
    username: String!
  }
`

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
    hello1: () => 'sabit bir metin olarak selam',
    user: () => ({
        id: 1,
        username: 'ahmet'
    }),
  },
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))
