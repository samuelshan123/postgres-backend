module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      // id:{
      //   type: Sequelize.INTEGER,
      //   primaryKey: true,
      // },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
    });
  

    // const Address = sequelize.define("addresses", {
    //   id:{
    //     type: Sequelize.INTEGER,
    //     primaryKey: true,
    //   },
    //   place:{
    //     type: Sequelize.STRING
    //   },
    //   phone:{
    //     type: Sequelize.STRING
    //   },
    //   user_id:{
    //     type: Sequelize.INTEGER,
    //     references: {
    //       model: User
    //     }
    //   }


    // })
    return User; 


    // User.hasOne(Address, {foreignKey: 'user_id'})
    // Address.belongsTo(User)

    // sequelize.sync({force: true})
  };
  