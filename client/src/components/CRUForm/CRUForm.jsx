import React from 'react';
import { FormGroup, TextField, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';


const useStyles = makeStyles({
    root: {
    //   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
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
    }
});

const CRUForm = () => {

    const classes = useStyles();

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
                    // onChange={handleChange} la vamos a usar
                    name="comic"
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'age' }}
                    >
                    <option value="">None</option>
                    <option value='Marvel'>Marvel</option>
                    <option value='DC'>DC</option>
               </NativeSelect>
                <br/>
                <br/>
                <Button variant="contained" color="primary" onClick={() => { alert('andò') }}>
                    Upload your Funko!
                </Button>
            </form>
        </FormGroup>
    )
}

export default CRUForm; 

