import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('newproyect', 'postgres', '123456789', {
    host: 'localhost',
    dialect: 'postgres'
})

