const server = require('express').Router();
const { Product, Categories } = require('../db.js');

server.post('/', function (req, res) {
    const {name, description, price, imagen, stock, categories} = req.body;

    if (!name || !description || !price ||  !imagen) res.status(400).json({msj: "Faltan datos"});

    Product.create({name: name, description: description, price: price, imagen: imagen, stock: stock, categories: categories})
        .then(np => {
            res.status(201).json({np});
		})
		
})

server.put('/:id', function(req, res) {
    const productId = req.params;
    const data = req.body;

	if (!productId || !data) res.status(400).json({msj: "Datos incorrectos"});
	
	Product.update(data,
		{where: { id: productId.id } })
		.then(product => {
			res.status(200);
			res.send(product)
		})
		.catch(err => {
			console.log(err)
		  })
	})

server.get('/', (req, res, next) => {
	Product.findAll()
		.then(products => {
			res.send(products);
		})
		.catch(next);
});


server.get("/category", (req, res) => {
	Categories.findAll()
		.then(categories => {
			res.json({categories})
		})
		.catch(err => {
			console.log(err)
		  })
})

server.post("/category", (req, res) => {
	const {name, description} = req.body;

	if(!name || !description){
		res.status(404).json({ msg: "El nombre es necesario" })
	} else {
		Categories.create({
			name,
			description
		})
		.then((categoria) => {
			res.status(200).json({categoria,  msg: "Categoria Creada" })
		})
		.catch(err => {
			res.json({error: err})
		})
	}

})


server.delete("/category/:id", (req, res) => {
	const {id} = req.params;
	if(!id) {
		res.json({msg: "Debe seleccionar una categoria a eliminar"})
	} else {
			Categories.destroy( {where: {id}})
		.then(() => {
			res.json({msg: "Categoria Eliminada"})
		})
		.catch(err => {
			res.json({err})
		}) 
	}	
})

//Retorna un objeto de tipo producto con todos sus datos. (Incluidas las categorías e imagenes).
server.get('/:id', (req, res)=> {
	const {id} = req.params;

	if(!id){
		res.json({msg: "invalid Id"})
	}else{
		Product.findAll({where: {id}}, 
		{include:[{ model: "Categoryp", attributes: ['name']}]}
		)
		.then(producto =>{
			console.log(producto)
		res.json({producto})
		})
		.catch(err => {
			console.log(err)
			res.json({err})
		}) 
	}			
});

server.get("/category/:nombreCat", (req, res) => {
	const {nombreCat} = req.params;

	if(!nombreCat){
		res.status(400).json({msg: "Elija una categoria"})
	} else {
		Product.findAll({where: nombreCat}, {include: Categories})
		.then(resultado => {
			res.json(resultado)
		})
		.catch(err => {
			res.json(err)
		})
	}

})

module.exports = server;
