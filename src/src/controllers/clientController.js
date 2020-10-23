// Define a utilização do model produto e a dependência http-status
const Client = require('../models/client');
const status = require('http-status');
 
// Cria o método Insert, obtendo os dados da request
exports.Insert = (req, res, next) => {
    const nome = req.body.nome;
    const address = req.body.address;
    const email = req.body.email;
    const telefone = req.body.telefone;
 
    // Popula cada um dos campos do model com os campos recebido na request
    Client.create({
        nome: nome,
        address: address,
        email: email,
        telefone: telefone,
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
    const id = req.params.id;
 
    Client.findByPk(id)
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
    const id = req.params.id;
    const nome = req.body.nome;
    const address = req.body.address;
    const email = req.body.email;
    const telefone = req.body.telefone;
 
    Client.findByPk(id)
        .then(client => {
            if (client) {
                client.update({
                    nome: nome,
                    address: address,
                    email: email,
                    telefone: telefone,
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
