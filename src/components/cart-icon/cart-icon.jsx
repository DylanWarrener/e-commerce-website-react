// Default react
import React from 'react';

// Redux
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart-action';

// Components
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

// Stylesheet
import './cart-icon.scss';

const CartIcon = ({ toggleCartHidden }) => (
    <div className='cart-container' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>0</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);