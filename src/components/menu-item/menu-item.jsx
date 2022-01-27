// Default react
import React from 'react';

// Stylesheet
import './menu-item.scss';

export default function MenuItem({ title, imageUrl, size }) {
    return (
    <div className={`menu-item ${size}`}>
        <div 
            className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }} 
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
    );
}