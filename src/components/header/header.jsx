// Default react
import React from 'react';

// Redux
import { connect } from 'react-redux';

// Reselect 
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { selectCurrentUser } from '../../redux/user/user-selector';
import { createStructuredSelector } from 'reselect';

// React router with access to the Link element
import { Link } from 'react-router-dom';

// Firebase auth access
import { auth } from '../../firebase/firebase.util';

// Logo svg
import { ReactComponent as Logo } from '../../assets/crown.svg';

// Components
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';

// Stylesheet
import './header.scss';

function Header({ currentUser, hidden }) {
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
				<CartIcon />
			</div>
			{
				hidden ? null : <CartDropdown />
			}
		</div>
    );
}

/*
	GETS the current state of the users information from 
	the root reducer and returns it back to this component
*/
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
});

/* 
	Returns and exports a higher order function with 
	the current user state attached to the header, as 
	a prop
*/
export default connect(mapStateToProps)(Header);