import React from 'react';
import "./sign-in.styles.scss";
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

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
    handleSubmit=e=>{
        e.preventDefault();
        this.setState({email:"",password:""});
    }

    render(){
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your e-mail and password</span>

                <form onSubmit={this.handleSubmit}>

                    <FormInput type="email" label="Email" name="email"required="required" onChange={this.handleChange} value={this.state.email}/>
                    <FormInput type="password" label="Password" name="password"required="required" onChange={this.handleChange} value={this.state.password}/>

                    <CustomButton type="submit">Sign in</CustomButton>
                </form>
            </div>
        )
    }
}