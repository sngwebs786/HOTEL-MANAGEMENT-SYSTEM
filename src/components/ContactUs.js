
import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const ContactUs = () => {
    return (
        <div className='contact-form-main'>
            
                <div className='contact-form-contact-div'>
                    <h1 className='contact-form-contact-heading'>Feel Free to Reach Us</h1>
                    <center>
                    <div>
                        <TextField id="standard-basic" label="Your Name" variant="standard" className="contact-form-input-fields"/>
                    </div>
                    
                    <div>
                        <TextField id="standard-basic" label="Your Email" variant="standard"  className="contact-form-input-fields "/>
                    </div>
                    <div>
                        <TextField id="standard-basic" label="Subject" variant="standard"  className="contact-form-input-fields "/>
                    </div>
                 
                    <div>
                        <TextField
                            id="standard-multiline-static"
                            label="Type your message here ..."
                            multiline
                            rows={4}
                            className="contact-form-input-fields "
                            variant="standard"
                        />
                    </div>
                    <Button variant="contained" className="contact-form-submit-btn">Submit</Button>
                    </center>
                </div>

        </div>
    )
}

export default ContactUs
