module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define("employee", {
      tabel: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      }
    });
  
    return Employee;
  };