// Default react
import React from 'react';

// Stylesheet
import './custom-button.scss';

export default function CustomButton({ children, isGoogleSignIn, inverted, ...otherProps }) {
    return (
        <button 
            type='button'
            className={`
                ${inverted ? 'inverted': '' } 
                ${isGoogleSignIn ? 'google-sign-in': '' } custom-button
            `}
            {...otherProps}
        >
            {children}
        </button>
    );
}