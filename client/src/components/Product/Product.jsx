import React from 'react';

import './Product.css';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// icons
import AddShoppingCartRoundedIcon from '@material-ui/icons/AddShoppingCartRounded';
import OpenInNewRoundedIcon from '@material-ui/icons/OpenInNewRounded';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


const Product = ({f}) => {


  const classes = useStyles();

  return (
    <Card className={classes.root}>
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
        <Button size="small" color="primary">
            <OpenInNewRoundedIcon />
            More
        </Button>

      </CardActions>
    </Card>
  );
}

export default Product;