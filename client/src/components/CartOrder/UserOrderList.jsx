import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';

import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

import { getUserOrders, getUserInfo } from '../../actions/Order';
import { useDispatch, useSelector } from 'react-redux';

//estilos GRID
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';


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
  const userInfo = useSelector(state => state.Order.userInfo);

  console.log(userInfo)
  //action UserOrderList
  useEffect(() => {
    dispatch(getUserOrders())
  }, [])

  //action grid
  useEffect(() => {
    dispatch(getUserInfo())
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

      (
      <div className={classes2.root}>
        <Paper className={classes2.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes2.image}>
                <img className={classes2.img} alt="complex" src="https://memegenerator.net/img/images/17273162.jpg" />
              </ButtonBase>
            </Grid>
            {userInfo.map(info => {
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs key={info.id}>
                    <Typography gutterBottom variant="subtitle1">{info.fullname}</Typography>
                    <Typography variant="body2" gutterBottom> {info.email} </Typography>
                    <Typography variant="body2" color="textSecondary"> {info.phone} </Typography>
                    <Typography variant="body2" color="textSecondary"> {info.address} </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                      Remove
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">$19.00</Typography>
                </Grid>
              </Grid>
            })}

          </Grid>
        </Paper>
      </div>
  )

      <br></br>
    </div>


  );
}

