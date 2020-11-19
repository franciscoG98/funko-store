import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import Axios from 'axios';
import { makeStyles} from '@material-ui/core/styles';
// import EditIcon from '@material-ui/icons/Edit';

import { useDispatch } from 'react-redux'; 
import { addCategory, getCategories } from '../../../actions/Categories';




const useStyles = makeStyles({

  buttons:{
      display: "flex",
      marginLeft: "62%"
  }
});

export default function FormDialog({getCategory, cambio, newCategory}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };



  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async e => {
    
    e.preventDefault();
    await dispatch( addCategory(newCategory) );
    // Axios.post("http://localhost:3001/products/category" , newCategory)
    dispatch(getCategories());
    // getCategory();
    setOpen(false)
  }


  return (
    <div>
      
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" onSubmit={handleSubmit}>
        <DialogTitle id="form-dialog-title">Agregar Categoría</DialogTitle>
        <DialogContent>
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
              onChange={cambio}
              fullWidth
               />
          <TextField
            margin="dense"
            id="name"
            label="Descripción"
            type="text"
            fullWidth
            name="description"
            onChange={cambio}
          />

         
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>       
            <Button type="submit" color="primary" onClick={handleSubmit}>
            Agregar
          </Button>      
        </DialogActions>
      </Dialog>
      <Button style={{color: 'white', backgroundColor: '#303030'}} variant="contained" className={classes.buttons} color="primary" onClick={handleClickOpen}>
        Agregar Categoria
      </Button>
      
      
    </div>
  );
}