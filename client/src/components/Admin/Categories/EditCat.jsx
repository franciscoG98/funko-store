import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import Axios from 'axios';
// import { makeStyles} from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';

import { useDispatch } from 'react-redux';
import { editCategory } from '../../../actions/Categories';
import { useState } from 'react';
 


// const useStyles = makeStyles({

//   buttons:{
//       display: "flex",
//       marginLeft: "62%"
//   },
//   op: {
//     opacity: '88%',
//   }
// });

export default function FormDialog({getCategory, cambio, newCategory, edit, setEdit, cat, setNewCategory}) {
  // const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [categoria, setCategoria] = useState({
    name: cat.name,
    description: cat.description
  })
  const handleClickOpen = () => {
    setOpen(true);
  };
  

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = e => {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    })
  }
  


  const handleActualizar = async e => {
    e.preventDefault();
    await dispatch( editCategory(cat.id, categoria) );
    // Axios.put("http://localhost:3001/products/category/" + newCategory.id, newCategory)
    getCategory();
    setOpen(false)
    setEdit(false)
  }

  return (
    <div >
      <Dialog  open={open} onClose={handleClose} aria-labelledby="form-dialog-title" onSubmit={handleActualizar}>
        <DialogTitle id="form-dialog-title">Agregar Categoría</DialogTitle>
        <DialogContent >
          <DialogContentText>
            Nombra y describe tu categoria
          </DialogContentText>              
             <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Nombre de la Categoria"
              type="text"
              name="name"
              onChange={handleChange}
              value={edit && categoria.name}
              fullWidth
               />
          <TextField
            margin="dense"
            id="name"
            label="Descripción"
            type="text"
            fullWidth
            name="description"
            onChange={handleChange}
            value={edit && categoria.description}
          />

         
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          
         <Button type="submit" color="primary" onClick={handleActualizar}>
          Editar
        </Button>
        </DialogActions>
      </Dialog>
      <EditIcon  color="primary" onClick={handleClickOpen}/>
    </div>
  );
}