import React from 'react';

// Redux
import { connect } from 'react-redux';

// Router 
import { useNavigate } from 'react-router-dom';


// Reselect 
import { selectCartItems } from '../../redux/cart/cart-selectors';
import { createStructuredSelector } from 'reselect';

// Components
import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';

// Stylesheet
import './cart-dropdown.scss';

const CartDropdown = ({ cartItems }) => {
    let navigate = useNavigate();

    function handleClick() {
        navigate('/checkout');
    }

    return (
        <div id='cart-dropdown'>
            <div className='cart-items'>
                {
                    cartItems.length
                    ? cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                    : <span className='empty-message'>Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={handleClick}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector ({
    cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);