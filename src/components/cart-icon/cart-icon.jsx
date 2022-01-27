// Default react
import React from 'react';

// Redux
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart-action';
// Reselect 
import { selectCartItemsCount } from '../../redux/cart/cart-selectors';

// Components
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

// Stylesheet
import './cart-icon.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-container' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);