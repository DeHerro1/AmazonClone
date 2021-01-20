import React, { useState } from 'react';
import './SignIn.css';
import Logo from '../../assets/Amazon-Logo.png';
import { withRouter } from 'react-router-dom';
import {useStateValue} from '../../StateProvider';

function SignIn(props) {
    const [email, setEmail] = useState('');
    const [verified, setVerified] = useState(false);
    const [name, setName] = useState('');

    const [ , dispatch] = useStateValue();

   function InputChangeHandler(e) {
        let input = email;
        input = e.target.value;
        setEmail(input);
    }
    const nameChange = (e) => {
        let input = name;
        input = e.target.value;
        setName(input);
    }

    function handleSubmit() {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
       let isValid = pattern.test( email );
        if(isValid) {
            props.history.replace('./');
            setVerified(false);
            dispatch({
                type: 'USER_NAME',
                user: name
                })
        }else {
            setVerified(true);
        }
    }

    return (
        <div className="signIn">
            <img src={Logo} className="signIn_logo" alt="Amazon_Logo" />
            <div className="signIn_form">
                <h2 className="signIn_header">Sign-In</h2>
                {verified && <p className="verified">Enter a valid email</p>}
                <input 
                className="signIn_input" 
                placeholder="Enter email" 
                value={email}
                onChange={InputChangeHandler}
                type='email' />
                <input 
                className="signIn_input" 
                placeholder="Enter name" 
                onChange={nameChange}
                value={name}
                type='text' />
                <p className="signIn_aggrement">By continuing, you agree to Amazon's 
                    <span className="signIn_paper"> Conditions of Use</span> and <span className="signIn_paper">Privacy Notice</span>.</p>
                  <button onClick={handleSubmit} className="signIn_button">Continue</button>
            </div>
        </div>
    )
}

export default withRouter(SignIn);
