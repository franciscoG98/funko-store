// import React, {useState} from 'react';
import React from 'react';

import { FormGroup, TextField, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'black',
      height: 'auto',
      width:350,
      margin: 'auto',
      justifyContent: 'space-between',
      padding: '0 30px',
      flexDirection: 'column',
      display: 'flex',
    },
    formControl: {
        minWidth: 120,
    },
});

const CRUDCat = () => {
    // const [value, setValue] = useState("Marvel");
    const classes = useStyles();

    // const handleChange = (el)=>{
    //     setValue(el.target.value)
        
    // };
    return (

        <FormGroup>
        <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic1" label="Name your Category" />
                <TextField id="standard-basic2" label="Describe your Category" />
                <br/>
                <Button variant="contained" color="primary" onClick={() => { alert('Category Added') }}>
                    Add Category
                </Button>
            </form>
        </FormGroup>
    )
}

export default CRUDCat; 