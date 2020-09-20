import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function Navbar() {
    return (
        <nav className="col-12 navbar navbar-expand-lg">
            <i className="far fa-newspaper text-white fa-2x mx-auto my-auto"></i>
            <div className="navbar-nav">
                <div className="nav-item my-auto"><Link className="nav-link" to="/">evox <strong>News</strong></Link></div>
            </div>
        </nav>
    )
}