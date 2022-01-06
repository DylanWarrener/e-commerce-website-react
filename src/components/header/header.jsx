import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.util';

import './header.scss';

import { ReactComponent as Logo } from '../../assets/crown.svg';

export default function Header({ currentUser }) {
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
				{
					currentUser 
					? <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
					: <Link className='option' to='/signin'>SIGN IN</Link>
				}
			</div>
		</div>
    );
}