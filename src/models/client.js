// Define que estamos utilizando o sequelize
const Sequelize = require('sequelize');
 
// Obtem dados de conexão entre sequelize e banco de dados MySQL
const sequelize = require('../database/database.js');
 
// Cria tabela no BD e seus campos
const Client = sequelize.define("client", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    nome: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },
    address: {
        allowNull: false,
        type: Sequelize.DOUBLE(),
        type: Sequelize.STRING(150),
        validate: {
            len: [3, 150]
        }
    },
    email: {
        allowNull: false,
        type: Sequelize.STRING(60),
        validate: {
            len: [3, 60]
        }
    },
    telefone: {
        allowNull: false,
        type: Sequelize.STRING(13),
        validate: {
            len: [3, 13]
        }
    },
});
 
module.exports = Client;