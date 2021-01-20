import React from 'react';
import './Category.css';
import {Link, withRouter} from 'react-router-dom';

function Category({title, img, text, link}) {
    return (
        <div className="category">
            <p>{title}</p>
            <Link to={link} className="cat_link">
            <img src={img} className="cat_image" alt="cat_image"/>
           <button className="button">{text}</button>
           </Link>
        </div>
    )
}

export default withRouter(Category);
