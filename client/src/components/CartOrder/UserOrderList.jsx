import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

import { getUserOrders, getUserInfo } from '../../actions/Order';
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

//estilos GRID
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
}));

export default function UserOrderList() {
  const classes = useStyles();
  const classes2 = useStylesGrid();

  const dispatch = useDispatch();
  const userList = useSelector(state => state.Order.userItem);
  const userInfoList = useSelector(state => state.Order.userInfo);

  // console.log(userInfoList)

  //action UserOrderList
  useEffect(() => {
    dispatch(getUserOrders())
  }, [])

  //action grid
  useEffect(() => {
    dispatch(getUserInfo())
  }, [])

  if (!userInfoList) {
    return <p>cargando</p>
  }

  return (

    <div>

      {/* Order table */}
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table className={classes.table} aria-label="simple table">

          <TableHead >
            <TableRow>
              <StyledTableCell align="center">orden Id</StyledTableCell>
              <StyledTableCell align="center">Product Id</StyledTableCell>
              <StyledTableCell align="center">Price </StyledTableCell>
              <StyledTableCell align="center">Quantity</StyledTableCell>
              <StyledTableCell align="center">Total</StyledTableCell>

            </TableRow>
          </TableHead>


          <TableBody>

            {userList.map(item => (

              <TableRow key={item.id}>
                <TableCell scope="row" align="center">  {item.orderId}</TableCell>
                <TableCell scope="row" align="center">{item.productId}</TableCell>
                <TableCell scope="row" align="center"> {item.price}</TableCell>
                <TableCell scope="row" align="center">{item.quantity}</TableCell>
                <TableCell scope="row" align="center">{item.quantity * item.price}</TableCell>
              </TableRow>
            ))}
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
              <StyledTableCell scope="row" align="center">User Information</StyledTableCell>
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
            <StyledTableCell align="center">Payment Information</StyledTableCell>
          </TableRow>
        </TableHead>

        <ButtonGroup align="center" variant="text" color="primary" aria-label="text primary button group">
          <Button>Credit Card</Button>
          <Button>Cash</Button>
        </ButtonGroup>


      </TableContainer>

      <br></br>
    </div>


  );
}

