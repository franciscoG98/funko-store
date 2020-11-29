import React from 'react'
import {Link} from 'react-router-dom'
import './DetailModalStyle.css';
import Button from '@material-ui/core/Button';
import Reviews from "../Reviews/Reviews";
import { useDispatch } from 'react-redux';
import { addItem } from '../../actions/Order';
import AddShoppingCartRoundedIcon from '@material-ui/icons/AddShoppingCartRounded';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import Typography from '@material-ui/core/Typography';
import {  UpdateOrderLine } from '../../actions/Order';

export default function DetailModal({f}) {

    const {name, description, price, imagen, stock, id} = f;
    const user = true;
    const dispatch = useDispatch();

    return (
        <div  >
            <div id='image'>
                <img src={imagen} alt='funko img' />
            </div>
            <div id='info'>
                {/* <h3>{name}</h3>
                <p>{description}</p>
                <span>Price: ${price}</span>
                <p>Stock:{stock > 5 ? <span>Disponible</span> : <span style={{color: "red"}}>{stock} unidades en stock</span>}</p>
                 */}

                <Typography style={{ fontFamily: 'Ubuntu', fontSize: '30px', fontWeight: 'light', fontStyle: 'normal', textAlign: 'center' }}  gutterBottom variant="h5" component="h2">
                    {name}
                </Typography>

                <Typography style= {{fontFamily: 'Ubuntu', fontSize: '17px', color: '#606060', textAlign: 'center', marginTop: '20px', fontWeight: 'bold'}} variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
                <br />
                
                <Typography style= {{fontFamily: 'Texturina', fontSize: '35px', color: '#585858', fontWeight: 'bolder', textAlign: 'center', marginTop: '17px'}} variant="body2" color="textSecondary" component="p">
                    ${price}
                </Typography>
                <br/>
                <Typography style= {{fontFamily: 'Trade Winds', fontSize: '17px', color: '#606060', textAlign: 'center', marginTop: '30px', color: 'green'}}  variant="body2" color="textSecondary" component="p">
                    {stock > 5 ? <span>Available</span> : <span style={{color: "red"}}>{stock} stock unities </span>}
                </Typography>
                <br />

                <br />
                {stock > 0 ? <Button style={{color: 'black', marginTop: '26px', fontFamily: 'Philosopher'}} onClick={() => dispatch( UpdateOrderLine(f, 1) )}>
                
                <LocalMallIcon />
                Add To Cart 
                </Button>: null}

                <Button style={{color: 'black', marginTop: '26px', fontFamily: 'Philosopher'}} >
                    {user ? <Link to={`/${id}/reviews`} style= {{/* fontWeight: 'bold', */ fontFamily: 'Philosopher' ,fontSize: '16px', color: 'black', textDecoration: 'none'}} >
                                Add Your Review here
                            !</Link> : null} 
                </Button>
               {/* )} */}
            </div>
        </div>
    )
}
