module.exports = (sequelize, Sequelize) => {
    const Result = sequelize.define("result", {
      dateResult: {
        type: Sequelize.DATE
      },  
      Fio: {
        type: Sequelize.STRING
      },
      tabel: {
        type: Sequelize.STRING
      },
      Result: {
        type: Sequelize.STRING
      },
      inNumber: {
        type: Sequelize.STRING
      },
      numberAccount: {
        type: Sequelize.STRING
      },
      DateTimeSms: {
        type: Sequelize.DATE
      },
      DateTimeEmail: {
        type: Sequelize.DATE
      },
      idEmployee: {
        type: Sequelize.INTEGER  
      },
      adrestest: {
        type: Sequelize.STRING
      }      
    }
  );
  
    return Result;
  };