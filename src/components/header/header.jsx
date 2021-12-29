import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg';

export default function Header() {
    return (
        <div className="header">
			<Link className="logo-container" to="/">
				<Logo className='logo' />
			</Link>
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