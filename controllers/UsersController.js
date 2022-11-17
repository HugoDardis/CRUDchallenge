const { User } = require('../models')

const UsersController = {
  showAll: async (req, res) => {
    try {
      const users = await User.findAll();
      return res.status(200).json(users);
    } catch (err){
      console.log(err)
      return res.status(500).json({err});

    }
  },
};

module.exports = UsersController;