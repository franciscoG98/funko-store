//renderizar un componente a traves de un select
//o sea:  si selecciono avengers que se renderize un grupo de checkboxes con "avengers", "x-men", etc
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

//const marvel = ["Avenger", "x-men", "Fantastic Four"];

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
  }));


export default function CheckboxesAvenger() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        Avengers: false,
        Xmen: false,
        Fantastic4: false,
    }
    );

const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    };
    const { Avengers, Xmen, Fantastic4 } = state;
    //const error = [Avengers, Xmen, Fantastic4].filter((v) => v).length < 1;
  
    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Choose Category</FormLabel>
          
            <FormControlLabel
              control={<Checkbox checked={Avengers} onChange={handleChange} name="Avengers" />}
              label="Avengers"
            />
            <FormControlLabel
              control={<Checkbox checked={Xmen} onChange={handleChange} name="Xmen" />}
              label="X-men"
            />
            <FormControlLabel
              control={<Checkbox checked={Fantastic4} onChange={handleChange} name="Fantastic4" />}
              label="Fantastic Four"
            />
          
          <FormHelperText>Be careful</FormHelperText>
        </FormControl>
        
      </div>
    );
  }



