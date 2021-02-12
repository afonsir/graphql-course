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

  type Product {
    name: String!
    price: Float!
    discount: Float
    totalPrice: Float
  }

  type Query {
    hello: String
    currentTime: Date
    loggedUser: User
    featuredProduct: Product
  }
`

const resolvers = {
  User: {
    salary(parent) {
      return parent.custom_salary;
    }
  },

  Product: {
    totalPrice(parent) {
      if(parent.discount) {
        return parent.price * (1 - parent.discount);
      } else {
        return parent.price;
      }
    }
  },

  Query: {
    hello() {
      return 'Good Morning!';
    },

    currentTime() {
      return new Date;
    },

    loggedUser() {
      return {
        id: 1,
        name: 'Ana da Web',
        email: 'anadaweb@email.com',
        age: 23,
        custom_salary: 1234.56,
        vip: true
      }
    },

    featuredProduct() {
      return {
        name: 'Product One',
        price: 100.50,
        // discount: 0.15
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
