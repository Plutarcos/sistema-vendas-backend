// Define a utilização do model produto e a dependência http-status
const Order = require('../models/order');
const status = require('http-status');
 
// Cria o método Insert, obtendo os dados da request
exports.Insert = (req, res, next) => {
    const product = req.body.product;
    const client = req.body.client;
    const valor = req.body.valor;
    const quantidade = req.body.quantidade;
 
    // Popula cada um dos campos do model com os campos recebido na request
    Order.create({
        product: product,
        client: client,
        valor: valor,
        quantidade: quantidade,
    })
        //then = registra o que queremos que aconteca quando a Promise for resolvida
        .then(order => {
            if (order) {
                res.status(status.OK).send(order);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        //catch = registra o que queremos que aconteca quando a Promise falhar
        .catch(error => next(error));
};
exports.SelectAll = (req, res, next) => {
    Order.findAll()
        .then(order => {
            if (order) {
                res.status(status.OK).send(order);
            }
        })
        .catch(error => next(error));
}
 
exports.Delete = (req, res, next) => {
    const id = req.params.id;
 
    Order.findByPk(id)
        .then(order => {
            if (order) {
                order.destroy({
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


