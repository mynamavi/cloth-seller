import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils.js';

import './sign-up.styles.scss';

class SignUp extends React.Component{
    constructor(){
        super();

        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password} = this.state;

        //if(password !== confirmPassword){
          //  alert("Passwords don't match"); 
            //return;
        //}
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            
            await createUserProfileDocument(user , {displayName});

        }catch (error){
            console.log('failed', error.message );

        }

    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render (){
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I don't have Account.</h2>
                <span>Sign Up with Email and Password</span>

                <form className="sign-up-form" onSubmit={this.handleSubmit} >
                    <FormInput 
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange = {this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput 
                        type='email'
                        name='email'
                        value={email}
                        onChange = {this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput 
                        type='password'
                        name='password'
                        value={password}
                        onChange = {this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput 
                        type='password'
                        name='confirmpassword'
                        value={confirmPassword}
                        onChange = {this.handleChange}
                        label='Confirm Password'
                        required
                    />

                    <CustomButton type='submit'>Sign Up</CustomButton>

                </form>
            </div>
        );
    }
}

export default SignUp;