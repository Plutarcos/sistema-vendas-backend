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
    clientName: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },
    cpf: {
        allowNull: false,
        type: Sequelize.STRING(11),
        primaryKey: true,
        validate: {
            len: [3, 60]
        }
    },
    dataNasc: {
        allowNull: false,
        type: Sequelize.DATE,
    },
    password: {
        allowNull: false,
        type: Sequelize.STRING(13),
        validate: {
            len: [3, 13]
        }
    },
    phoneNumber: {
        allowNull: false,
        type: Sequelize.STRING(60),
        validate: {
            len: [3, 60]
        }
    },
    moneyBalance: {
        allowNull: true,
        type: Sequelize.DOUBLE(),
    },
    email: {
        allowNull: false,
        type: Sequelize.STRING(60),
        validate: {
            len: [3, 60]
        }
    },
    address: {
        allowNull: false,
        type: Sequelize.STRING(150),
        validate: {
            len: [3, 150]
        }
    },
    blockchainAddress: {
        allowNull: true,
        type: Sequelize.STRING(34),
    },



});

module.exports = Client;