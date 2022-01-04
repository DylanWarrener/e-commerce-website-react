import React from "react";

import FormInput from '../form-input/form-input';

import './sign-in.scss';


class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render () {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                {/* Bootstrap form */}
                <form onSubmit={this.handleChange}>
                    <div class="mb-3 mt-3">
                        <input 
                            className="form-control"
                            name='email' 
                            type='email' 
                            value={this.state.email} 
                            handleChange={this.handleChange}
                            placeholder='Enter email'
                            id='email'
                            required 
                        />
                    </div>
                    <div class="mb-3">
                        <input 
                            className="form-control"
                            name='pswd' 
                            type='password' 
                            value={this.state.email} 
                            handleChange={this.handleChange}
                            placeholder='Enter password'
                            id='pwd'
                            required 
                        />
                    </div>
                    <div class="form-check mb-3">
                        <input 
                            class="form-check-input" 
                            type="checkbox"
                        />
                    </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                </form>

                {/* SASS form */}
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label='email'
                        required 
                    />
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label='password'
                        required 
                    />
                    <input type='submit' value='Submit Form' />
                </form>
            </div>
        );
    }
}

export default SignIn;