const { profiles } = require('../../data/db');

module.exports = {
  profiles() {
    return profiles;
  },

  profile(_, { id }) {
    const selectedProfiles = profiles.filter(profile => profile.id === id);
    return selectedProfiles ? selectedProfiles[0] : null;
  }
};
