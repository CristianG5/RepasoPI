const {DataTypes} = require("sequelize")

module.exports = (sequelize) => {
   sequelize.define("User", {
    
    id:{
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },

    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },

    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique: true,
    },

    phone:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },

    created:{
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    }

},
    {timestamps: false}
)
}