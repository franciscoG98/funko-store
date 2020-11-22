import React from 'react'
import {useForm} from 'react-hook-form'
import Reviews from './Reviews'
import Title from './styles/title'
import MainContainer from '../User/components/mainContainer'
import Form from '../User/components/formon'
import Button from '../User/components/button'
import Input from '../User/components/input'

export default function CommentBox(){

const {handleSubmit, errors} = useForm({
})

const onSubmit=(data)=>{
    console.log(data)
}

return (
    <MainContainer>
    <Title/>
    <Reviews/>
    <Form onSubmit = {handleSubmit(onSubmit)}>
        <Input
        style = {{width:'70px'}}
        name = 'rate'
        label = 'Rate'
        type = 'number'
        />
        <Input
        name = 'review'
        type = 'textarea'
        placeholder='Leave your review here!'
        label = 'Leave a Comment'
        />
        <Button>Submit</Button>
    </Form>
    </MainContainer>
)

}