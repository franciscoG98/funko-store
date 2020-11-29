import React, { useEffect /*, useState*/ } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';

import { getUserOrders, getUserInfo } from '../../actions/Order';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { total, cantidad } from './total';
import StripeCheckout from 'react-stripe-checkout'
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Axios from 'axios';

toast.configure();

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

  async function handleToken(token){
    await Axios.post("http://localhost:3001/email", {
        name: userInfoList[0].fullname,
        products: "Funkos",
        quantity: cantidad(userList),
        total: total(userList),
        email: token.email
    })
    const response = await axios.post(
      "http://localhost:3001/checkout", {token, userList}
    );
    const {status} = response.data;
    console.log('Response:', response.data);
    if (status === 'success') {
      toast ("Success! Check email for details", {type: 'success'});
    } else {
      toast("Something went wrong", {type: 'error'});
    }
  }

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
            <TableRow>
            <TableCell scope="row" align="center"></TableCell>
                <TableCell scope="row" align="center"></TableCell>
                <TableCell scope="row" align="center"></TableCell>
                <TableCell scope="row" align="center"></TableCell>
                <TableCell scope="row" align="center">
            <StripeCheckout
                stripeKey = 'pk_test_51HsVfCGPp99r0B7MXf3SjryIPftr9tUGFehUIbuQQGSBEFO8SdTkMwR4PuAS63GJHA7uLMcQDjCxOry71pew4fjv00EeMP0HO8'
                token = {handleToken}
                billingaddress
                shippingaddress
                amount = {total(userList)}
                />
                </TableCell>
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
    </div>
  );
}

