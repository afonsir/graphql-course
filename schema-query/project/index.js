const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    hello: String
    currentTime: String
  }
`

const resolvers = {
  Query: {
    hello() {
      return 'Good Morning!';
    },
    currentTime() {
      return `${new Date}`;
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
