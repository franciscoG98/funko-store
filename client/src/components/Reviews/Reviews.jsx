import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {useParams} from "react-router-dom"
import {getReviews} from "../../actions/Reviews";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';



import { useDispatch, useSelector } from 'react-redux';

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
  const [value, setValue] = React.useState();
  
  const dispatch = useDispatch();
  const revi = useSelector(state => state.Review.stars)
  const id = useParams();


   //action UserOrderList
  useEffect(() => {
    dispatch(getReviews(id.id))
  },[])


  

  return (

    <div>

      {/* Order table */}
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table className={classes.table} aria-label="simple table">

          <TableHead >
            <TableRow>
              <StyledTableCell className={classes.black} align="center">Stars</StyledTableCell>
              <StyledTableCell className={classes.black} align="center">Comment</StyledTableCell>

            </TableRow>
          </TableHead>


          <TableBody>

            {revi.map(item => (

              <TableRow key={item.id}>
                <TableCell scope="row" align="center"><Rating
                          name="read-only"
                          readOnly
                          value={item.qualification}
                        /></TableCell>
                <TableCell scope="row" align="center">{item.description}</TableCell>
              </TableRow>
              
            ))}
          </TableBody>
        </Table>
      </TableContainer>



      <br></br>
    </div>


  );
}














// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Rating from '@material-ui/lab/Rating';
// import Box from '@material-ui/core/Box';
// import Typography from '@material-ui/core/Typography';
// import { useSelector} from "react-redux";
// import {useParams} from "react-router-dom"
// import {getReviews} from "../../actions/Reviews";




// const useStyles = makeStyles({
//   root: {
//     width: 200,
//     display: 'flex',
//     justifyContent: "center",
//     alignItems: 'center',
//     backgroundColor: "white"
//   },
// });

// export default function Reviews(revi) {
//   const revi = useSelector(state => state.Review.stars)
//   const id = useParams();
//   const dispatch = useDispatch();


//   useEffect(() => {
//     dispatch(getReviews(id.id))
// }, [])
  
//   const [value, setValue] = React.useState(revi.qualification);

//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//      <Box >
        
//     <Typography component="legend">{revi.description}</Typography>
//           <Rating
//             name="simple-controlled"
//             value={value}
//           />
    
//      </Box>
      
//     </div>
//   );
// }