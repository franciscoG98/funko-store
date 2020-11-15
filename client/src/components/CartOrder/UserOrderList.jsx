import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';

import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

import { getUserOrders } from '../../actions/Order';
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



export default function UserOrderList() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const userList = useSelector(state => state.Order.userItem);

  console.log(userList)
  useEffect(() => {
    dispatch(getUserOrders())
  }, [])



  if (!userList) {
    return <p>cargando</p>
  }

  return (

    <div>


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
    </div>
  );
}