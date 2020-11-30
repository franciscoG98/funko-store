import React, {useEffect} from 'react';
import {getUser} from '../../actions/Profile';
import {useSelector, useDispatch} from 'react-redux'
import Container from './profileStyle/Container'
import { Typography } from '@material-ui/core';
import { loadSession } from './../../store/saveToSessionStorage/sessionStorage';
import Grid from '@material-ui/core/Grid';
import Avatar from './profileStyle/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
    padding: theme.spacing(2),
    color: 'black',
    fontFamily: 'trade winds',
    background: '#DAE7EF',
  },
}));

const Profile = () =>{

  const dispatch = useDispatch();
  const info = useSelector(state => state.Profile.userInfo);
  const userInfo = loadSession();
  const userInfoId = userInfo.id
  const orders = info.data.orders
  const classes = useStyles();
  useEffect(() => {
    dispatch(getUser(userInfoId))
  }, [])


    return (
        <Container>
        <Grid container spacing = {3}>

          <Grid item xs = {12}>
           <Avatar/>
          </Grid>

          <Grid item xs = {12}>
         <Typography variant= 'h4' style = {{textAlign:'center', fontFamily: 'texturina'}}>
           {userInfo.username}
           </Typography>
          </Grid>

          <Grid item xs = {12}>
           <Paper className = {classes.paper}>
             Profile Information
             <br/><br/>
             <Typography variant ='p' style={{textAlign:'center', fontFamily: 'texturina'}}>
             <b>Full Name:</b> {userInfo.fullname} || <b>E-mail:</b> {userInfo.email} || <b>Contact Number:</b> {userInfo.phone}
             <br/>
           </Typography>
           </Paper>
           </Grid>

           <Grid item xs = {12}>
           <Paper className = {classes.paper}>
             Your Products
             <br/><br/>
             {
              (!orders) ? <p>charging...</p>:
             orders.map(i => (
               <Typography key = {i.id} variant ='p' style={{textAlign:'center', fontFamily: 'texturina'}}>
                 <b>Product Id: </b>{i.id}
                 <br/>
                 <b>Total: </b>{i.total}
                 <br/>
                 <b>State: </b>{i.state}
                 <br/><br/>
               </Typography>
             )) 
             }
           </Paper>
           </Grid>
        </Grid>
        <br/>
        <br/>
        </Container>
    )
}

export default Profile;
