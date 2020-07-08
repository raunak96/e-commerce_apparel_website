import React from 'react';
import "./sign-up.styles.scss";
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

export default class SignUp extends React.Component {
    constructor(props) {
        super (props);

        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }
    handleSubmit= async e=>{
        e.preventDefault();
        const {displayName,email, password, confirmPassword}= this.state;

        if(password!==confirmPassword){
            alert('Passwords don\'t match');
            return;
        }
        try {
            const {user}= await auth.createUserWithEmailAndPassword(email,password);
            
            await createUserProfileDocument(user,{displayName});
            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: "",
            });

        } catch (error) {
            console.error(error);
        }

    }

    handleChange = e => {
        const {name,value}= e.target;
        this.setState({ [name] : value });
    }

    render(){
        const {displayName,email, password, confirmPassword}= this.state;

        return (
            <div className = "sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign Up with your Email and Password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="text" label="Display Name" name="displayName" required="required" onChange={this.handleChange} value={displayName}/>
                    <FormInput type="email" label="Email" name="email"required="required" onChange={this.handleChange} value={email}/>
                    <FormInput type="password" label="Password" name="password"required="required" onChange={this.handleChange} value={password}/>
                    <FormInput type="password" label="Confirm Password" name="confirmPassword"required="required" onChange={this.handleChange} value={confirmPassword}/>
                    <CustomButton type="submit">Sign Up&nbsp;&nbsp;<i class="fa fa-lg fa-user-plus" aria-hidden="true"></i></CustomButton>
                </form>
            </div>
        )
    }
}