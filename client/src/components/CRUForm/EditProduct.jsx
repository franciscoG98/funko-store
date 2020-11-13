import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';
import CRUForm from './CRUForm';
import Axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { editProduct, getProductId, getProducts } from '../../actions/Products';



const EditProduct = ({getProduct, setEdit, edit, producto}) => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
 
  const [product, setProduct] = useState({
    name: "",
    description: "",
    imagen:"", 
    stock: null,
    categoria: "",
    categoria2: "",
    price: null,
  })
  const handleClickOpen = () => {
    setOpen(true);
  };
 
  const handleClose = () => {
    setOpen(false);
  };

  const onChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
 
    dispatch( getProducts() );  
    setProduct({
              name: producto.name,
              description: producto.description,
              imagen: producto.imagen, 
              stock: producto.stock,
              categoria: producto.categories[0].name,
              categoria2: producto.categories[1].name ,
              price: producto.price,
           })
        
            
  }, [])


  const handleSubmit =  e => {
    e.preventDefault()
    
    dispatch( editProduct(producto.id, product) )
    
    dispatch(getProducts())
    
    //  Axios.put("http://localhost:3001/products/" + id, product)
   // getProduct()
    setOpen(false)
    setEdit(false)
  } 

  return (
    <div>
      <Button  color="primary"  display="flex" onClick={handleClickOpen}>
      <EditIcon />
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title"  onSubmit={handleSubmit}>
        <DialogTitle id="form-dialog-title">Agregar Producto</DialogTitle>
        <DialogContent>

            <CRUForm product={product} cambio={onChange} edit={edit} />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary" onClick={handleSubmit}>
            Editar Producto
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditProduct; 

   //  Axios.get("http://localhost:3001/products/" + id)    
    //  .then(r => {
    //      setProduct({
    //         name: r.data.producto.name,
    //         description: r.data.producto.description,
    //         imagen:r.data.producto.imagen, 
    //         stock: r.data.producto.stock,
    //         categoria: r.data.producto.categories[0].name, 
    //         price: r.data.producto.price,
    //      })
    //  })
    