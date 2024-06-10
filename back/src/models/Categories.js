import { sequelize } from '../database/database.js';
import { DataTypes } from 'sequelize';
import { Products } from '../models/Products.js'

export const Categories = sequelize.define('Categories', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
        image: {
            type: DataTypes.STRING(500),
            validate: {
                isUrl: {
                    msg: 'La imagen debe ser una URL válida'
                }
            }
        }
    
});



Products.belongsToMany(Categories, { through: 'product_category' });
Categories.belongsToMany(Products, { through: 'product_category' });