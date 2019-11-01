console.log('AA: nodemon başlatıldı.');

import { GraphQLServer } from 'graphql-yoga'
// ... or using `require()`
// const { GraphQLServer } = require('graphql-yoga')
//Users sabit array tanımalaması
const Users = [
	{
		id: 1,
		username: "ahmet",
		city: "İzmir"
	},
	{
		id: 2,
		username: "mumin",
		city: "Manisa"
	},
	{
		id: 3,
		username: "birol",
		city: "Urla"
	}
];
//Posts sabit array tanımalaması
const Posts = [
	{
		id: 1,
		title: "Acıyı seven, arayan ve ona sahip olmak isteyen hiç kimse yoktur. Nedeni basit. Çünkü o acıdır...",
		userId: 1
	},{
		id: 2,
		title: "Ut volutpat, sapien nec pretium convallis, lectus est egestas turpis, sed pretium nibh purus id sem. Maecenas efficitur sit amet lorem id ultricies. Duis urna risus, dapibus at condimentum ac, dictum non ligula. Nunc scelerisque elit elit, sed tempor mi vulputate non. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras suscipit ligula et dui accumsan iaculis consectetur a enim. Proin urna tellus, mollis quis nibh non, vulputate condimentum nisi. Cras suscipit sed orci pulvinar venenatis. Nullam venenatis erat risus, id molestie augue fermentum lacinia.",
		userId: 3
	},{
		id: 3,
		title: "Praesent a nulla risus. Duis eget nisl nunc. Quisque laoreet lacus nec sem feugiat placerat. Nulla facilisis vestibulum velit, nec ornare dolor volutpat id. Duis vel mollis nulla. Sed erat sapien, blandit vel efficitur at, tincidunt ut mi. Nam dignissim nec eros et facilisis. Cras tincidunt non justo sed pellentesque. Curabitur nunc ipsum, auctor sit amet est ac, venenatis vestibulum sapien. Aliquam efficitur, nulla et ornare luctus, erat est vehicula neque, sed aliquam justo ligula a leo.",
		userId: 2
	}
];

// GraphQL type tanımalaması
const typeDefs = `
  type Query {
    hello(name: String): String!
    hello1: String

    user(id: ID!): User!
    users: [User!]!

    post(id: ID!): Post!
    posts: [Post!]!
  }

  type User {
    id: ID!
    username: String!
    city: String
  }

  type Post {
    id: ID!
    title: String!
    userId: ID!
  }
`
// GraphQL resolvers kodları
const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
    hello1: () => 'sabit bir metin olarak selam',

    user: (parent, args) => Users.find(user => String(user.id) === args.id),
    users:(parent, args) => Users,

    post: (parent, args) => Posts.find(post => String(post.id) === args.id),
    posts:(parent, args) => Posts,
  },
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))
