// Define a utilização do model produto e a dependência http-status
const Client = require('../models/client.js');
const status = require('http-status');

// Cria o método Insert, obtendo os dados da request
exports.Insert = (req, res, next) => {
    const clientName = req.body.clientName;
    const cpf = req.body.cpf;
    const dataNasc = req.body.dataNasc;
    const password = req.body.password;
    const phoneNumber = req.body.phoneNumber;
    const moneyBalance = req.body.moneyBalance;
    const address = req.body.address;
    const email = req.body.email;
    const blockchainAddress = req.body.blockchainAddress;

    // Popula cada um dos campos do model com os campos recebido na request
    Client.create({
        clientName: clientName,
        cpf: cpf,
        dataNasc: dataNasc,
        password: password,
        phoneNumber: phoneNumber,
        moneyBalance: moneyBalance,
        address: address,
        email: email,
        blockchainAddress: blockchainAddress,

    })
        //then = registra o que queremos que aconteca quando a Promise for resolvida
        .then(client => {
            if (client) {
                res.status(status.OK).send(client);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        //catch = registra o que queremos que aconteca quando a Promise falhar
        .catch(error => next(error));
};
exports.SelectAll = (req, res, next) => {
    Client.findAll()
        .then(client => {
            if (client) {
                res.status(status.OK).send(client);
            }
        })
        .catch(error => next(error));
}

exports.SelectDetail = (req, res, next) => {
    const cpf = req.params.cpf;

    Client.findOne({ where: { cpf: cpf } })
        .then(client => {
            if (client) {
                res.status(status.OK).send(client);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};

exports.Update = (req, res, next) => {

    const moneyBalance = req.body.moneyBalance;


    Client.findByPk(id)
        .then(client => {
            if (client) {
                client.update({
                    moneyBalance: moneyBalance,
                },
                    {
                        where: { id: id }
                    })
                    .then(() => {
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};

exports.Delete = (req, res, next) => {
    const id = req.params.id;

    Client.findByPk(id)
        .then(client => {
            if (client) {
                client.destroy({
                    where: { id: id }
                })
                    .then(() => {
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            }
            else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};

exports.Login = async (req, res) => {
    try {
        const { cpf, password } = req.params;
        const client = await Client.findOne({ where: { cpf: cpf } });

        if (!client) {
            res.status(401).json({ error: 'Invalid CPF' });
        }
        if (client.password !== password) {
            res.status(401).json({ error: 'Invalid Password' });
        }
        client.password = undefined;

        res.json({ client });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
