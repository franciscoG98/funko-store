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
    username: yup
      .string()
      .required('Username is required'),
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
     .required("Address is a required field"),
     password: yup
     .string()
     .min(7)
     .required("Password is a required field"),
    passwordConfirmation: yup
    .string()
       .oneOf([yup.ref('password'), null], 'Passwords must match')
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
       resolver: yupResolver(schema),
      });


      const onSubmit = (data, e) =>{  
       dispatch(addUser(data));
       e.target.reset();
   }
 
    return(
        <MainContainer >
        <Header/> 
        <Form onSubmit = {handleSubmit(onSubmit)}>
            <Input 
            ref = {register}
            name = 'username'
            type = 'text'
            placeholder = 'Your username'
            label = 'Username'
            error = {!!errors.username}
            helperText = {errors?.username?.message}
            required
            />
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
            required
            />
            <Input
            ref = {register}
            name = 'password'
            type = 'password'
            placeholder = 'Write your password'
            label = 'Password'
            error={!!errors.password}
            helperText={errors?.password?.message}
            required
            />
            <Input
            ref = {register}
            name = 'passwordConfirmation'
            type = 'password'
            label = 'Repeat Password'
            placeholder = 'Repeat your password'
            error = {!!errors.password}
            helperText = {errors?.passwordConfirmation?.message}
            />
        
            <Button style={{color: 'white', backgroundColor: '#303030'}}>Sign Up</Button>
 
        </Form>
       </MainContainer>
    )
}
