const { users, profiles } = require('../data/db');

module.exports = {
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
};
