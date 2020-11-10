const server = require('express').Router();
const { Product, Categories } = require('../db.js');

server.post('/', function (req, res, next) {
	let producto;
    let { name, description, price, imagen, stock, categoria, categoria2} = req.body;
	Product.create({
	name: name,
	description: description,
	price: price,
	stock: stock,
	imagen: imagen,
	})
	.then((product) => {
		producto = product
		return Categories.findOne({where: {name: categoria}}).then((category) => producto.addCategories(category))
	}	 
	)
	.then( () => 	 
	  Categories.findOne({where: {name: categoria2}}).then((category) => producto.addCategories(category))
	)
	.then(() => res.sendStatus(201))
	.catch(next);
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
		Product.findOne({where: {id},	include: [Categories]})
		.then(producto =>{
		 res.json({producto})
		})
		.catch(err => {
			console.log(err)
			res.json(err)
		}) 
	}			
});

server.get("/category/:nombreCat", (req, res) => {
	
	const { nombreCat} = req.params;
	let name = nombreCat
	if(!name){
		res.status(400).json({msg: "La categoria no existe"})
	}
  
	Categories.findOne({where: {name}, include: [Product]})
	.then(categoria => {
		res.json(categoria)
	})
	.catch(err => {
		res.json({err})
	}) 

})

//Elimina la categoria al producto.
server.delete('/:idProducto/category/:idCategoria', (req, res) => {
	const {idProducto, idCategoria} = req.params;
	let deleteProduct;
	if(!idProducto || !idCategoria){
		res.status(400).json({msg: "invalid or missing data"})
	} else {
		Product.findOne({where: {id: idProducto},	include: [Categories]})
		.then(producto =>{
		 deleteProduct = producto
		 Categories.destroy({ where: {id: idCategoria}})
		 .then((data) => {
			 res.json(data)
		 })
		})
		.catch(err => {
			console.log(err)
			res.json(err)
		}) 
	}			
	

})


//Modificar Categoria
server.put('/category/:id', (req, res) =>{
	const {id} = req.params;
	const {name, description} = req.body;
	const category = {
		name,
		description
	}

	if (!id || !category){
		res.status(400).json({msj: "invalid or missing data"});
	} else {
		Categories.update(category,
			{where: { id: id } })
			.then(cat => {
				res.json(cat)
			})
			.catch(err => {
				res.json(err)
			  })
	}
	
})

//Borrar Producto 	
server.delete("/:id", (req, res) => {
	const {id} = req.params;
	if(!id) {
		res.json({msg: "Debe seleccionar un producto a eliminar"})
	} else {
			Product.destroy( {where: {id}})
		.then(() => {
			res.json({msg: "Producto Eliminado"})
		})
		.catch(err => {
			res.json({err})
		}) 
	}	
})

//modificar producto
server.put('/:id', (req, res) =>{
	const {id} = req.params;
	const {name, description, stock, imagen, price} = req.body;
	const producto = {
		name,
		description,
		stock,
		imagen,
		price
	}

	if (!id || !producto){
		res.status(400).json({msj: "invalid or missing data"});
	} else {
		Product.update(producto,
			{where: { id: id } })
			.then(prod => {
				res.json(prod)
			})
			.catch(err => {
				res.json(err)
			  })
	}
	
})



module.exports = server;
