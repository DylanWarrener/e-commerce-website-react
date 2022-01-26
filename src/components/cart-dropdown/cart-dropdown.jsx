// Default react
import React from 'react';

// Components
import CustomButton from '../custom-button/custom-button';

// Stylesheet
import './cart-dropdown.scss';

export default function CartDropdown() {
    return (
        <div id='cart-container'>
            <div className='cart-items' />
            <CustomButton>GO TO CHECKOUT</CustomButton>
        </div>
    );
}