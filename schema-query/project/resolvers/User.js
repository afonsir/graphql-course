const { profiles } = require('../data/db');

module.exports = {
  salary(parent) {
    return parent.custom_salary;
  },
  profile(parent) {
    const selectedProfiles = profiles.filter(profile => profile.id === parent.profile_id);
    return selectedProfiles ? selectedProfiles[0] : null;
  }
};
