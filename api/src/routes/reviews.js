const server = require('express').Router();
const { Reviews, Product } = require('../db.js');


server.post("/:id/reviews", (req, res) => {
    const {id} = req.params;
    const {qualification, description, userId} = req.body;
    let prod;
    Reviews.findOne({
        where: {
            productId: id,
            userId
        }
    })
    .then((revi) =>{
        if(revi){
            res.json({msg: "No puedes publicar otra Review"})
        } else {
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
        }
    })
    .then(() => {
        res.status(200)
    })
    .catch(err => {
        res.json(err)
    })
       
})


server.put("/:id/reviews/:idReviews", (req, res) => {su
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

server.delete('/:id/review/:idReview', (req, res) => {
    const {id, idReview} = req.params;
    if(!id) {
        res.json({msg:"You must select a review to delete"})
    } else {
        Reviews.destroy( { where: {idReview} } )
        .then(() => {
            res.json({msg: "Review deleted successfully"})
        })
        .catch( err => {
            res.json( {err} )
        })
    }

})

module.exports = server;
