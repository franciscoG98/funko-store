import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

import Axios from 'axios';
import EditProduct from "../../CRUForm/EditProduct";
import AddProducts from '../../CRUForm/AddProduct';
import { getProducts, deleteProduct } from '../../../actions/Products';
import { useDispatch, useSelector } from 'react-redux';


const MySwal = withReactContent(Swal)

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
    width: 900,
    justifyContent: 'space-between',
    margin: 'auto',
    marginTop: "15px",
    display: 'flex',
    padding: 30,
    flexDirection: "row"
  },
  table: {
    justifyContent: "center",
    flexDirection: "row"

  },
  Button: {
    display: "flex",
    marginLeft: "62%",
  },
});



export default function AdminOrderList() {
  const classes = useStyles();
  // const [producto, setProducto]= useState([])
  // const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const itemsList = useSelector(state => state.Order.items);
 
  
    function getAdminOrder (){
      dispatch(getAdminOrder());
    }

  
    useEffect(() => {
      dispatch(getAdminOrder())
    },[])

    //  const  deleteProducts = async (id) => {
    //   MySwal.fire({
    //     title: 'Are you sure?',
    //     text: "You won't be able to revert this!",
    //     icon: 'warning',
    //     showCancelButton: true,
    //     confirmButtonColor: '#3085d6',
    //     cancelButtonColor: '#d33',
    //     confirmButtonText: 'Yes, delete it!'
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //       // Axios.delete(`http://localhost:3001/products/${id}`)
    //       dispatch( deleteProduct(id) )

    //       MySwal.fire(
    //         'Deleted!',
    //         'Your file has been deleted.',
    //         'success'
    //       )
    //     }
    //   }).catch(err => {
    //     console.log(err);
    //   });


    //  }

    if (!itemsList) {
      return <p>cargando</p>
    }

  return (

    <div>

      {/* <AddProducts getProduct={getProduct} /> */}


      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table className={classes.table} aria-label="simple table">

          <TableHead >
            <TableRow>
              <StyledTableCell align="center">Estado</StyledTableCell>
              <StyledTableCell align="center">Cantidad</StyledTableCell>
              <StyledTableCell align="center">Precio</StyledTableCell>
              <StyledTableCell align="center">Total</StyledTableCell>
              {/* <StyledTableCell align="center">Editar/Eliminar</StyledTableCell> */}
            </TableRow>
          </TableHead>


          <TableBody>
        
            {itemsList.map((item, i) => (
              <TableRow key={i}>
                <TableCell scope="row" align="left">{item.quantity}</TableCell>
                <TableCell scope="row" align="left">{item.price}</TableCell>

                <TableCell scope="row"> {item.state}</TableCell>
                <TableCell scope="row" align="center">{item.total}</TableCell>
                {/* <TableCell scope="row" align="center">{item.stock > 0 ? <p style={{color: "green"}}>{item.stock}</p> : <p style={{color: "red"}}>{item.stock}</p>}</TableCell>
              <TableCell scope="row" align="center"> 
                <Button size="small" color="primary" onClick={() => setEdit(true)}>
                   <Edititemuct getitemuct={getitemuct} itemucto={item} edit={edit} setEdit={setEdit} /> 
                </Button> 
                <Button size="small" color="primary" onClick={() => deleteitemucts(item.id)}><DeleteIcon/></Button></TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br></br>
    </div>
  );
}