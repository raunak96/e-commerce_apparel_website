import React,{useState} from 'react';
import "./sign-in.styles.scss";
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { googleSignInStart,emailSignInStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

const SignIn =({emailSignInStart,googleSignInStart})=>{
    
    const [userCredentials,setCredentials]= useState({email:'',password:''});

    const { email, password } = userCredentials;
    
    const handleChange=e=>{
        const{name,value}=e.target;
        setCredentials({...userCredentials,[name]:value})

    }
    
    const handleSubmit= e=>{
        e.preventDefault();
        
        emailSignInStart({email,password}); //dispatch emailSignInStart action
    }

    
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your e-mail and password</span>

                <form onSubmit={handleSubmit}>

                    <FormInput type="email" label="Email" name="email"required="required" onChange={handleChange} value={email}/>
                    <FormInput type="password" label="Password" name="password"required="required" onChange={handleChange} value={password}/>

                    <div className="buttons">
                        <CustomButton type="submit">Sign in&nbsp;&nbsp;<i className="fa fa-lg fa-sign-in" aria-hidden="true"></i></CustomButton>
                        <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign in with Google&nbsp;&nbsp;
                            <i className="fa fa-lg fa-google" aria-hidden="true"></i>
                        </CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }


const mapDispatchToProps = dispatch => ({
    googleSignInStart: ()=>dispatch(googleSignInStart()),
    emailSignInStart: userCredentials=> dispatch(emailSignInStart(userCredentials))  //pass email password as object with email/password key-value pairs
});

export default connect(null,mapDispatchToProps)(SignIn);