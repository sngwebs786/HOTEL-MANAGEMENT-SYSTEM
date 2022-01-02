
import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { getDatabase, ref, set } from "firebase/database";

const BookingForm = () => {
  

    const [userData, setUserData] = React.useState({
        firstname: "",
        lastname: "",
        contactnumber: "",
        cnic: "",
        address: "",
        persons: "",
        days: ""
    })

    let name, value;
    function postUserData(event) {
        name = event.target.name
        value = event.target.value
        setUserData({ ...userData, [name]: value })
    }


    //connecting firebase
    const db = getDatabase();
    console.log(db)

    const handleSubmit = (e) => {
        e.preventDefault();
        set(ref(db, 'users/'+userData.cnic), {
            firstname: userData.firstname,
            lastname: userData.lastname,
            contactnumber:userData.contactnumber,
            cnic : userData.cnic,
            address : userData.address,
            persons : userData.persons,
            days : userData.days
        });
        console.log("Chal rha h")
    }


    return (
        <div className='contact-form-main'>
            <form  >
                <div className='contact-form-contact-div'>
                    <h1 className='contact-form-contact-heading'>Book your Hotel</h1>
                    <center>
                        <div>
                            <TextField id="standard-basic" label="Firstname" variant="standard" className="contact-form-input-fields" value={userData.firstname} name="firstname" onChange={(event) => postUserData(event)} />
                        </div>
                        <div>
                            <TextField id="standard-basic" label="Lastname" variant="standard" className="contact-form-input-fields" value={userData.lastname} name="lastname" onChange={(event) => postUserData(event)} />
                        </div>
                        <div>
                            <TextField id="standard-basic" label="Contact Number" variant="standard" className="contact-form-input-fields " value={userData.contactnumber} name="contactnumber" onChange={(event) => postUserData(event)} />
                        </div>
                        <div>
                            <TextField id="standard-basic" label="CNIC" variant="standard" className="contact-form-input-fields " value={userData.cnic} name="cnic" onChange={(event) => postUserData(event)} />
                        </div>
                        <div>
                            <TextField id="standard-basic" label="Address" variant="standard" className="contact-form-input-fields " value={userData.address} name="address" onChange={(event) => postUserData(event)} />
                        </div>
                        <div>
                            <TextField id="standard-basic" label="No. of persons" variant="standard" className="contact-form-input-fields " value={userData.persons} name="persons" onChange={(event) => postUserData(event)} />
                        </div>
                        <div>
                            <TextField id="standard-basic" label="No. of days to stay" variant="standard" className="contact-form-input-fields " value={userData.days} name="days" onChange={(event) => postUserData(event)} />
                        </div>

                        <Link to="/paymentForm">
                            <Button variant="contained" className="contact-form-submit-btn" type="submit" onClick={handleSubmit} >Submit</Button>
                        </Link>
                    </center>
                </div>
            </form>
        </div>
    )
}

export default BookingForm
