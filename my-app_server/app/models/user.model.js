module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
      'user',
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        email_verified: DataTypes.BOOLEAN,
        role: DataTypes.STRING,
        p: DataTypes.STRING
      },
      {}
    )
    User.associate = function(models) {
      // associations can be defined here
    }
    return User
  }
  