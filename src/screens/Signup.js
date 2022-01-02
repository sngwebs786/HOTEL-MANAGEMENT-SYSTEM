
import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import socialMediaAuth from '../components/auth';
// import { facebookProvider } from '../config/authMethods'
// import { googleProvider } from '../config/authMethods'
// import { signInWithPopup } from 'firebase/auth'
import { authentication } from '../config/firebase-config';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



const Signup = () => {

    //storing email and password entered by the user

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const auth = getAuth();

    const  signUpWithEmail = (email, password) => {
        // console.log("aaaaaaaaaa")
        return  createUserWithEmailAndPassword(authentication, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log('doneee')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('err')
                console.log(errorMessage)
                // ..
            });
    }
    return (
        <div className='contact-form-main'>

            <div className='contact-form-contact-div'>
                <h1 className='contact-form-contact-heading'>Sign Up</h1>
                <center>
                    <div>
                        <TextField id="standard-basic" label="Firstname" variant="standard" className="contact-form-input-fields" />
                    </div>
                    <div>
                        <TextField id="standard-basic" label="Lastname" variant="standard" className="contact-form-input-fields" />
                    </div>
                    <div>
                        <TextField id="standard-basic" label="Contact Number" variant="standard" className="contact-form-input-fields " />
                    </div>
                    <div>
                        <TextField id="standard-basic" label="Email" variant="standard" className="contact-form-input-fields " onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <TextField id="standard-basic" label="Password" variant="standard" className="contact-form-input-fields " onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <TextField id="standard-basic" label="Confirm Password" variant="standard" className="contact-form-input-fields " />
                    </div>

                    {/* <Link to="/bookingForm"> */}
                    <Button variant="contained" className="contact-form-submit-btn signBtn" onClick={()=>signUpWithEmail()}>Sign Up</Button>
                    {/* <Button variant="contained" className="contact-form-submit-btn signBtn" onClick={() => handleOnClick(googleProvider)}>Sign Up With Google</Button> */}
                    {/* </Link> */}

                    <p>Already have an account ?? </p> <Link to="/signIn">Sign In</Link>
                </center>
            </div>

        </div>
    )
}

export default Signup
