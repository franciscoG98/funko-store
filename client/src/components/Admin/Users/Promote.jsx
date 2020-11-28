import React, {useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers, promoteUser } from '../../../actions/User';

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
  const users = useSelector(state => state.User.data);
  console.log(users);

  useEffect(()=>{
    dispatch( getUsers() )
    // eslint-disable-next-line
  },[])

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
                <Button onClick={() => dispatch( promoteUser(user.id) )}>
                  <PersonAddIcon/>  
                </Button>                
              </StyledTableCell>

              <StyledTableCell component="th" scope="row">
                <Button>
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
