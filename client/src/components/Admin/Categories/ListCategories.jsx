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
// import Axios from 'axios';
import FormDialog from './DialogCRUDCat'  
import Button from '@material-ui/core/Button';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
// import EditIcon from '@material-ui/icons/Edit';
import EditCat from "./EditCat";

import { useDispatch, useSelector } from 'react-redux'; 
import { getCategories, deleteCategory } from '../../../actions/Categories';
// editCategory, getCategoryName, 

const MySwal = withReactContent(Swal);


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
    opacity: '88%',
    
  },
  table:{
    justifyContent: "center",

   

  },
  buttons:{
      color: "#303030",
  },
  
});



export default function BasicTable() {
    const classes = useStyles();
    const dispatch = useDispatch(); 
    // const categoryName = useSelector(state => state.Category.categoryByName);
    const category = useSelector(state => state.Category.categories);
    // const [category, setCategory]= useState([])
    
    const [newCategory, setNewCategory] = useState({
      name: "",
      description: ""
    })
    const [edit, setEdit] = useState(false)


    function getCategory() {
      dispatch( getCategories() );
      // Axios("http://localhost:3001/products/category")
      //   .then(r => setCategory(r.data.categories))
    }
    
    useEffect(()=>{ 
        dispatch( getCategories() )
        // eslint-disable-next-line
    },[])

    const deleteCategories = (id) => {
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
          // Axios.delete(`http://localhost:3001/products/category/${id}`)

          dispatch( deleteCategory(id) );
          dispatch( getCategories() );
          

          // .then(() => getCategory())
          // getCategory()
          MySwal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })    
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

    <FormDialog  getCategory={getCategory} cambio={onChange} newCategory={newCategory}  />

    <TableContainer className={classes.tableContainer} component={Paper}>
      <Table  className={classes.table} aria-label="simple table">
        <TableHead style={{color: 'white', backgroundColor: '#303030'}}>
          <TableRow style={{color: 'white', backgroundColor: '#303030'}}>
            <StyledTableCell style={{color: 'white', backgroundColor: '#303030'}}>Id</StyledTableCell>
            <StyledTableCell style={{color: 'white', backgroundColor: '#303030'}} align="center">Categor??a</StyledTableCell>
            <StyledTableCell style={{color: 'white', backgroundColor: '#303030'}} align="center">Descripcion</StyledTableCell>
            <StyledTableCell style={{color: 'white', backgroundColor: '#303030'}} align="center">Editar/Eliminar</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { !category ? <p>cargando...</p> : category.map(cat => (
            <TableRow key={cat.id}>
              <TableCell component="th" scope="row">
                {cat.id}
              </TableCell>
              <TableCell align="center">{cat.name}</TableCell>
              <TableCell align="center">{cat.description}</TableCell>
              <TableCell className={classes.buttons} align="center"> 
                <Button style={{color: 'white'}} size="small" onClick={() => setEdit(true)} > 
                      <EditCat getCategory={getCategory} cambio={onChange} cat={cat} setNewCategory={setNewCategory}  newCategory={newCategory} edit={edit} setEdit={setEdit} />
                </Button> 
                <Button style={{color: '#303030'}} size="small" onClick={() => deleteCategories(cat.id)}> <DeleteIcon /></Button>   
                
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


       // Axios(`http://localhost:3001/products/category/${nombre}`)
        // .then(r => {
        //     setNewCategory({
        //       id: r.data.id,
        //       name: r.data.name,
        //       description: r.data.description
        //     })
        //     if(!r.data.id){
        //       setEdit(false)
        //     } else {
        //       setEdit(true)
        //     }
        // })