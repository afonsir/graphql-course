const { profiles, nextId } = require('../../data/db');

function findProfileIndex(filter) {
  if (!filter) return -1;

  const { id, name } = filter;

  if (id) {
    return profiles.findIndex(profile => profile.id === id);
  } else if (name) {
    return profiles.findIndex(profile => profile.name === name);
  }

  return -1;
}

module.exports = {
  createProfile(_, { data }) {
    const nameExists = profiles.some(profile => profile.name === data.name);

    if (nameExists) {
      throw new Error('Profile name already exists!');
    }

    const profile = {
      id: nextId(),
      ...data
    };

    profiles.push(profile);

    return profile;

  },

  deleteProfile(_, { filter }) {
    const profileIndex = findProfileIndex(filter);

    if (profileIndex < 0) return null;

    const excludedProfiles = profiles.splice(profileIndex, 1);

    return excludedProfiles ? excludedProfiles[0] : null;
  },

  updateProfile(_, { filter, data }) {
    const profileIndex = findProfileIndex(filter);

    if (profileIndex < 0) return null;

    const profile = { ...profiles[profileIndex], ...data };

    profiles.splice(profileIndex, 1, profile);

    return profile;
  }
}
