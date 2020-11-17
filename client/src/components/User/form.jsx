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
import {useDispatch} from 'react-redux'
import { addUser } from '../../actions/User'
 
 
const schema = yup.object().shape({
    fullname: yup
      .string()
      .matches(/^([^0-9]*)$/, "Full name should not contain numbers")
      .required("Full name is a required field"),
      email: yup
      .string()
      .email("Email should have correct format")
      .required("Email is a required field"),
     phone: yup
     .number()
     .typeError("That doesn't look like a phone number")
     .positive("A phone number can't start with a minus")
     .integer("A phone number can't include a decimal point")
     .min(8)
     .required('A phone number is required'),
     address: yup
     .string()
     .required("Address is a required field")
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
  
export default function Register(){
   
   const dispatch = useDispatch();
  
   const {register, handleSubmit, errors} = useForm({
       mode: "onBlur",
       resolver: yupResolver(schema)
      });
 
   const onSubmit = (data) =>{  
       dispatch(addUser(data));
   }
 
    return(
        <MainContainer>
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
            name = 'phone'
            type = 'tel'
            label = 'Phone Number'
            onChange = {e => e.target.value = normalizePhoneNumber(e.target.value)}
            error={!!errors.phone}
            helperText={errors?.phone?.message}
            required
            />
            <Input
            ref = {register}
            name ='address'
            type = 'address'
            placeholder = 'eg: (postal code) address'
            label= 'Address'
            error={!!errors.address}
            required
            />
        
            <Button>Sign Up</Button>
 
        </Form>
       </MainContainer>
    )
}
