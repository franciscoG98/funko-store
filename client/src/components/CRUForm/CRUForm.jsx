import React, {useState, useEffect} from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
// import CheckboxAvenger from "./checkboxAvenger";
import Axios from "axios";
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import {useSelector} from "react-redux"
// import Checkbox from '@material-ui/core/Checkbox';


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





const CRUForm = ({cambio, product, edit}) => {
    const classes = useStyles();
    
    const [state, setState] = useState([]);
    

    useEffect(() => {
      Axios("http://localhost:3001/products/category")
      .then(r => {
        setState(r.data.categories)
      })
      // eslint-disable-next-line
    }, [])

    
    return (
 
        <div style={{flexDirection: 'column', display: 'flex', width: "100%"}} >
            <TextField fullWidth id="standard-basic1" label="Name your Funko" name="name" value={edit && product.name} onChange={cambio} />
            <TextField id="standard-basic2" label="Describe your funko" name="description" value={edit && product.description}   onChange={cambio} />
            <TextField id="standard-basic2" label="Price your Funko" type="number" name="price" value={edit && product.price}  onChange={cambio} />
            <TextField id="standard-basic3" label="Take a photo of your Funko" name="imagen" value={edit && product.imagen}   onChange={cambio} />
            <TextField id="standard-basic3" label="Stock" name="stock" value={edit && product.stock}  onChange={cambio} />
            <br/>
            <InputLabel htmlFor="uncontrolled-native">Where is your Funko from?</InputLabel>
                <NativeSelect
            onChange={cambio} //la vamos a usar
            name="categoria"
            className={classes.selectEmpty}
            inputProps={{ 'aria-label': 'age' }}
            
            >   
            <option>Selecciona</option>     
              {state.map((p)=>(
           <>
               <option key={p.id}  onChange={cambio} name="categoria" >{ p.name}</option>   
           </>
               ))} 
         </NativeSelect>
        <br/>
        <NativeSelect
            onChange={cambio} //la vamos a usar
            name="categoria2"
            className={classes.selectEmpty}
            inputProps={{ 'aria-label': 'age' }}        
            >       
        {state.map((p)=>(
           <>
               <option key={p.id + 1 }  onChange={cambio} name="categoria2" >{ p.name}</option>   
           </>
        ))} 
         </NativeSelect>
            <br/>
        </div>
    )
}

export default CRUForm; 

  /* <NativeSelect
                onChange={cambio} //la vamos a usar
                name="categoria"
                className={classes.selectEmpty}
                inputProps={{ 'aria-label': 'age' }}
                
                >
                <option onChange={cambio} name="categoria" >{edit ? product.categoria : "Chosee"}</option>
                <option onChange={cambio} name="categoria" >Marvel</option>
                <option onChange={cambio} name="categoria" >DC Comics</option>
                <option onChange={cambio} name="categoria" >Avengers</option>
                <option onChange={cambio} name="categoria" >X-Men</option>
            </NativeSelect> */


            // 

            //   <FormControlLabel
            //   key={p.id + 5}              
            //   control={<Checkbox  value={p.name}  name="categoria2" onChange={cambio} />}
            //   label={p.name}



        //     <NativeSelect
        //     onChange={cambio} //la vamos a usar
        //     name="categoria"
        //     className={classes.selectEmpty}
        //     inputProps={{ 'aria-label': 'age' }}
            
        //     >       
        // {state.map((p)=>(
        //    <>
        //        <option key={p.id}  onChange={cambio} name="categoria" >{ p.name}</option>   
        //    </>
        // ))} 
        //  </NativeSelect>
        // <br/>
        // <NativeSelect
        //     onChange={cambio} //la vamos a usar
        //     name="categoria2"
        //     className={classes.selectEmpty}
        //     inputProps={{ 'aria-label': 'age' }}        
        //     >       
        // {state.map((p)=>(
        //    <>
        //        <option key={p.id + 1 }  onChange={cambio} name="categoria2" >{ p.name}</option>   
        //    </>
        // ))} 
        //  </NativeSelect>