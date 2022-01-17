// Default react
import React from 'react';

// Components
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

// Stylesheet
import './sign-in-sign-up.scss';

export default function SignInSignUpPage() {
    return (
        <div className="sign-in-sign-up-page">
            <SignIn />
            <SignUp />
        </div>
    );
}