import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';


export const Products = sequelize.define('Products', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
   
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    enable: {
        type: DataTypes.BOOLEAN,

    },
    image: {
        type: DataTypes.STRING(500)
    },
    stock: {
        type: DataTypes.STRING
    }
   

})