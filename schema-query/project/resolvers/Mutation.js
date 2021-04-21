const { users, nextId } = require('../data/db');

function findUserIndex(filter) {
  if (!filter) return -1;

  const { id, email } = filter;

  if (id) {
    return users.findIndex(user => user.id === id);
  } else if (email) {
    return users.findIndex(user => user.email === email);
  }

  return -1;
}

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

  deleteUser(_, { filter }) {
    const userIndex = findUserIndex(filter);

    if (userIndex < 0) return null;

    const excludedUsers = users.splice(userIndex, 1);

    return excludedUsers ? excludedUsers[0] : null;
  },

  updateUser(_, { filter, data }) {
    const userIndex = findUserIndex(filter);

    if (userIndex < 0) return null;

    const user = { ...users[userIndex], ...data };

    users.splice(userIndex, 1, user);

    return user;
  }
}
