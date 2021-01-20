import React from 'react';
import './Detail.css';
import {useStateValue } from '../../StateProvider';

function Game({
     img,
     id,
     rating,
     price,
     text,
     decimal,
     type, 
     }) {
        const [, dispatch] = useStateValue();

        const addToBasket = () => {
            dispatch({
                type: 'ADD_TO_BASKET',
                item: {
                    id: id,
                    type: type,
                    img: img,
                    price: price,
                    rating:rating,
                    text: text
                },
            });
        };
    return (
        <div className='item'>
            <div className="item_details">
            <div className="item_img" id={id}>
                <img src={img} className="pad" alt={type}/>
            </div>
            <div className="game_details">
                <h3> {text} </h3>
                <p>{type}</p>
                <div className="rating">
                    {Array(rating)
                    .fill()
                    .map(i => (
                        <p>💚</p>
                    )) 
                }</div>
                <p className="price"><span>$</span>{price}<span>{decimal}</span> </p>
            </div>
            </div>
            <button className="addToCartBtn" onClick={addToBasket} >Add to Cart</button>
        </div>
    )
}

export default Game;
