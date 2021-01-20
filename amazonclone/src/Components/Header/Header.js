import React from 'react';
import './Header.css';
import Logo from '../../assets/Amazon-Logo.png';
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../../StateProvider';

function Header() {
    const [{basket}] = useStateValue();
    const [{user}] = useStateValue();
    console.log(user);
    
    let userName;
        if(user === null) {
            userName = 'Sign In'
        }
        else {
            userName = user;
        }
    return (
        <nav className="header">
            <Link to="/">
            <img 
            src={Logo}
            className="nav_logo"
            alt="Amazon Logo"/>
            </Link>
            <div className="nav_search">
                <input type="text" className="nav_searchBar" />
                <SearchIcon className="nav_searchIcon" />
            </div>
            <div className="nav_head">
            <Link to="/login" className="nav_link">
            <div className="nav_option">
                <span className="option_one">Hello</span>
                <span className="option_two">{userName}</span>
            </div>
            </Link>
            <Link to="/checkout" className="nav_link">
            <div className="nav_option">
                <span className="option_one">Returns</span>
                <span className="option_two">& Orders</span>
            </div>
            </Link>
            <Link to="/checkout" className="nav_link">
                <div className="nav_basket">
                    <ShoppingBasket />
                    <span class="option_two basket_count">{basket?.length}</span>
                </div>
            </Link>
        </div>

        </nav>
    )
}

export default Header;
