const server = require('express').Router();
const { Reviews, Product } = require('../db.js');


server.post("/:id/reviews", (req, res) => {
    const {id} = req.params;
    const {qualification, description, userId} = req.body;
    let prod;
    Product.findByPk(id)
        .then(product => {
            prod = product;
            return Reviews.create({
                qualification,
                description,
                userId
            })
            .then(review => {
                prod.addReviews(review)
            })
            .then(() => {
                res.json({msg: "Reviews Creada"})
            })
        })
        .then(() => {
            res.status(200)
        })
        .catch(err => {
            res.json(err)
        })
})


server.put("/:id/reviews/:idReviews", (req, res) => {
    const {id, idReviews} = req.params;
    const {qualification, description} = req.body;
    let prod;
    let review;

    Product.findByPk(id)
        .then(product => {
            prod = product
            Reviews.findByPk(idReviews)
            .then(rev => {
                review = rev
                rev.update({
                    qualification,
                    description
                })
            })
        })
        .then(() => {
            res.json({msg: "Review Terminada"})
        })
        .catch(err => {
            res.json({err})
        }) 
})

module.exports = server;