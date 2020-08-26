const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Peter',
    email: 'peter@packer.com',
    phone: '555123456',
    category_id: uuid(),
  },
];

class ContactReposire {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactReposire();
