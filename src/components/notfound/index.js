import React from 'react';
import {Link} from 'react-router-dom';
import './notfound.css';

export default props => {
    return(
        <div className="not-found">
            <div className="not-found-content">
                <h1>404 - The page you requested was not found</h1>
                <Link to='/'>Go to Home Page</Link>
            </div>
        </div>
    )
}