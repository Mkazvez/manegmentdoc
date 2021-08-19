'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('reportgenerals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
    dateload: {
      allowNull: false,
      type: Sequelize.DATE
    }, 
	  inqty: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
	  noqty: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
	  resultqty: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
	  innotqty: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
	  shareprocent: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('reportgeneral')
  }
}
