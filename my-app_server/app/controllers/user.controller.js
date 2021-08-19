const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
      res.status(400).send({
        message: "ФИО пустое"
      });
      return;
    }
  
    // Create a Employee
    const user = {
      name: req.body.name,
      email: req.body.email,
      role: req.body.role,
      p: req.body.p,
    };
  
    // Save Tutorial in the database
    User.create(user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ошибка при создании записи User."
        });
      });
  };

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  User.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ошибка при поиске записи User."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    User.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving User with id=" + id
        });
      });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    User.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Employee was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update User with id=${id}. Maybe Employee was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Employee with id=" + id
        });
      });
};

// Login
exports.login = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(req.body)
  User.findAll({ where: {
                  email: username, 
                  p: password
                }
               })
    .then(data => {
      if (data.length > 0){
        res.send({role: data[0].role, 
                  name: data[0].name});
        } else {
          res.send({role: '', 
            name: ''});
        }    
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ошибка при поиске записи User email."
      });
    });

};


// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    User.destroy({
        where: { id: id }
    })
        .then(num => {
        if (num == 1) {
            res.send({
            message: "Employee was deleted successfully!"
            });
        } else {
            res.send({
            message: `Cannot delete Employee with id=${id}. Maybe User was not found!`
            });
        }
        })
        .catch(err => {
        res.status(500).send({
            message: "Could not delete User with id=" + id
        });
        });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    User.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} User were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all users."
          });
        });
  
};

// Find all published Tutorials
exports.findAllEmail = (req, res) => {
    const email = req.query.email;
    var condition = email ? { email: { [Op.like]: `%${email}%` } } : null;
  
    User.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ошибка при поиске записи User email."
        });
      });
};