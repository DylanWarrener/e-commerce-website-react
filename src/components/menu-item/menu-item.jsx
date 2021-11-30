import React from 'react';

import './menu-item.scss';

const MenuItem = props => (
    <div className={`menu-item ${props.size}`}>
        <div 
            className='background-image'
            style={{
                backgroundImage: `url(${props.imageUrl})`
            }} 
        />
        <div className='content'>
            <h1 className='title'>{props.title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem; 