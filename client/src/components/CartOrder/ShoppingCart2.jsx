import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom"
// import { useParams } from 'react-router';
import { deleteItem, UpdateOrderLine, getCarrito } from '../../actions/Order';

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
import { getProductId } from '../../actions/Products';
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
  }
});

const ShoppingCart2 = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  /*   {
      "id": 1,
      "total": 1000,
      "state": "cart",
      "createdAt": "2020-11-17T14:13:30.886Z",
      "updatedAt": "2020-11-17T14:13:30.886Z",
      "userId": 1,
      "products": [],
      "orderlines": []
      } */


  const order = useSelector(state => state.Order.items);
  const carro = useSelector(state => state.Order.cart)
  const cartProduct = useSelector(state => state.Order.cartProd);
  console.log("carro1: " + carro); 
  const userId = 1
  // const { userId } = useParams();
  useEffect(() => {
    dispatch(getCarrito(userId))
  }, [])
  //JELPER para renderizar
  //carro:   [{prodId:1},{prodId:2}]
  //cartProd:[{id:2},{id:1}]
 
  /* // estos arrays y el for los uso para que se agrupen los funkos y no se repitan en la orden
  let arrMap = [];// orden entera
  let idArr = [];//junta los id para ver si los tiene 

  for (let i = 0; i < order.length; i++) {

    if (idArr.includes(order[i].id)) {

      let iddd = order[i].id;//guarda id del producto para buscarla en la orden
      let orderLine = idArr.indexOf(iddd); //busca donde esta en la orden para modificar la OL
      //arrMap[orderLine].quantity += 1;
      dispatch(UpdateOrderLine(arrMap[orderLine], userId))

    } else {
      idArr.push(order[i].id);
      let SendOrderLine = {
        productId: order[i].id,
        price: order[i].price,
        quantity: 1
      }
      let pushOrderLine = {
        productId: order[i].id,
        name: order[i].name,
        imagen: order[i].imagen,
        price: order[i].price,
        quantity: 1
      }

      dispatch(UpdateOrderLine(SendOrderLine, userId));

      arrMap.push(pushOrderLine);
    }
  } */
  // console.log('order:\n', order, '\n arrMap: \n', arrMap, '\n idArr: \n', idArr);
  // funcion que calcula el total
  let t = 0;
  const total = (arr) => {
    for (let i = 0; i < arr.length; i++) {

      t += arr[i].price
    }
    return t;
  }

  const deleteItemCart = async (id) => {
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
        dispatch(deleteItem(id))

        MySwal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    }).catch(err => {
      console.log(err);
    });

  };
  //console.log('orderlines antes de la ifi:\n', carro)
  

  
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

  return (
    <div className={classes.op} style={{ width: '70%', margin: 'auto' }}>
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
            {!carro2 ? <p>cargando...</p> : carro2.map(i => (

              <StyledTableRow key={i.id}>
                <StyledTableCell align="left">
                  <Button size="small" color="primary" onClick={() => deleteItemCart(i.productId)}><DeleteRoundedIcon /></Button>
                </StyledTableCell>
                <StyledTableCell align="left">{i.prodName}</StyledTableCell>
                <StyledTableCell align="left">
                  <img src={i.prodImg} alt='funko image' style={{ width: 'auto', height: '60px' }} />
                </StyledTableCell>
                <StyledTableCell align="right">{i.quantity}</StyledTableCell>
                <StyledTableCell align="right">${i.price}</StyledTableCell>
              </StyledTableRow>
            ))}


            {/* parte de abajo */}
            <StyledTableCell align="left">TOTAL:</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right">${total(carro)} </StyledTableCell>
            <StyledTableCell align="right">

              <Link to={`/user/1/product`}>
                <Button autoFocus color="primary">
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
