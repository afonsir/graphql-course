let id = 1;

function nextId() {
  return id++;
}

const users = [
  {
    id: nextId(),
    name: 'Jim Halpert',
    email: 'jim.halpert@email.com',
    status: 'ACTIVE',
    age: 33
  },
  {
    id: nextId(),
    name: 'Pam Beesly',
    email: 'pam.beesly@email.com',
    status: 'INACTIVE',
    age: 30
  },
  {
    id: nextId(),
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

module.exports = {
  users,
  profiles,
  nextId
};
