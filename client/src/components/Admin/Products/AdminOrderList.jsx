import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

import Axios from 'axios';

import { getAdminOrders } from '../../../actions/Order';
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
  const itemsList = useSelector(state => state.Order.orderItem);

  
    useEffect(() => {
      dispatch(getAdminOrders())
    },[])

  

    if (!itemsList) {
      return <p>cargando</p>
    }

  return (

    <div>


      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table className={classes.table} aria-label="simple table">

          <TableHead >
            <TableRow>
              <StyledTableCell align="center">Id</StyledTableCell>
              <StyledTableCell align="center">Total</StyledTableCell>
              <StyledTableCell align="center">Estado</StyledTableCell>
              <StyledTableCell align="center">UserId</StyledTableCell>
           
            </TableRow>
          </TableHead>


          <TableBody>
        
            {itemsList.map(item => (
               <TableRow key={item.id}>
               <TableCell scope="row" align="center"> {console.log(item)}  {item.id}</TableCell>
               <TableCell scope="row" align="center">{item.total}</TableCell>
               <TableCell scope="row" align="center"> {item.state}</TableCell>
               <TableCell scope="row" align="center">{item.userId}</TableCell>
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