import React from 'react';
import './Nav.css';

function Nav() {
    return (
        <div>
             <nav className="home_nav">
                <ul className="home_ul">
                    <li className="home_li" >All</li>
                    <li className="home_li">Today's Deals</li>
                    <li className="home_li">Customer Services</li>
                    <li className="home_li">Gift Cards</li>
                    <li className="home_li">Sell</li>
                    <li className="home_li">Registry</li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;
