const { users } = require('../../data/db');

module.exports = {
  users() {
    return users;
  },

  user(_, { id }) {
    const selectedUsers = users.filter(user => user.id === id);
    return selectedUsers ? selectedUsers[0] : null;
  },
};
