const { users, nextId } = require('../data/db');

module.exports = {
  createUser(_, { data }) {
    const emailExists = users.some(user => user.email === data.email);

    if (emailExists) {
      throw new Error('Email already exists!');
    }

    const user = {
      id: nextId(),
      ...data,
      profile_id: 1,
      status: 'ACTIVE'
    };

    users.push(user);

    return user;
  },

  deleteUser(_, { id }) {
    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex < 0) return null;

    const excludedUsers = users.splice(userIndex, 1);

    return excludedUsers ? excludedUsers[0] : null;
  },

  updateUser(_, args) {
    const userIndex = users.findIndex(user => user.id === args.id);

    if (userIndex < 0) return null;

    const user = { ...users[userIndex], ...args };

    users.splice(userIndex, 1, user);

    return user;
  }
}
