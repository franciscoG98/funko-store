import React, {useState} from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import CheckboxAvenger from "./checkboxAvenger";

const useStyles = makeStyles({
    root: {
    //   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(64, 81, 181, .3)',
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
    /* checkbox : {
        display: "none"
    } */
});


const marvel = ["Avenger", "X-men", "Fantastic Four"];
const dc = ["Justice League", "Legend", "Villain"];

const CRUForm = ({cambio}) => {
    const classes = useStyles();
    
    return (

        <div style={{flexDirection: 'column', display: 'flex'}} >
            <TextField id="standard-basic1" label="Name your Funko" name="name"  onChange={cambio} />
            <TextField id="standard-basic2" label="Describe your funko" name="description"   onChange={cambio} />
            <TextField id="standard-basic2" label="Price your Funko" type="number" name="price"  onChange={cambio} />
            <TextField id="standard-basic3" label="Take a photo of your Funko" name="imagen"   onChange={cambio} />
            <TextField id="standard-basic3" label="Stock" name="stock"  onChange={cambio} />
            <br/>
            <InputLabel htmlFor="uncontrolled-native">Where is your Funko from?</InputLabel>
            <NativeSelect
                onChange={cambio} //la vamos a usar
                name="categoria"
                className={classes.selectEmpty}
                inputProps={{ 'aria-label': 'age' }}
                >
                <option onChange={cambio} name="categoria" >Choose</option>
                <option onChange={cambio} name="categoria" >Marvel</option>
                <option onChange={cambio} name="categoria" >DC</option>
            </NativeSelect>
            <br/>
            
            <br/>
        </div>
    )
}

export default CRUForm; 

