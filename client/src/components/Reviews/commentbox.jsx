import React , {useEffect} from 'react'
import {useForm} from 'react-hook-form'
import Title from './styles/title'
import MainContainer from '../User/components/mainContainer'
import Form from '../User/components/formon'
import Button from '../User/components/button'
import Input from '../User/components/input'
import {addReviews} from "../../actions/Reviews";
import {useDispatch} from "react-redux";
import {Link, useParams} from "react-router-dom"
import { Typography } from '@material-ui/core'

export default function CommentBox(){

    const dispatch = useDispatch();
    const id = useParams();
    const {handleSubmit, errors, register} = useForm({
    })

    
  

    const onSubmit=(data, e)=>{
    console.log(data)
    dispatch(addReviews(data, id.id))
    e.target.reset();
}

return (
    <div>
    <MainContainer>
    <Title/>
    <Form onSubmit = {handleSubmit(onSubmit)}>
        <Typography>Rate:</Typography>
        <Input
        ref = {register}
        style = {{width:'70px'}}
        name = 'qualification'
        type = 'number'
        />
        <Input
        ref = {register}
        name = 'description'
        type = 'textarea'
        placeholder='Leave your review here!'
        label = 'Leave a Comment'
        />
        <Button>Submit</Button>
    </Form>
        <Link to={`/allreviews/${id.id}`}>View all Reviews</Link>
    </MainContainer>
    </div>
)

}

