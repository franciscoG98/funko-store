import React, { useState /*, useSelector*/ } from 'react';

import './ProductStyle.jsx';
import './Product.css';

import Card from '@material-ui/core/Card';
import { CardActionArea, CardActions } from '@material-ui/core/';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';


import { useDispatch } from 'react-redux';
import { UpdateOrderLine, saveToGuestCart/*, updateGuestCart*/ } from '../../actions/Order';
import {loadSession} from "../../store/saveToSessionStorage/sessionStorage"
// icons
import LocalMallIcon from '@material-ui/icons/LocalMall';
import MoreIcon from '@material-ui/icons/More';

//modal 
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import DetailModal from '../DetailModal/DetailModal'

const useStyles = makeStyles({
  root: {
    borderRadius: '25% !IMPORTANT',
    width: '300px',    
    margin: '55px',
    padding: '10px',    
    borderBlockStyle: 'solid',       
    border: '13px',
    borderBlockColor: '#484848',
    transition: '0.5s',
    "&:hover": {      
      transform: 'scale(1.09)',
      transition: 'transform 0.5s',            
    }    
  },  
  media: {
    height: 130,
    width: 140,
    transition: '0.5s',
    "&:hover": {
      transform: 'scale(1.15)',
      transition: 'transform 0.5s',
      filter: 'brightness(128%)',
    }
  },  
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '0 auto',
  },
  paper: {
    backgroundColor: 'white',
    padding: 50,
    border: 'none',
    marginLeft: '0 auto',
  },

  adds: {
    color: '#585858',
    fontFamily: 'Philosopher', 
    fontWeight: 'bold', 
    marginLeft: '30px',
    borderRadius: '30px',
    transition: '0.8s',
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
    "&:hover": {      
      color: 'white',     
      transition: '0.8s',
      backgroundColor: '#484848',            
    },  
  },
});

const Product = ({ f }) => {


  const classes = useStyles();

  //estado
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

 const user = loadSession();
 
 var userId = 0
 
 if (user){userId = user.id}

  const setToLocalStorage = (p, id) => {
    if (id) {
      //p.quantity = 1
      dispatch(UpdateOrderLine(p, id))
    }
    else {
      dispatch(saveToGuestCart(p))
    }

  }
  //---------------------------------------------------------------------------------

  const dispatch = useDispatch();

  // fin estado
  f.quantity = 1

  return (
    <Card className={classes.root} >
      <CardActionArea className= 'cardsis' >
        <CardMedia          
          className={classes.media}
          image={f.imagen}
          style={{display: 'block', margin: '0 auto', height: '135px', width: '50%'}}
          // onClick={() => handleOpen()}
          // title={f.name}
        />
        <CardContent>
          <Typography style={{ fontFamily: 'Ubuntu', fontSize: '30px', fontWeight: 'light', fontStyle: 'normal', textAlign: 'center' }} gutterBottom variant="h5" component="h2">
            {f.name}
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            <span style={{ fontFamily: 'Raleway', fontWeight: "bolder", marginLeft: '1px', fontSize: '15px', color: '#585858' }}> Description: </span>
            <span style={{ fontFamily: 'Calibri', marginLeft: '1px', fontSize: '15px', color: '#686868' }}>
              {f.description}
            </span>
          </Typography> */}
          <Typography variant="body2" color="textSecondary" component="p">
            {/* <span style={{ fontFamily: 'Raleway', fontWeight: "bolder  ", marginLeft: '1px', fontSize: '15px', color: '#585858' }}> Price: </span> */}
            <div style={{textAlign: 'center', marginTop: '-18px'}}>
              <span style={{ fontFamily: 'Texturina', marginLeft: '1px', fontSize: '26px', color: '#585858', fontWeight: "bolder" }}> $ </span>
              <span style={{ fontFamily: 'Texturina', fontSize: '40px', color: '#585858', fontWeight: 'bolder'}}> {f.price} </span>
            </div>            
          </Typography>
          <Typography style= {{ textAlign: 'center' }} variant="body2" color="textSecondary" component="p">
            
          </Typography>
          <Typography style= {{ textAlign: 'center', marginTop: '20px' }} variant="body2" color="textSecondary" component="p">
            {f.stock > 0 ? <span style={{ opacity: '100%', color: 'green', fontFamily: 'Trade Winds', fontSize: '16px'}}>Available</span> : <span style={{ color: "red", marginLeft: '1px', fontFamily: 'Trade Winds', fontSize: '16px' }}>No Stock</span>}
          </Typography>

        </CardContent>
      </CardActionArea>
      <CardActions style= {{alignItems: 'baseline'}}>

      <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <DetailModal f={f} />
            </div>
          </Fade>
        </Modal>
        
        {f.stock > 0 ? <Button className={classes.adds2} size="small" color="primary" onClick={() => setToLocalStorage(f, userId)}>
          <LocalMallIcon style={{paddingRight: '4px'}} />
          Add To Cart
        </Button> : null}
        <Button className={classes.adds2} size="small" color="primary" onClick={() => handleOpen()}>
          <MoreIcon style={{paddingRight: '5px'}} />
            More
        </Button>
        

       

      </CardActions>
    </Card>
  );
}

export default Product;