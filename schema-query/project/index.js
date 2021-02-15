const { ApolloServer, gql } = require('apollo-server');

const users = [
  {
    id: 1,
    name: 'Jim Halpert',
    age: 33
  },
  {
    id: 2,
    name: 'Pam Beesly',
    age: 30
  },
  {
    id: 3,
    name: 'Michael Scott',
    age: 40
  }
]

const profiles = [
  { id: 1, name: 'Common' },
  { id: 2, name: 'Administrator' }
]

const typeDefs = gql`
  scalar Date

  type User {
    id: Int
    name: String!
    email: String!
    age: Int
    salary: Float
    vip: Boolean
  }

  type Profile {
    id: Int
    name: String
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
    megaSenaNumbers: [Int!]! 
    users: [User]
    user(id: Int): User
    profiles: [Profile]
    profile(id: Int): Profile
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
        discount: 0.15
      }
    },

    megaSenaNumbers() {
      const ascending = (number, anotherNumber) => number - anotherNumber;
      return Array(6).fill(0)
                     .map(() => parseInt(Math.random() * 60 + 1))
                     .sort(ascending);
    },

    users() {
      return users;
    },

    user(_, { id }) {
      const selectedUsers = users.filter(user => user.id === id);
      return selectedUsers ? selectedUsers[0] : null;
    },

    profiles() {
      return profiles;
    },

    profile(_, { id }) {
      const selectedProfiles = profiles.filter(profile => profile.id === id);
      return selectedProfiles ? selectedProfiles[0] : null;
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
