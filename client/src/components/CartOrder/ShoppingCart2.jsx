import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom"

import { deleteItem, UpdateOrderLine } from '../../actions/Order';

// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
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

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const ShoppingCart2 = () =>  {
  const classes = useStyles();
  const dispatch = useDispatch();


  const order = useSelector(state => state.Order.items);

  // estos arrays y el for los uso para que se agrupen los funkos y no se repitan en la orden
  let arrMap = [];
  let idArr = [];

  for(let i=0; i<order.length; i++) {

    if(idArr.includes(order[i].id)) {
      
      let  iddd = order[i].id ;
      let orderLine = idArr.indexOf(iddd);


      arrMap[orderLine].quantity +=1;
      dispatch( UpdateOrderLine(arrMap[orderLine]) )

    } else {
      idArr.push(order[i].id);
 
      let SendOrderLine = {
        id: order[i].id,
        name: order[i].name,
        imagen: order[i].imagen,
        price: order[i].price,
        quantity: 1
      }

      dispatch( UpdateOrderLine(SendOrderLine, 1) ); 

      arrMap.push(SendOrderLine);
    }
  }
  // console.log('order:\n', order, '\n arrMap: \n', arrMap, '\n idArr: \n', idArr);

  


  // funcion que calcula el total
  let t = 0;
  const total = (arr) => {
    for(let i=0; i< arr.length; i++) {

      t += arr[i].price
    }
    return t;
  }

  const  deleteItemCart = async (id) => {
    MySwal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch( deleteItem(id) ) 
        
        MySwal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    }).catch(err => {
      console.log(err);
    });
    

   }

  return (
    <div style={{width:'70%', margin:'auto'}}>
      <TableContainer component={Paper} >
        <Table className={classes.table} aria-label="customized table">

            {/* titulo */}
          <TableHead>
            <TableRow>
              <StyledTableCell align="left"></StyledTableCell>
              <StyledTableCell align="left">Funko Name</StyledTableCell>
              <StyledTableCell align="left"></StyledTableCell>
              <StyledTableCell align="right">Quantity</StyledTableCell>
              <StyledTableCell align="right">Subtotal</StyledTableCell>

            </TableRow>
          </TableHead>

          {/* cuerpo */}
          <TableBody>
            {arrMap.map( i => (

              <StyledTableRow key={i.id}>
                <StyledTableCell align="left">
                  <Button size="small" color="primary" onClick={() => deleteItemCart(i.id)}><DeleteRoundedIcon/></Button>
                </StyledTableCell>
                <StyledTableCell align="left">{i.name}</StyledTableCell>
                <StyledTableCell align="left">
                  <img src={i.imagen} alt='funko image' style={{width:'auto', height: '60px'}}/>
                </StyledTableCell>
                <StyledTableCell align="right">{i.quantity}</StyledTableCell>
                <StyledTableCell align="right">${i.price * i.quantity}</StyledTableCell>
              </StyledTableRow>
            ))}

              {/* parte de abajo */}
            <StyledTableCell align="left">TOTAL:</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>            
            <StyledTableCell align="right">${total(order)} </StyledTableCell>
            <StyledTableCell align="right">
              <Link to="/user/product">
              <Button autoFocus onClick={() => alert('aca tendria que saltar a otro coso pa comprar vieron')} color="primary">
                  Buy
                </Button>
              </Link>
            </StyledTableCell>

          </TableBody>


        </Table>

      </TableContainer>
    </div>
  );
}

export default ShoppingCart2; 
