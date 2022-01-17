// Default react
import React from 'react';

// Stylesheet
import './custom-button.scss';

export default function CustomButton({ children, isGoogleSignIn, ...otherProps }) {
    return (
        <button 
            type='button'
            className={`${isGoogleSignIn ? 'google-sign-in': '' } custom-button`}
            {...otherProps}
        >
            {children}
        </button>
    );
}