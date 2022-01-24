// Default react
import React from 'react';

// Stylesheet
import './form-input.scss';

export default function FormInput({handleChange, label, ...otherProps}){
    return (
        <div className='group'>
            <input className='form-input' onChange={handleChange} {...otherProps} />
            {
                label ? (
                    <label 
                        className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}
                    >
                        {label}
                    </label>
                ) : null
            }
        </div>
    )
};