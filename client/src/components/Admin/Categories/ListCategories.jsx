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
import EditIcon from '@material-ui/icons/Edit';
import Axios from 'axios';
import FormDialog from './DialogCRUDCat'  
import Button from '@material-ui/core/Button';

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
    width: 750,
    justifyContent: 'space-between',
    margin: 'auto',
    marginTop: "15px",
    display: 'flex',
    padding: 30,
    
  },
  table:{
    justifyContent: "center",
   

  },
  buttons:{
      color: "#A5B7FF",
  },
  
});



export default function BasicTable() {
    const classes = useStyles();
    const [category, setCategory]= useState([])
    const [newCategory, setNewCategory] = useState({
      name: "",
      description: ""
    })


    function getCategory(){
      Axios("http://localhost:3001/products/category")
        .then(r => setCategory(r.data.categories))
    }
    
    useEffect(()=>{
      getCategory()
    },[])

    const deleteCategory = async (id) => {
      await Axios.delete(`http://localhost:3001/products/category/${id}`)
      getCategory()
    }

    if(!category){
        return <p>cargando</p>
    }

    const onChange = e => {
      setNewCategory({
        ...newCategory,
        [e.target.name]: e.target.value
      })
    }
    
  return (

    <div>

      <FormDialog  getCategory={getCategory} cambio={onChange} newCategory={newCategory}/>

    <TableContainer className={classes.tableContainer} component={Paper}>
      <Table  className={classes.table} aria-label="simple table">
        <TableHead >
          <TableRow>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="center">Categoría</StyledTableCell>
            <StyledTableCell align="center">Descripcion</StyledTableCell>
            <StyledTableCell align="center">Editar/Eliminar</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { category.map(cat => (
            <TableRow key={cat.id}>
              <TableCell component="th" scope="row">
                {cat.id}
              </TableCell>
              <TableCell align="center">{cat.name}</TableCell>
              <TableCell align="center">{cat.description}</TableCell>
              <TableCell className={classes.buttons} align="center"> 
                <Button size="small" color="primary"> <EditIcon/> </Button> 
                <Button size="small" color="primary" onClick={() => deleteCategory(cat.id)}> <DeleteIcon /></Button>   
                
              </TableCell>
            </TableRow>
          )) }
        </TableBody>
      </Table>
    </TableContainer>
    <br/>
    </div>
  );
}