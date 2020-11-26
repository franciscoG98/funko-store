import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


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
      margin: theme.spacing(1.4),
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

  return (
    <div className={classes.root}>
     
      <Paper className={classes.box}>

        <ButtonGroup className= {classes.root2}
            orientation="vertical"
            // color="white"
            aria-label="vertical contained primary button group"
            variant="text"
        >
            <Button className={classes.buttons}>Cart</Button>
            <Button className={classes.buttons}>Created</Button>
            <Button className={classes.buttons}>Processing</Button>
            <Button className={classes.buttons}>Canceled</Button>
            <Button className={classes.buttons}>Completed</Button>
        </ButtonGroup>

      </Paper>
     
    </div>
  );
}