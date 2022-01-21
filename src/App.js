import { child, get, ref } from "firebase/database";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { db } from './config/firebase-config';
import { ReadFromFirebase } from "./Redux/action";
// import Error from "./pages/Error";
// import Bookings from "./Components/bookings";
import ProtectedRoute from "./components/ProtectedRoutes";
import { UserAuthContextProvider } from "./Context/UserAuthContext";


import Home from './screens/Home/Home'
import About from './screens/About/About'
import Contact from './screens/Contact/Contact'
import Rooms from './screens/Rooms/Rooms'
// import Bookings from './screens/Bookings/Booking'
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import SingleRoom from "./screens/Rooms/SingleRoom";
import Booknow from './components/Booking/Booknow'
import MyBookings from './components/Booking/MyBookings'
// import Error from "./screens/Error";





function App() {
  const dispatch = useDispatch();

 
  return (
    <div className="App">
      <BrowserRouter>
        <UserAuthContextProvider>
          <Navbar/>
          <Routes>
            <Route path="/" index element={<Home/>} />
            <Route path="/rooms" element={<Rooms/>} />

            <Route path="/about" element={<About />} />
           
            {/* <Route
              path="/bookings"
              element={
                <ProtectedRoute>
                  {" "}
                  <Bookings />{" "}
                </ProtectedRoute>
              }
            /> */}

            { <Route
              path="/booknow/:roomType"
              element={
                <ProtectedRoute>
                  <Booknow />
                </ProtectedRoute>
              }
            /> }
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/singleRoom/:roomType" element={<SingleRoom />} />
            <Route path="/mybookings" element={<MyBookings/>} />

            {/* <Route path="*" element={<Error />} /> */}
          </Routes>
        </UserAuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
