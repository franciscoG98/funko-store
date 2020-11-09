//renderizar un componente a traves de un select
//o sea:  si selecciono avengers que se renderize un grupo de checkboxes con "avengers", "x-men", etc
import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
// import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Axios from 'axios';

//const marvel = ["Avenger", "x-men", "Fantastic Four"];

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
  }));


export default function CheckboxAvenger({cambio}) {
    const classes = useStyles();
    const [state, setState] = useState([]);

    useEffect(() => {
      Axios("http://localhost:3001/products/category")
      .then(r => {
        setState(r.data.categories)
      })
    }, [])



    
  
    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Choose Category</FormLabel>
            {state.map((p)=>(
              <FormControlLabel
              key={p.id} 
              control={<Checkbox  name="categoria" />}
              label={p.name}
            />
            ))}
        
        </FormControl>
        
      </div>
    );
  }



