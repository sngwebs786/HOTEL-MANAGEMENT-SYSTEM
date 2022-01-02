import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
const UserProfile = () => {
    return (

        <div className='contact-form-main'>

            <div className='contact-form-contact-div'>
                <h1 className='contact-form-contact-heading'>Welcome to THE HOTEL</h1>
                <center>
                    <div>
                        <Link to="/bookingDetails">
                            <Button variant="contained" className=''>See your details</Button>
                        </Link>
                    </div>
                    <br />
                    <div>
                        <Link  to="/">

                            <Button variant="contained">Edit your details</Button>
                            </Link>
                    </div>
                    <br />

                    <div>
                        <Link to="/">

                            <Button variant="contained">Go to Home</Button>
                            </Link>

                    </div>
                    <Link to="/paymentForm">
                        <Button variant="contained" className="contact-form-submit-btn" type="submit">Submit</Button>
                    </Link>
                    
                </center>
            </div>

        </div>


    )
}

export default UserProfile
