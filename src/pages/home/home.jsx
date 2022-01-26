// Default react
import React from 'react';

// Components
import Directory from '../../components/directory/directory';

// Stylesheet
import './home.scss';

export default function HomePage() {
    return (
        <div className='home-container'>
            <Directory />
        </div>
    )
};