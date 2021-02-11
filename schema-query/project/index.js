const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  scalar Date

  type User {
    id: ID
    name: String!
    email: String!
    age: Int
    salary: Float
    vip: Boolean
  }

  type Query {
    hello: String
    currentTime: Date
    loggedUser: User
  }
`

const resolvers = {
  Query: {
    hello() {
      return 'Good Morning!';
    },
    currentTime() {
      return new Date;
    },
    loggedUser(){
      return {
        id: 1,
        name: 'Ana da Web',
        email: 'anadaweb@email.com',
        age: 23,
        salary: 1234.56,
        vip: true
      }
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`Server is running in ${url}`);
});
