
module.exports=(sequelize, Sequelize) => {

    const Address = sequelize.define("address", {

        place:{
            type: Sequelize.STRING
        },
        phone:{
            type: Sequelize.STRING
        },
        user_id:{
            type: Sequelize.INTEGER,
            references:{
                model: 'users',
                key: 'id'     
            }
        }
    })

    return Address;

}