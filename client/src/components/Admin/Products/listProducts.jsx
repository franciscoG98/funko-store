import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import Axios from 'axios';
import AddProducts from '../../CRUForm/AddProduct'
import Button from '@material-ui/core/Button';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import EditProduct from "../../CRUForm/EditProduct";

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
  table:{
    justifyContent: "center",
    flexDirection: "row"

  },
  Button:{
      display: "flex",
      marginLeft: "62%",
  },
  
  
});



export default function ListProducts() {
    const classes = useStyles();
    const [producto, setProducto]= useState([])
    const [edit, setEdit] = useState(false)

    function getProduct(){
      Axios("http://localhost:3001/products")
        .then(r => setProducto(r.data))
    }

    
    useEffect(()=>{
      getProduct()
    },[])

   const  deleteProduct = async (id) => {
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
        Axios.delete(`http://localhost:3001/products/${id}`)
        .then(() => getProduct())
        MySwal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })

   }
   
   

    if(!producto){
        return <p>cargando</p>
    }
    
  return (

    <div>

      <AddProducts getProduct={getProduct}  />

    <TableContainer className={classes.tableContainer} component={Paper}>
      <Table  className={classes.table} aria-label="simple table">
        <TableHead >
          <TableRow>
            <StyledTableCell align="center">Id</StyledTableCell>
            <StyledTableCell align="center">Nombre</StyledTableCell>
            <StyledTableCell align="center">Descripcion</StyledTableCell>
            <StyledTableCell align="center">Precio</StyledTableCell>
            <StyledTableCell align="center">Stock</StyledTableCell>
            <StyledTableCell align="center">Editar/Eliminar</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { producto.map(prod => (
            <TableRow key={prod.id}>
              <TableCell  scope="row"> {prod.id}</TableCell>
              <TableCell scope="row" align="left">{prod.name}</TableCell>
              <TableCell scope="row" align="left">{prod.description}</TableCell>
              <TableCell scope="row" align="center">{prod.price}</TableCell>
              <TableCell scope="row" align="center">{prod.stock === "true" ? <p>Disponible</p> : <p style={{color: "red"}}>Pocas Unidades</p>}</TableCell>
              <TableCell scope="row" align="center"> 
                <Button size="small" color="primary" onClick={() => setEdit(true)}>
                   <EditProduct getProduct={getProduct} id={prod.id} edit={edit} setEdit={setEdit} /> 
                </Button> 
                <Button size="small" color="primary" onClick={() => deleteProduct(prod.id)}><DeleteIcon/></Button></TableCell>
            </TableRow>
          )) }
        </TableBody>
      </Table>
    </TableContainer>
    <br></br>
    </div>
  );
}