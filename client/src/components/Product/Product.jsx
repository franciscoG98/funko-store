import React from 'react';

import './ProductStyle.jsx';

import Card from '@material-ui/core/Card';
import {CardActionArea, CardActions} from '@material-ui/core/';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Reviews from "../Reviews/Reviews";
import useStyles from './ProductStyle';
  
import { useDispatch } from 'react-redux';
import { UpdateOrderLine } from '../../actions/Order';

// icons
import AddShoppingCartRoundedIcon from '@material-ui/icons/AddShoppingCartRounded';
import OpenInNewRoundedIcon from '@material-ui/icons/OpenInNewRounded';


//modal 
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import DetailModal from '../DetailModal/DetailModal'
import { green } from '@material-ui/core/colors';


const Product = ({f}) => {
  

  const classes = useStyles();

  //estado
  const [open, setOpen] = React.useState(false);
  
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  // fin estado
  f.quantity = 1

  return (
    <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= {f.imagen}
          onClick={() => handleOpen()}
          title={f.name}
        />
        <CardContent>
            <Typography style={{fontFamily: 'Ubuntu', fontSize: '30px', fontWeight: 'light', fontStyle: 'normal'}} gutterBottom variant="h5" component="h2">
                {f.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                <span style={{fontFamily: 'Raleway', fontWeight: "bolder", marginLeft: '1px', fontSize: '15px', color: '#585858'}}> Description: </span> 
                  <span style={{fontFamily: 'Calibri', marginLeft: '1px', fontSize: '15px', color: '#686868'}}>
                    {f.description}
                  </span>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                <span style={{fontFamily: 'Raleway', fontWeight: "bolder  ", marginLeft: '1px', fontSize: '15px', color: '#585858'}}> Price: </span> 
                <span style={{fontFamily: 'Raleway', marginLeft: '1px', fontSize: '13px', color: '#585858', fontWeight: "bolder"}}> $ </span> 
                <span style={{fontFamily: 'Calibri', marginRight: '3px', fontSize: '16px', color: '#585858'}}> {f.price} </span>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {f.stock > 0 ? <span style= {{opacity: '100%', color: 'green', fontFamily:'Calibri', fontSize: '17px'}}>Available</span> : <span style={{color: "red", marginLeft: '1px', fontFamily:'Calibri', fontSize: '17px'}}>No Stock</span>}
            </Typography>
                
            <Reviews />
        </CardContent>
      </CardActionArea>
      <CardActions>
      {f.stock > 0 ? <Button style={{color: '#585858'}} size="small" color="primary" onClick={() =>  dispatch(UpdateOrderLine(f, 1))}>
        <AddShoppingCartRoundedIcon />
          Add To Cart 
        </Button>: null}
        <Button style={{color: '#585858'}} size="small" color="primary" onClick={() => handleOpen()}>
            <OpenInNewRoundedIcon />
            More 
        </Button>

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
              <DetailModal f={f}/>
            </div>
          </Fade>
        </Modal>

      </CardActions>
    </Card>
  );
}

export default Product;