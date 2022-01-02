
import React from 'react'
import TextField from '@mui/material/TextField';
// import { Link } from 'react-router-dom';
import { app, authentication, fire } from '../config/firebase-config';
// import socialMediaAuth from '../components/auth';
import { facebookProvider } from '../config/authMethods'
import { googleProvider } from '../config/authMethods'
import { signInWithPopup } from 'firebase/auth'
// import { authentication } from '../config/firebase-config';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import Button from '@mui/material/Button';
const SignIn = () => {

    //storing email and password entered by the user

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')


    // authenticating google and facebook
    const socialMediaAuth = (provider) => {
        signInWithPopup(authentication, provider)
            .then((res) => {
                return res
            })

            .catch((er) => {
                return er;
            })
    }
    const handleOnClick = async (provider) => {
        const res = await socialMediaAuth(provider)
    }


    // normal sign in with email and password
    const handleSignIn = () => {
        signInWithEmailAndPassword(authentication, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("yayy")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Err")
            });
    }


    return (
        <div className='contact-form-main'>

            <div className='contact-form-contact-div'>
                <h1 className='contact-form-contact-heading'>Sign In</h1>
                <center>
                    <div>
                        <TextField id="standard-basic" label="Email" variant="standard" className="contact-form-input-fields" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <TextField id="standard-basic" label="Password" variant="standard" className="contact-form-input-fields" onChange={(e) => setPassword(e.target.value)} />
                    </div>


                    <Button variant="contained" className="contact-form-submit-btn" onClick={handleSignIn}>Sign In</Button>
                    <Button variant="contained" className="contact-form-submit-btn signBtn" onClick={() => handleOnClick(facebookProvider)}>Sign Up With Facebook</Button>
                    <Button variant="contained" className="contact-form-submit-btn signBtn" onClick={() => handleOnClick(googleProvider)}>Sign Up With Google</Button>


                </center>
            </div>

        </div>
    )
}

export default SignIn
