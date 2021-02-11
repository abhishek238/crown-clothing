import React from 'react'
import './sign-up.styles.scss';

class SignUp extends React.Component {

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
                    <input name={'email'} type={'email'} value={this.state.email} required={true}
                           onChange={this.handleChange}/>
                    <label htmlFor="email">Email</label>
                    <input name={'password'} type={'password'} value={this.state.password} required={true}
                           onChange={this.handleChange}/>
                    <label htmlFor="password">Password</label>
                    <input type={'submit'} value={"Submit Form"}/>
                </form>
            </div>
        )
    }
}

export default SignUp