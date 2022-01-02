import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Home from '../screens/Home';
import SignIn from '../screens/SignIn';
import Signup from '../screens/Signup';
import PaymentForm from '../screens/PaymentForm';
import BookingForm from '../screens/BookingForm';
import UserProfile from '../screens/UserProfile';
import BookingDetails from '../screens/BookingDetails';
const MyRoutes = () => {
    return (

        <Router>
            <Routes>
                <Route path = "/" element={<Home/>}/>
                <Route path = "/signUp" element={<Signup/>}/>
                <Route path = "/signIn" element={<SignIn/>}/>
                <Route path = "/paymentForm" element={<PaymentForm/>}/>
                <Route path = "/bookingForm" element={<BookingForm/>}/>
                <Route path = "/userProfile" element={<UserProfile/>}/>
                <Route path = "/bookingDetails" element={<BookingDetails/>}/>
            </Routes>
            <div>

            </div>
        </Router>

    )
}

export default MyRoutes
