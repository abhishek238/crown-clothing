import React from 'react'
import './sign-in.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {signInWithGoogle} from '../../firebase/firebase.util';

class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({email: '', password: ''});
    }

    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div className={'sign-in'}>
                <h1>I already have an account</h1>
                <span>Sign in with your email and password</span>

                <form action="">
                    <FormInput name={'email'} type={'email'} value={this.state.email} required={true} label={'Email'}
                               handleChange={this.handleChange}/>
                    <FormInput name={'password'} type={'password'} value={this.state.password} required={true}
                               label={'Password'} handleChange={this.handleChange}/>
                    <div className="buttons">
                        <CustomButton type={'submit'}>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Google Sign In</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn