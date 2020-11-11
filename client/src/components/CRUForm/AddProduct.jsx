import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import CRUForm from './CRUForm';
import Axios from 'axios';

import { useDispatch } from 'react-redux';
import { addProduct, getProducts } from '../../actions/Products'; 



const AddProduct = ({getProduct}) => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    imagen:"", 
    stock: null,
    categoria: "",
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

  const handleSubmit = async e => {
    e.preventDefault()
    await dispatch( addProduct(product) );
    // Axios.post("http://localhost:3001/products", product)
    await dispatch( getProducts() );
    // getProduct();
    
    setOpen(false)
  } 

  return (
    <div>
      <Button variant="contained" color="primary"  display="flex" onClick={handleClickOpen} style={{marginLeft:'65%'}} >
        Agregar Producto
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title"  onSubmit={handleSubmit}>
        <DialogTitle id="form-dialog-title">Agregar Producto</DialogTitle>
        <DialogContent>

            <CRUForm product={product} cambio={onChange} />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary" onClick={handleSubmit}>
            Agregar Producto
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddProduct; 
