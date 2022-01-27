// Default react
import React from 'react';

// Shop data
import SHOP_DATA from '../../data/shop';

// Components 
import MenuItem from '../menu-item/menu-item';

// Stylesheet
import './directory.scss';

export default function Directory() {
    return (
        <div className='directory-container'>
            {
                SHOP_DATA.map(({ id, title, imageUrl, size }) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                ))
            }
        </div>
    );
}