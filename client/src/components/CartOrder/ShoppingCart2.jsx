import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom"
// import { useParams } from 'react-router';
import { deleteItem, UpdateOrderLine, getCarrito, DecreaseOrderLine, IncreaseOrderLine, getGuestCart } from '../../actions/Order';


// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';



import Badge from '@material-ui/core/Badge';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';






import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import { updateGuestCart } from '../../actions/Order';
import { total } from "./total.js"
import {loadSession} from "../../store/saveToSessionStorage/sessionStorage"

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
  op: {
    opacity: '88%'
  },
  cells: {
    backgroundColor: '#303030',
    fontSize: '19.5px'
  },
  quantitycell: {
    backgroundColor: '#303030',
    fontSize: '19.5px',
    paddingRight: '42px'
  },
  text: {
    fontSize: '17px',

  },
  buy: {
    fontFamily: 'Cairo',
    fontSize: '20px',
    backgroundColor: '#f2f2f2',
    color: 'black',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#303030',
      color: 'white',
      transition: '0.4s',
    }
  },
  hover: {

    '&:hover': {
      backgroundColor: '#484848',
      color: 'white',
      transition: '0.7s',
    }
  }
});

const ShoppingCart2 = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

 
  const user = loadSession();
  //const order = useSelector(state => state.Order.items);
  const carro = useSelector(state => state.Order.cart)
  const cartProduct = useSelector(state => state.Order.cartProd);
  
  console.log("carro1: " + carro);
  console.log("cartProd: " + carro)
  
  var userId = 0
  if (user){userId = user.id}
  
  useEffect(() => {
    if (userId) {
      dispatch(getCarrito(userId))
    }
    else {
      dispatch(getGuestCart())
    }
     
  }, [])

  
  const deleteItemCart = async (id) => {
    MySwal.fire({
      title: 'Are you sure?',
      text: "This will remove the funko from your cart!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteItem(userId, id))

        MySwal.fire(
          'Deleted!',
          'Your funko is no longer in the cart.',
          'success'
        )
      }
    }).catch(err => {
      console.log(err);
    });

  };
  console.log('orderlines antes de la ifi:\n', carro)




  const carro2 = carro.sort(function (a, b) {
    if (a.productId > b.productId) {
      return 1;
    }
    if (a.productId < b.productId) {
      return -1;
    }
    return 0;
  });
  const prod2 = cartProduct.sort(function (a, b) {
    if (a.id > b.id) {
      return 1;
    }
    if (a.id < b.id) {
      return -1;
    }
    return 0;
  });

  for (let index = 0; index < carro.length; index++) {
    carro2[index].prodName = prod2[index].name
    carro2[index].prodImg = prod2[index].imagen
  }
  /*  const handleAddIcon = function (prod, id){
    prod.quantity += 1
    dispatch(IncreaseOrderLine (prod, id)) 
   }
   const handleRemoveIcon = function (prod, id){
    prod.quantity -= 1
    dispatch(IncreaseOrderLine (prod, id)) 
   } */

  return (
    <div className={classes.op} style={{ width: '70%', margin: 'auto' }}>
      <TableContainer component={Paper} >
        <Table className={classes.table} aria-label="customized table">

          {/* titulo */}
          <TableHead>
            <TableRow>
              <StyledTableCell className={classes.cells} align="left"></StyledTableCell>
              <StyledTableCell className={classes.cells} align="left">Funko</StyledTableCell>
              <StyledTableCell className={classes.cells} align="left"></StyledTableCell>
              <StyledTableCell className={classes.quantitycell} align="center">Quantity</StyledTableCell>
              <StyledTableCell className={classes.cells} align="right">Subtotal</StyledTableCell>
            </TableRow>
          </TableHead>
          {/* cuerpo */}
          <TableBody>
            {!carro2 ? <p>cargando...</p> : carro2.map(i => (

              <StyledTableRow key={i.id}>
                <StyledTableCell align="left">
                  <Button style={{ color: 'black' }} size="small" color="primary" onClick={() => deleteItemCart(i.productId)}><DeleteRoundedIcon /></Button>
                </StyledTableCell>
                <StyledTableCell className={classes.text} align="left">{i.prodName}</StyledTableCell>
                <StyledTableCell align="left">
                  <img src={i.prodImg} alt='funko' style={{ width: 'auto', height: '60px' }} />
                </StyledTableCell>
                <StyledTableCell style={{ fontSize: '18px', paddingRight: '42px' }} align="center">

                  <ButtonGroup>

                    <Button className={classes.hover}
                      style={{ borderRight: '1px solid #bfbfbf' }}
                      aria-label="reduce"
                      onClick={() => i.quantity === 1 ? deleteItemCart(i.productId) : dispatch(DecreaseOrderLine(i, userId))}
                    >
                      <RemoveIcon fontSize="small" />
                    </Button>
                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: '10px', marginRight: '11px' }} >

                      {i.quantity}

                    </span>
                    <Button className={classes.hover}
                      aria-label="increase"
                      onClick={() => dispatch(IncreaseOrderLine(i, userId))} >
                      <AddIcon fontSize="small" />
                    </Button>
                  </ButtonGroup>

                </StyledTableCell>
                <StyledTableCell style={{ fontSize: '17px', paddingRight: '30px' }} align="right">${i.quantity * i.price}</StyledTableCell>
              </StyledTableRow>
            ))}





            {/* parte de abajo */}
            <StyledTableCell style={{ fontFamily: 'Cairo', fontSize: '24px'/* , fontWeight: 'bold' */ }} align="left">TOTAL</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell style={{ fontSize: '25px' }} align="right">${total(carro2)} </StyledTableCell>
            <StyledTableCell align="right">

              {/* ternario aca que si es usuario 0 me redireccione a login */}
              <Link to={`/user/1/product`}>
                <Button className={classes.buy} /* autoFocus color="primary" */>
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
