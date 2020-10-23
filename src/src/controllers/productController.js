// Define a utilização do model produto e a dependência http-status
const Product = require('../models/product');
const status = require('http-status');
 
// Cria o método Insert, obtendo os dados da request
exports.Insert = (req, res, next) => {
    const nome = req.body.nome;
    const preçoCusto = req.body.preçoCusto;
    const preçoVenda = req.body.preçoVenda;
    const quantidadeEstoque = req.body.quantidadeEstoque;
 
    // Popula cada um dos campos do model com os campos recebido na request
    Product.create({
        nome: nome,
        preçoCusto: preçoCusto,
        preçoVenda: preçoVenda,
        quantidadeEstoque: quantidadeEstoque,
    })
        //then = registra o que queremos que aconteca quando a Promise for resolvida
        .then(product => {
            if (product) {
                res.status(status.OK).send(product);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        //catch = registra o que queremos que aconteca quando a Promise falhar
        .catch(error => next(error));
};
exports.SelectAll = (req, res, next) => {
    Product.findAll()
        .then(product => {
            if (product) {
                res.status(status.OK).send(product);
            }
        })
        .catch(error => next(error));
}
 
exports.SelectDetail = (req, res, next) => {
    const id = req.params.id;
 
    Product.findByPk(id)
        .then(product => {
            if (product) {
                res.status(status.OK).send(product);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};

exports.Update = (req, res, next) => {
    const id = req.params.id;
    const nome = req.body.nome;
    const preçoCusto = req.body.preçoCusto;
    const preçoVenda = req.body.preçoVenda;
    const quantidadeEstoque = req.body.quantidadeEstoque;
 
    Product.findByPk(id)
        .then(product => {
            if (product) {
                product.update({
                    nome: nome,
                    preçoCusto: preçoCusto,
                    preçoVenda: preçoVenda,
                    quantidadeEstoque: quantidadeEstoque,
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
 
    Product.findByPk(id)
        .then(product => {
            if (product) {
                product.destroy({
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


