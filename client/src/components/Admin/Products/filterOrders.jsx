import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { useDispatch } from 'react-redux';
import { filterAdminOrder, getAdminOrders } from '../../../actions/Order';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    opacity: '80%',
    
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  root2: {
    display: 'flex',
    color: 'white',
    '& > *': {
      margin: theme.spacing(0.8),
      color: 'white',
    },    
  },
  buttons: {
    color: 'white',
    
},
  box: {
      backgroundColor: '#202020',
      opacity: '99%',
      width: '300px',
      height: '300px'
  }
}));

export default function SimplePaper() {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
     
      <Paper className={classes.box}>

        <ButtonGroup className= {classes.root2}
            orientation="vertical"
            // color="white"
            aria-label="vertical contained primary button group"
            variant="text"
        >
            <Button onClick= {()=> dispatch(getAdminOrders())} className={classes.buttons}>All</Button>
            <Button onClick= {()=> dispatch(filterAdminOrder('cart'))} className={classes.buttons}>Cart</Button>
            <Button onClick= {()=> dispatch(filterAdminOrder('created'))} className={classes.buttons}>Created</Button>
            <Button onClick= {()=> dispatch(filterAdminOrder('processing'))} className={classes.buttons}>Processing</Button>
            <Button onClick= {()=> dispatch(filterAdminOrder('canceled'))} className={classes.buttons}>Canceled</Button>
            <Button onClick= {()=> dispatch(filterAdminOrder('completed'))} className={classes.buttons}>Completed</Button>
        </ButtonGroup>

      </Paper>
     
    </div>
  );
}