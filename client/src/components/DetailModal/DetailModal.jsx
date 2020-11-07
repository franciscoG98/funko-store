import React from 'react'
import './DetailModalStyle.css';

export default function DetailModal({f}) {

    const {name, description, price, imagen} = f;

    return (
        <div>
            <div id='image'>
                <img src={imagen} alt='funko img' />
            </div>
            <div id='info'>
                <h3>{name}</h3>
                <p>{description}</p>
                <span>${price}</span>
            </div>
        </div>
    )
}
