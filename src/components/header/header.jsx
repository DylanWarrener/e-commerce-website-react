// Default react
import React from 'react';

// React redux with access to the higher order function connect
import { connect } from 'react-redux';

// React router with access to the Link element
import { Link } from 'react-router-dom';

// Firebase auth access
import { auth } from '../../firebase/firebase.util';

// Logo svg
import { ReactComponent as Logo } from '../../assets/crown.svg';

// Components
import CartIcon from '../cart-icon/cart-icon';

// Stylesheet
import './header.scss';

function Header({ currentUser }) {
    return (
        <div className="header">
			<Link className="logo-container" to="/">
				<Logo className='logo' />
			</Link>
			<div className="nav-menu">
				<Link className="options" to="shop">
					SHOP
				</Link>
				<Link className="options" to="contact">
					CONTACT
				</Link>
				{
					currentUser 
					? <div className='options' onClick={() => auth.signOut()}>SIGN OUT</div>
					: <Link className='options' to='signin'>SIGN IN</Link>
				}
			</div>
			<CartIcon />
		</div>
    );
}

/*
	GETS the current state of the users information from 
	the root reducer and returns it back to this component
*/
const mapStateToProps = store => ({
	currentUser: store.user.currentUser
});

/* 
	Returns and exports a higher order function with 
	the current user state attached to the header, as 
	a prop
*/
export default connect(mapStateToProps)(Header);