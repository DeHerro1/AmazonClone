import React from 'react';
import './Game.css';
import {Link} from 'react-router-dom';

function Game({
     img,
     rating,
     link,
     price,
     text,
     decimal,
     type, 
     }) {
    return (
        <div className='game'>
            <div className="game_img">
                <Link to={link}>
                <img src={img} className="pad" alt="gamePad"/>
                </Link>
            </div>
            <div className="game_details">
                <h3> {text} </h3>
                <p>{type}</p>
                <div className="rating">
                    {Array(rating)
                    .fill()
                    .map((i, index) => (
                        <p key={index} >💚</p>
                    )) 
                }</div>
                <p className="price"><span>$</span>{price}<span>{decimal}</span> </p>
            </div>
        </div>
    )
}

export default Game;
