const users = [
  {
    id: 1,
    name: 'Jim Halpert',
    email: 'jim.halpert@email.com',
    status: 'ACTIVE',
    age: 33
  },
  {
    id: 2,
    name: 'Pam Beesly',
    email: 'pam.beesly@email.com',
    status: 'INACTIVE',
    age: 30
  },
  {
    id: 3,
    name: 'Michael Scott',
    email: 'michael.scott@email.com',
    status: 'BLOCKED',
    age: 40
  }
]

const profiles = [
  { id: 1, name: 'Common' },
  { id: 2, name: 'Administrator' }
]

module.exports = { users, profiles };
