const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(request, response) {
    //  listar todos registros
    const contacts = await ContactRepository.findAll();

    response.json(contacts);
  }

  show() {
    // um registro
  }

  store() {
    //  criar um novo registro
  }

  update() {
    //  ditar um registro
  }

  delete() {
    // deletar um registro
  }
}

//  Singleton
//  toda vez q exportar vai utilizar a instância já criada.
module.exports = new ContactController();
