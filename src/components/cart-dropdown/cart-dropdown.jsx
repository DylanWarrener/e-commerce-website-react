import React from 'react';

// Redux
import { connect } from 'react-redux';

// Reselect 
import { selectCartItems } from '../../redux/cart/cart-selectors';
import { createStructuredSelector } from 'reselect';

// Components
import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';

// Stylesheet
import './cart-dropdown.scss';

const CartDropdown = ({ cartItems }) => {
    return (
        <div id='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                }
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);