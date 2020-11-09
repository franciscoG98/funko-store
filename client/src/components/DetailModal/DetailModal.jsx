import React from 'react'
import './DetailModalStyle.css';
import Button from '@material-ui/core/Button';


export default function DetailModal({f}) {

    const {name, description, price, imagen, stock} = f;

    return (
        <div>
            <div id='image'>
                <img src={imagen} alt='funko img' />
            </div>
            <div id='info'>
                <h3>{name}</h3>
                <p>{description}</p>
                <p>Stock:{stock > 0 ? <span>Disponible</span> : <span style={{color: "red"}}>No hay stock ura</span>}</p>
                <span>Price: ${price}</span>
                <Button variant="contained" color="primary"> Añadir al Carrito </Button>
            </div>
        </div>
    )
}
