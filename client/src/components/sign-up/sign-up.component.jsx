import React, { useState } from 'react';
import "./sign-up.styles.scss";
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';

const SignUp =({signUpStart})=> {
    
    const [userCredentials,setCredentials]=useState({
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        });
           
    const {displayName,email, password, confirmPassword}= userCredentials;
 
    const handleSubmit= e =>{
        e.preventDefault();

        if(password!==confirmPassword){
            alert('Passwords don\'t match');
            return;
        }
        signUpStart({email, password,displayName});
        
    }

    const handleChange = e => {
        const {name,value}= e.target;
        setCredentials({ ...userCredentials,[name] : value });
    }

    return (
        <div className = "sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign Up with your Email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput type="text" label="Display Name" name="displayName" required="required" onChange={handleChange} value={displayName}/>
                <FormInput type="email" label="Email" name="email"required="required" onChange={handleChange} value={email}/>
                <FormInput type="password" label="Password" name="password"required="required" onChange={handleChange} value={password}/>
                <FormInput type="password" label="Confirm Password" name="confirmPassword"required="required" onChange={handleChange} value={confirmPassword}/>
                <CustomButton type="submit">Sign Up&nbsp;&nbsp;<i className="fa fa-lg fa-user-plus" aria-hidden="true"></i></CustomButton>
            </form>
        </div>
    )
}
const mapDispatchToProps = (dispatch)=>({
    signUpStart: userCredentials =>dispatch(signUpStart(userCredentials))
});
export default connect(null,mapDispatchToProps)(SignUp);