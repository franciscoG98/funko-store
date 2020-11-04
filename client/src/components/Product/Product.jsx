import React from 'react';

import './ProductStyle.jsx';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import useStyles from './ProductStyle';

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

  // fin estado

  return (
    <Card className={classes.root} display='flex'>
      <CardActionArea>
        <CardMedia
          className={classes.media}
        //   image="https://http2.mlstatic.com/D_NQ_NP_891013-MLA43484162083_092020-O.webp"
          image= {f.img}

          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Funko Name: {f.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            bueno aca va a ir una descripcion del funko: {f.description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              price: {f.price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              hay stock: icono
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        <AddShoppingCartRoundedIcon />
        Add To Cart
        </Button>
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