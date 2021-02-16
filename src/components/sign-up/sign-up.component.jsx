import React from 'react'
import './sign-up.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from '../../firebase/firebase.util';

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert('Password Does not matches');
            return
        }
        
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            });

        } catch (err) {
            console.log(err);
        }

        this.setState({email: '', password: ''});
    }

    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <div className={'sign-up'}>
                <h1 className={'title'}>I don't have an account</h1>
                <span>Sign up with your email and password</span>

                <form className={'sign-up-form'} onSubmit={this.handleSubmit}>
                    <FormInput name={'displayName'} type={'text'} value={displayName} required={true} label={'Display Name'}
                               handleChange={this.handleChange}/>
                    <FormInput name={'email'} type={'email'} value={email} required={true} label={'Email'}
                               handleChange={this.handleChange}/>
                    <FormInput name={'password'} type={'password'} value={password} required={true}
                               label={'Password'} handleChange={this.handleChange}/>
                    <FormInput name={'confirmPassword'} type={'password'} value={confirmPassword} required={true}
                               label={'Confirm Password'} handleChange={this.handleChange}/>
                    <div className="buttons">
                        <CustomButton type={'submit'}>Sign Up</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp