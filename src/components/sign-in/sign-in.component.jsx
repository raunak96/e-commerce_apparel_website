import React from 'react';
import "./sign-in.styles.scss";
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

export default class SignIn extends React.Component {
    constructor(props) {
        super (props);
        this.state={
            email:"",
            password:""
        }
    }

    handleChange=e=>{
        const{name,value}=e.target;
        this.setState({[name]:value})

    }
    handleSubmit= async e=>{
        e.preventDefault();
        const {email,password}= this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email:"",password:""});
        } catch (error) {
            console.log(error);
        }
        
    }

    render(){
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your e-mail and password</span>

                <form onSubmit={this.handleSubmit}>

                    <FormInput type="email" label="Email" name="email"required="required" onChange={this.handleChange} value={this.state.email}/>
                    <FormInput type="password" label="Password" name="password"required="required" onChange={this.handleChange} value={this.state.password}/>

                    <div className="buttons">
                        <CustomButton type="submit">Sign in&nbsp;&nbsp;<i className="fa fa-lg fa-sign-in" aria-hidden="true"></i></CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google&nbsp;&nbsp;
                            <i className="fa fa-lg fa-google" aria-hidden="true"></i>
                        </CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}