module.exports = (sequelize, DataTypes) => {
    const Reportgeneral = sequelize.define(
      'reportgeneral',
      {
        dateload: DataTypes.DATE,
        inqty: DataTypes.INTEGER,
        noqty: DataTypes.INTEGER,
        resultqty: DataTypes.INTEGER,
        innotqty: DataTypes.INTEGER,
        shareprocent: DataTypes.INTEGER
      },
      {}
    )
    Reportgeneral.associate = function(models) {
      // associations can be defined here
    }
    return Reportgeneral
  }
  