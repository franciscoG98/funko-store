import React, {useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers, promoteUser, deleteUser } from '../../../actions/User';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Button from '@material-ui/core/Button';
import { Switch } from '@material-ui/core';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

const MySwal = withReactContent(Swal)

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
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
    minWidth: 500,
    
  },
  container: {
    width: '55%',
    marginLeft: 'auto',
    marginRight: 'auto',
    opacity: '90%',
  }
});



function CustomizedTables() {

  const classes = useStyles();
  const dispatch = useDispatch();
  const users1 = useSelector(state => state.User.data);
  
  const users = users1.sort(function (a, b) {
    if (a.id > b.id) {
      return 1;
    }
    if (a.id < b.id) {
      return -1;
    }
    return 0;
  });
  

  useEffect(()=>{
    dispatch( getUsers() )
    
  },[])

  async function promote(id) {    
    await dispatch( promoteUser(id) );  
    dispatch(getUsers());
  }

  async function wipe(id) {
    MySwal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then( async (result) => {
      if (result.isConfirmed) {
        
        await dispatch( deleteUser(id) );
        
        MySwal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
    dispatch(getUsers());    
  }



  return (
    <TableContainer className={classes.container} component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell  style={{backgroundColor: '#202020', textAlign: 'left'}}>Username</StyledTableCell>
            <StyledTableCell  style={{backgroundColor: '#202020', textAlign: 'left'}}>Full Name</StyledTableCell>
            <StyledTableCell  style={{backgroundColor: '#202020', textAlign: 'left'}}>Email</StyledTableCell>
            <StyledTableCell  style={{backgroundColor: '#202020', textAlign: 'left'}}>Admin</StyledTableCell>
            <StyledTableCell  style={{backgroundColor: '#202020', textAlign: 'left'}}></StyledTableCell>
            <StyledTableCell  style={{backgroundColor: '#202020', textAlign: 'left'}}></StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <StyledTableRow key={user.id}>              
              <StyledTableCell component="th" scope="row">
                {user.username}
              </StyledTableCell>

              <StyledTableCell component="th" scope="row">
                {user.fullname}
              </StyledTableCell>

              <StyledTableCell component="th" scope="row">
                {user.email}
              </StyledTableCell>

              <StyledTableCell component="th" scope="row">
                {user.isAdmin ? <p style={{marginLeft: '10px'}}> Yes </p> : <p style={{marginLeft: '10px'}}> No </p>}                                             
              </StyledTableCell>

              <StyledTableCell component="th" scope="row">
                <Button onClick={() => promote(user.id)}>
                  <Switch checked={ user.isAdmin ? true : false} />  
                </Button>                
              </StyledTableCell>

              <StyledTableCell component="th" scope="row">
                <Button onClick={()=> wipe(user.id) } >
                  <DeleteIcon/> 
                </Button>                
              </StyledTableCell>
             
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomizedTables;
