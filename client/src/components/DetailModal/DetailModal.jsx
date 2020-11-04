import React from 'react'
import './DetailModalStyle.css';

export default function DetailModal({f}) {

    const {name, description, price, img} = f;

    return (
        <div>
            <div id='image'>
                <img src={img} alt='funko img' />
            </div>
            <div id='info'>
                <h3>{name}</h3>
                <p>{description}</p>
                <span>${price}</span>
            </div>
        </div>
    )
}
