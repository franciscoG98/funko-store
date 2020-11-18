import React from 'react';
import {useForm} from 'react-hook-form';
import Header from './components/haeder';
import MainContainer from './components/mainContainer'
import Form from './components/formon'
import Input from './components/input'
import Button from './components/button'
import { yupResolver } from '@hookform/resolvers/yup';
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import * as yup from 'yup'
import {useData} from './components/datacont'//borrar la porqueria esta.
import useStyles from './components/formStyles';

//cosas que seguramente van a tener que importar npm install @hookform/resolver, npm add yup libphonenumber-js
//tengo que agregar Redux para almacenar el estado global, hacer las action y los reducers
//por ahora hay una carpeta mentirosa manejando los estados para que funque la demo.
//index.js esta modificado un poquitin, hay que borrar despues.


const schema = yup.object().shape({
    fullname: yup
      .string()
      .matches(/^([^0-9]*)$/, "Full name should not contain numbers")
      .required("Full name is a required field"),
      email: yup
      .string()
      .email("Email should have correct format")
      .required("Email is a required field"),
     // phoneNumber: yup
     //.string()
    //.required('Phone Number is a required field')
  });
  

  const normalizePhoneNumber = (value) => {
    const phoneNumber = parsePhoneNumberFromString(value)
    if(!phoneNumber){
      return value
    }
  
    return (
      phoneNumber.formatInternational() 
    );
  };
  
//Me falta agregarle el codigo de pais. Todavia no pude hacer que los campos del telefono funcionen como quiero
//Me reniega cuando le pongo Regex y me saltan carteles de que es un campo requerido inclusive cuando lo completo.

export default function Register(){

   const classes = useStyles();

   const {setValues, data} = useData();

   const {register, watch, handleSubmit, errors} = useForm({
       defaultValues: {
           fullname: data.fullname, 
           email: data.email,
           phoneNumber: data.phone,
           address: data.address
        },
       mode: "onBlur",
       resolver: yupResolver(schema)
   });

   const hasPhone = watch('hasPhone')
   
   const onSubmit = (data)=>{
       console.log(data)
       setValues(data);
   }

    return(
        <MainContainer className={classes.todo}>
        <Header/> 
        <Form onSubmit = {handleSubmit(onSubmit)}>
            <Input 
            ref = {register} 
            name='fullname' 
            type= 'text'
            placeholder='Your first and last name'
            label = 'Full Name'
            error={!!errors.fullname}
            helperText={errors?.fullname?.message}
            required
            />
            <Input
            ref = {register}
            name ='email'
            type='email'
            placeholder='Your e-mail address'
            label='e-mail'
            error={!!errors.email}
            helperText={errors?.email?.message}
            required
            />
            <Input
            ref = {register}
            id = 'phoneNumber'
            type = 'tel'
            label = 'Phone Number'
            onChange = {e => e.target.value = normalizePhoneNumber(e.target.value)}
            //error={!!errors.phoneNumber}
            //helperText={errors?.phoneNumber?.message}
            required
            />
            <Input
            ref = {register}
            name ='address'
            type = 'address'
            placeholder = 'eg: (postal code) address'
            label= 'Address'
            />
        
            <Button onClick={onSubmit}>Sign Up</Button>

        </Form>
       </MainContainer>
    )
}