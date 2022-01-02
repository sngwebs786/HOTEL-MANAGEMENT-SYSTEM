
import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';


const bankNames = [
    {
        value: 'BAHL',
        label: 'Bank Al Habib Limited',
    },
    {
        value: 'BAHL',
        label: 'Bank Al Habib Limited',
    },
    {
        value: 'BAHL',
        label: 'Bank Al Habib Limited',
    },
    {
        value: 'BAHL',
        label: 'Bank Al Habib Limited',
    },
];


const PaymentForm = () => {


    const [bank, setBank] = React.useState('Bank');

    const handleChange = (event) => {
        setBank(event.target.value);
    };


    return (
        <div className='contact-form-main'>

            <div className='contact-form-contact-div'>
                <h1 className='contact-form-contact-heading'>Payment Form</h1>
                <center>
                    <div>
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Select your Bank"
                            value={bank}
                            onChange={handleChange}
                            className="selectBank"

                        >
                            {bankNames.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div>
                        <TextField id="standard-basic" label="Credit Card Number" type='number' variant="standard" className="contact-form-input-fields" />
                    </div>
                    <div>
                        <TextField id="standard-basic" label="Card Code" type='number' variant="standard" className="contact-form-input-fields" />
                    </div>
                    <div>
                        <TextField id="standard-basic" label="Expiry Date"  variant="standard" className="contact-form-input-fields " />
                    </div>
                 
                    <Button variant="contained" className="contact-form-submit-btn">Submit</Button>
                </center>
            </div>

        </div>
    )
}

export default PaymentForm
