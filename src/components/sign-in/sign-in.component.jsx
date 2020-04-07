import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {signInWithGoogle} from '../../firebase/firebase.utils.js';

import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(){
        super();
        this.state = {
            email:'',
            password:''
        };
    }
    handleSubmit = event =>{
        event.preventDefault();
        this.setState({email:'', password:''})
    }

    handleChange = event =>{
        const {value, name}= event.target;
        this.setState({[name]:value})
    }
    render (){
        return (
            <div className='sign-in'>
                <h2>I already have account</h2>
                <span>Sign In with your email and password</span>

                <form onSubmit= {this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name="email" 
                        value={this.state.email} 
                        handleChange = {this.handleChange}
                        label = "Email"
                        required />
                   <FormInput 
                        type="password"
                        name="password" 
                        value={this.state.password} 
                        handleChange = {this.handleChange}
                        label = "Password"
                        required />
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign IN</CustomButton>
                        <CustomButton onClick = {signInWithGoogle} isGoogleSignIn >Sign IN With Google</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;