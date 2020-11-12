import React from 'react';

import './ProductStyle.jsx';

import Card from '@material-ui/core/Card';
import {CardActionArea, CardActions} from '@material-ui/core/';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import useStyles from './ProductStyle';
  
import { useDispatch } from 'react-redux';
import { addItem } from '../../actions/Order';

// icons
import AddShoppingCartRoundedIcon from '@material-ui/icons/AddShoppingCartRounded';
import OpenInNewRoundedIcon from '@material-ui/icons/OpenInNewRounded';


//modal 
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import DetailModal from '../DetailModal/DetailModal'


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
          <Typography gutterBottom variant="h5" component="h2">
            {f.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           <span style={{fontWeight: "bold"}}> Description: </span> {f.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <span style={{fontWeight: "bold"}}> Price: </span> ${f.price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {f.stock > 0 ? <span>Diponible</span> : <span style={{color: "red"}}>No hay unidades disponibles</span>}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      {f.stock > 0 ? <Button size="small" color="primary" onClick={() => dispatch( addItem(f.id) )}>
        <AddShoppingCartRoundedIcon />
          Add To Cart 
        </Button>: null}
        <Button size="small" color="primary" onClick={() => handleOpen()}>
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