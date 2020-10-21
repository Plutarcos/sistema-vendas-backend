// Define a string de conexão com o banco de dados
module.exports = {
    development: {
        database: {
            host: 'db-vendas.c1oownr6txwi.sa-east-1.rds.amazonaws.com',
            port: 3306,
            name: 'db_vendas',
            dialect: 'mysql',
            user: 'admin',
            password: 'Admin1234'
        }
    },
    production:{
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}