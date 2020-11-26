import React, {useEffect} from 'react';
import {getUser} from '../../actions/Profile';
import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import Container from './profileStyle/Container'
import { Typography } from '@material-ui/core';

const Profile = () =>{

   const dispatch = useDispatch();
    const info = useSelector(state => state.Profile.userInfo);
    console.log(info)
    const id = useParams();
    useEffect(() => {
        dispatch(getUser(1))
      },[])

    return (
        <Container>

        </Container>
    )
}

export default Profile;
