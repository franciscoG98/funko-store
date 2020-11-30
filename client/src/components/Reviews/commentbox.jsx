import React /*, {useEffect}*/ from 'react'
import {useForm} from 'react-hook-form'
import Title from './styles/title'
import MainContainer from '../User/components/mainContainer'
import Form from '../User/components/formon'
import Button from '../User/components/button'
import Input from '../User/components/input'
import {addReviews} from "../../actions/Reviews";
import {useDispatch /*, useSelector*/} from "react-redux";
import {Link, useParams} from "react-router-dom"
import { Typography } from '@material-ui/core'
import {loadSession} from "../../store/saveToSessionStorage/sessionStorage"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({  
  
    adds: {
      color: '#585858',
      fontFamily: 'Philosopher', 
      fontWeight: 'bold', 
      
      borderRadius: '30px',
      transition: '0.8s',
      paddingBottom: '10px',
      "&:hover": {      
        color: 'white',     
        transition: '0.8s',
        backgroundColor: '#484848',            
      },  
    },
    adds3: {
        color: '#585858',
        fontFamily: 'Philosopher', 
        fontWeight: 'bold', 
        marginTop: '10px',
        borderRadius: '30px',
        transition: '0.8s',
        paddingBottom: '10px',
        "&:hover": {      
          color: 'white',     
          transition: '0.8s',
          backgroundColor: '#484848',            
        },  
      },
    adds2: {
      color: '#585858',
      fontFamily: 'Philosopher', 
      fontWeight: 'bold', 
      marginLeft: '30px',
      borderRadius: '30px',
      transition: '0.8s',
      textDecoration: 'none',
      marginRight: '18px',
      "&:hover": {      
        color: 'white',     
        transition: '0.8s',
        backgroundColor: '#484848',            
      },  
    },
  });
  


export default function CommentBox(){

    const dispatch = useDispatch();
    const classes = useStyles();
    const id = useParams();
    const {handleSubmit/*, errors*/, register} = useForm({
    })
    // const userId = 1;
    // const userId = useSelector(state => state.Login.login.user.id)
    const userData = loadSession();
    const userId = userData && userData.id; 

  
    const onSubmit=(data, e)=>{
    dispatch(addReviews(data, id.id))
    e.target.reset();
}

return (
    <div>
    <MainContainer style={{height: '400px'}} >
    <Title/>
    <Form onSubmit = {handleSubmit(onSubmit)}>
        <Input ref={register} name="userId" value={userId} style={{display: "none"}} />
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
        <Button className={classes.adds} >Submit</Button>
    </Form>
    
    <Button className={classes.adds3} >
        <Link to={`/allreviews/${id.id}`} className={classes.adds2} >View all Reviews</Link>
    </Button>
    </MainContainer>
    </div>
)

}

