import React from 'react';

import './directory.scss';

import SHOP_DATA from '../../data/shop';
import MenuItem from '../menu-item/menu-item';

export default function Directory() {
    return (
        <div className='directory-menu'>
            {SHOP_DATA.map(({ id, title, imageUrl, size }) => (
                <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
            ))}
        </div>
    );
}