import React from 'react';
import './CheckoutProduct.css';
import {useStateValue } from '../../StateProvider';

function CheckoutProduct({id, type, img, price, rating, text}) {
    const [ , dispatch] = useStateValue();
    const RemoveFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }
    return (
        <div className="checkoutProduct">
            <img src={img} className="checkoutImg" alt={img} />
            <div className="checkoutProduct_info">
                <h3>{text}</h3>
                <p>{type}</p>
                <strong>{price}</strong>
                <div className="checkoutRating">
                    {Array(rating)
                    .fill()
                    .map((i, index) => (
                        <p key={index}>💚</p>
                    )) 
                }</div>
                <button 
                className="removeFromBasket"
                 onClick={RemoveFromBasket}
                 >Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;
