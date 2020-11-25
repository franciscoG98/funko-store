import React from 'react'
import {Link} from 'react-router-dom'
import './DetailModalStyle.css';
import Button from '@material-ui/core/Button';
import Reviews from "../Reviews/Reviews";
import { useDispatch } from 'react-redux';
import { addItem } from '../../actions/Order';
import AddShoppingCartRoundedIcon from '@material-ui/icons/AddShoppingCartRounded';
import Typography from '@material-ui/core/Typography';
import {  UpdateOrderLine } from '../../actions/Order';

export default function DetailModal({f}) {

    const {name, description, price, imagen, stock, id} = f;
    const user = true;
    const dispatch = useDispatch();

    return (
        <div>
            <div id='image'>
                <img src={imagen} alt='funko img' />
            </div>
            <div id='info'>
                {/* <h3>{name}</h3>
                <p>{description}</p>
                <span>Price: ${price}</span>
                <p>Stock:{stock > 5 ? <span>Disponible</span> : <span style={{color: "red"}}>{stock} unidades en stock</span>}</p>
                 */}

                <Typography gutterBottom variant="h5" component="h2">
                    {name}
                </Typography>

                <Typography style= {{fontFamily: 'Calibri', fontSize: '17px', color: '#686868'}} variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
                <br />
                <Typography style= {{fontFamily: 'Calibri', fontSize: '17px', color: '#686868'}}  variant="body2" color="textSecondary" component="p">
                    Stock:{stock > 5 ? <span>Disponible</span> : <span style={{color: "red"}}>{stock} unidades en stock</span>}
                </Typography>
                <br />
                <Typography style= {{fontFamily: 'Calibri', fontSize: '17px', color: '#686868'}} variant="body2" color="textSecondary" component="p">
                    Price: ${price}
                </Typography>
                <br/>

                <br />
                {stock > 0 ? <Button color="primary" onClick={() => dispatch( UpdateOrderLine(f, 1) )}>
                
                <AddShoppingCartRoundedIcon />
                Add To Cart 
                </Button>: null}
                {user ? <Link to={`/${id}/reviews`} style= {{fontSize: '18px', color: 'black'}} >Add Your Review here!</Link> : null} 
               {/* )} */}
            </div>
        </div>
    )
}
