import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Axios from 'axios';
import AddProducts from '../../CRUForm/AddProduct'

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: "#3f51b5",
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
const useStyles = makeStyles({
  tableContainer: {
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(64, 81, 181, .3)',
    color: 'black',
    width: 750,
    justifyContent: 'space-between',
    margin: 'auto',
    marginTop: "15px",
    display: 'flex',
    padding: 30,
    
  },
  table:{
    justifyContent: "center",
   

  },
  buttons:{
      color: "#A5B7FF",
  },
  
});



export default function ListProducts() {
    const classes = useStyles();
    const [producto, setProducto]= useState([])


    function getProduct(){
      Axios("http://localhost:3001/products")
        .then(r => setProducto(r.data))
    }
    
    useEffect(()=>{
      getProduct()
    },[])


   

    if(!producto){
        return <p>cargando</p>
    }
    
  return (

    <div>

      <AddProducts  getProduct={getProduct} />

    <TableContainer className={classes.tableContainer} component={Paper}>
      <Table  className={classes.table} aria-label="simple table">
        <TableHead >
          <TableRow>
            <StyledTableCell align="center">Id</StyledTableCell>
            <StyledTableCell align="center">Nombre</StyledTableCell>
            <StyledTableCell align="center">Descripcion</StyledTableCell>
            <StyledTableCell align="center">Precio</StyledTableCell>
            <StyledTableCell align="center">Stock</StyledTableCell>
            <StyledTableCell align="center">Editar/Eliminar</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { producto.map(prod => (
            <TableRow key={prod.id}>
              <TableCell component="th" scope="row">
                {prod.id}
              </TableCell>
              <TableCell align="left">{prod.name}</TableCell>
              <TableCell align="center">{prod.description}</TableCell>
              <TableCell align="center">{prod.price}</TableCell>
              <TableCell align="center">{prod.stock}</TableCell>
              <TableCell className={classes.buttons} align="center"> <EditIcon/>   <DeleteIcon /></TableCell>
            </TableRow>
          )) }
        </TableBody>
      </Table>
    </TableContainer>

    </div>
  );
}