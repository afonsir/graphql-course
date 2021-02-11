const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  scalar Date

  type Query {
    hello: String
    currentTime: Date
  }
`

const resolvers = {
  Query: {
    hello() {
      return 'Good Morning!';
    },
    currentTime() {
      return new Date;
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
