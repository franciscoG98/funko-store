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

const CRUForm = () => {
    const [value, setValue] = useState("Marvel");
    const classes = useStyles();

    const handleChange = (el)=>{
        setValue(el.target.value)
        
    };
    return (

        <div style={{flexDirection: 'column', display: 'flex'}} >
            <TextField id="standard-basic1" label="Name your Funko"/>
            <TextField id="standard-basic2" label="Describe your funko" />
            <TextField id="standard-basic2" label="Price your Funko" type="number"/>
            <TextField id="standard-basic3" label="Take a photo of your Funko" />
            <br/>
            <InputLabel htmlFor="uncontrolled-native">Where is your Funko from?</InputLabel>
            <NativeSelect
                onChange={handleChange} //la vamos a usar
                name="comic"
                className={classes.selectEmpty}
                inputProps={{ 'aria-label': 'age' }}
                >
                <option value="">Choose</option>
                <option value='Marvel'>Marvel</option>
                <option value='DC'>DC</option>
            </NativeSelect>
            <br/>
            <CheckboxAvenger  props={value === "Marvel" ? marvel : dc}/>
            <br/>
        </div>
    )
}

export default CRUForm; 

