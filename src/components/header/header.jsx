import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

export default function Header() {
    return (
        <div className="header">
			<Link className="logo-container" to="/"></Link>
			<div className="nav-menu">
				<Link className="options" to="/shop">
					SHOP
				</Link>
				<Link className="options" to="/contact">
					CONTACT
				</Link>
			</div>
		</div>
    );
}