import React, {useEffect} from 'react';
import {getUser} from '../../actions/Profile';
import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import Container from './profileStyle/Container'
import { Typography } from '@material-ui/core';

const Profile = () =>{

   const dispatch = useDispatch();
    const info = useSelector(state => state.Profile.userInfo);
    const id = useParams();
    console.log(id.id)
    useEffect(() => {
        dispatch(getUser(id.id))
      },[])

    return (
        <Container>
    
        </Container>
    )
}

export default Profile;
