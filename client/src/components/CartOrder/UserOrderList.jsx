import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

import { getUserOrders, getUserInfo } from '../../actions/Order';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { total } from './total';

//const MySwal = withReactContent(Swal)

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
  black: {
    backgroundColor: '#303030',
  }

});

/* //estilos GRID
const useStylesGrid = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '120%',
    maxHeight: '120%',
  },
})); */

export default function UserOrderList() {
  const classes = useStyles();
  //const classes2 = useStylesGrid();

  const id = useParams();
  console.log(id.id)

  const dispatch = useDispatch();
  const userList = useSelector(state => state.Order.userItem);
  const userInfoList = useSelector(state => state.Order.userInfo);

  //action UserOrderList
  useEffect(() => {
    dispatch(getUserOrders(id.id))
    dispatch(getUserInfo(id.id))
  }, [])

  if (!userInfoList) {
    return <p>cargando</p>
  }
  console.log(userList);

  return (

    <div>

      {/* Order table */}
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table className={classes.table} aria-label="simple table">

          <TableHead >
            <TableRow>
              <StyledTableCell className={classes.black} align="center">orden Id</StyledTableCell>
              <StyledTableCell className={classes.black} align="center">Product Id</StyledTableCell>
              <StyledTableCell className={classes.black} align="center">Price </StyledTableCell>
              <StyledTableCell className={classes.black} align="center">Quantity</StyledTableCell>
              <StyledTableCell className={classes.black} align="center">Total</StyledTableCell>

            </TableRow>
          </TableHead>


          <TableBody>

            {userList.map(item => (

              <TableRow key={item.id}>
                <TableCell scope="row" align="center">  {item.orderId}</TableCell>
                <TableCell scope="row" align="center">{item.productId}</TableCell>
                <TableCell scope="row" align="center"> {item.price}</TableCell>
                <TableCell scope="row" align="center">{item.quantity}</TableCell>
                <TableCell scope="row" align="center">{item.subtotal}</TableCell>
              </TableRow>
              
            ))}
            <TableRow key="total">
                <TableCell scope="row" align="center"></TableCell>
                <TableCell scope="row" align="center"></TableCell>
                <TableCell scope="row" align="center"></TableCell>
                <TableCell scope="row" align="center">Total:</TableCell>
                <TableCell scope="row" align="center">{total(userList)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <br></br>
      <br></br>

      {/* antes era un GRID info User */}
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table className={classes.table} aria-label="simple table">

          <TableHead >
            <TableRow>
              <StyledTableCell className={classes.black} scope="row" align="center">User Information</StyledTableCell>
            </TableRow>
          </TableHead>


          <TableBody>

            {userInfoList.map(info => (

              <TableRow key={info.id}>
                <TableCell scope="row" align="center">Name: {info.fullname}</TableCell>
                <TableCell scope="row" align="center">Address: {info.address}</TableCell>
                <TableCell scope="row" align="center">Email:{info.email}</TableCell>
                <TableCell scope="row" align="center">Phone Number:{info.phone}</TableCell>

              </TableRow>
            ))}

          </TableBody>
        </Table>
      </TableContainer>


      <TableContainer className={classes.tableContainer} component={Paper}>

        <TableHead >
          <TableRow>
            <StyledTableCell className={classes.black} width="200px" align="center">Payment Information</StyledTableCell>

            <TableCell scope="row" width="800px" align="center" >
              <ButtonGroup align="center" variant="text" color="primary" aria-label="text primary button group">
                <Button>Credit Card</Button>
                <Button>Cash</Button>
              </ButtonGroup>
            </TableCell>


          </TableRow>
        </TableHead>




      </TableContainer>

      <br></br>
    </div>


  );
}

