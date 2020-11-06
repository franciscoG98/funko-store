import React, {useState} from 'react';
import { FormGroup, TextField, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import CheckboxAvenger from "./checkboxAvenger"

const useStyles = makeStyles({
    root: {
    //   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
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

        <FormGroup>
        <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Name your Funko" />
                <TextField id="standard-basic" label="Describe your funko" />
                <TextField id="standard-basic" label="Price your Funko" type="number"/>
                <TextField id="standard-basic" label="Take a photo of your Funko" />
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
                <Button variant="contained" color="primary" onClick={() => { alert('andò') }}>
                    Upload your Funko!
                </Button>
            </form>
        </FormGroup>
    )
}

export default CRUForm; 

