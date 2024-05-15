import app from './app.js'
import { sequelize } from './database/database.js'

//import './models/Categories.js'
//import './models/Products.js'



async function main() {
    try {
        await sequelize.sync({force:false})
        console.log('connection has been established successfully');
        app.listen(3001)
        console.log('Server is listening on port 3001');
    } catch (error) {
        console.error('Unable to connect to the database')
    }

}



main();