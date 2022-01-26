// Default react
import React from 'react';

// Components
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

// Stylesheet
import './cart-icon.scss';

export default function CartIcon() {
    return (
        <div className='cart-container'>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    );
}