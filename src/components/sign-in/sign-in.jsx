import react from "react";

import './sign-in-sign-up.scss';

export default function SignIn() {
    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form>
                <input name='email' type='email' value={this.state.email} required />
                <label>Email</label>
            </form>
        </div>
    );
}