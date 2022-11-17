const {
  User
} = require('../models')

const UsersController = {
  showAllUsers: async (req, res) => {
    try {
      const users = await User.findAll();
      return res.status(200).json(users);
    } catch (err) {
      console.log(err)
      return res.status(500).json({err});

    }
  },
  showUserId: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      return res.status(200).json(user);
    } catch (err) {
      console.log(err)
      return res.status(404).json({err});
    }
  },
  showUserName: async (req, res) => {
    try {
      const { name } = req.params;
      const users = await User.findByName(name);
      return res.status(200).json(users);
    } catch (err) {
      console.log(err)
      return res.status(500).json({err});

    }
  },
  createUser: async (req, res) => {
    try {
      const { id, name, birthDate, cpf, zipCode, age } = req.body;
      const userNew = await User.create({ id, name, birthDate, cpf, zipCode, age });
      return res.status(201).json(userNew)
    } catch (err) {
      console.log(err)
      return res.status(500).json({err});
    }
  }

};

module.exports = UsersController;