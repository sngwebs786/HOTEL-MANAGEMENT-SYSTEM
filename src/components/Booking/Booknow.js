import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import hotel1 from '../../imgs/hotel1.jpg';
import './Booknow.css'
import { ref, set } from "firebase/database";
import { db } from "../../config/firebase-config";




export default function Booknow() {

  const { roomType } = useParams();
  console.log(roomType)
  var roomsDetails = {}
  if (roomType == "single") {

    roomsDetails = {
      capacity: 1,
      breakfast: "included",
      price: 1200,
      pets: "allowed",
      roomtype: "single",
      size: "250 sqft"
    }

  }

  else if (roomType == "double") {
    roomsDetails = {

      capacity: 2,
      breakfast: "included",
      price: 2400,
      pets: "allowed",
      roomtype: "double",
      size: "500 sqft"

    }
  }
  else if (roomType == "family") {
    roomsDetails = {
      capacity: 6,
      breakfast: "not included",
      price: 3500,
      pets: "not allowed",
      roomtype: "family",
      size: "750 sqft"

    }
  }

  else if (roomType == "presidential") {
    roomsDetails = {

      capacity: 4,
      breakfast: "included",
      price: 4300,
      pets: "not allowed",
      roomtype: "presidential",
      size: "1000 sqft"

    }
  }

  const [fullName, setFullName] = useState("");
  const [value, setValue] = useState(0);
  const [cnic, setCnic] = useState(0);
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [persons, setPersons] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const navigate = useNavigate();
  
  function handleName(name) {
    setFullName(name.target.value);
    console.log(fullName)
  }
  function handlepersons(val) {
    setPersons(val.target.value);
    console.log(persons)
  }
  function handleemail(val) {
    setEmail(val.target.value);
    console.log(email)

  }
  function handleaddress(val) {
    setAddress(val.target.value);
    console.log(address)

  }
  function handleCnic(val) {
    setCnic(val.target.value);
    console.log(cnic)

  }
  function handleChangeStart(date) {
    setStartDate(date);
  }


  function handleChangeEnd(date) {
    setEndDate(date);
  }

  function calculateDaysLeft(startDate, endDate) {
    if (!moment.isMoment(startDate)) startDate = moment(startDate);
    if (!moment.isMoment(endDate)) endDate = moment(endDate);
    return endDate.diff(startDate, "days");
  }
  var daysLeft = calculateDaysLeft(startDate, endDate);



  const formattedDate = startDate
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .replace(/ /g, "-");

  const formattedEndDate = endDate
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .replace(/ /g, "-");



    function writeToDatabase() {
      if (persons > roomsDetails.capacity) {
        return alert("Please check the capacity of Room.");
      }
      if (daysLeft === 0) {
        return alert("Please select the dates.");
      }
      if (
        fullName &&
        address &&
        cnic &&
        email &&
        value &&
        persons <= roomsDetails.capacity &&
        startDate &&
        endDate
      ) {
        set(ref(db, `bookings/${cnic}`), {
          name: fullName,
          address: address,
          cnic: cnic,
          email: email,
          phone: value,
          persons: persons,
          type: roomsDetails.roomtype,
          startDate: formattedDate,
          endDate: formattedEndDate,
          totalPrice: daysLeft * roomsDetails.price,
          days: daysLeft,
          capacity:roomsDetails.capacity,
          status : "Pending",
          // id: uuid,
          refID: email,
        }).then(() => {
          alert("Booked Succesfully! See bookings.");
          navigate("/");
        });
        setFullName("");
        setAddress("");
        setCnic(0);
        setEmail("");
        setValue(0);
        setPersons(0);
      } else {
        alert("Please Fill all fields");
      }
    }

 

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-10 mx-auto col-12  shadow-lg border-0 p-4">


          <div>
            <h1 className="display-4 booking-hd">Booking</h1>
          </div>
          <div className="row">
            <div className="col-md-6 col-12 my-auto">
              <img
                src={hotel1}
                className="img-fluid"
                alt="selected room"
              />
            </div>
            <div className="col-md-6 col-12 my-auto">
              <h1>Rooms Details</h1>
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th className="dark-shade">Room Type</th>
                    <td>{roomsDetails.roomtype}</td>
                  </tr>
                  <tr>
                    <th className="dark-shade">Capacity</th>
                    <td>{roomsDetails.capacity + " persons"}</td>
                  </tr>
                  <tr>
                    <th className="dark-shade">Size</th>
                    <td>{roomsDetails.size}</td>
                  </tr>
                  <tr>
                    <th className="dark-shade">Breakfast</th>
                    <td>{roomsDetails.breakfast}</td>
                  </tr>
                  <tr>
                    <th className="dark-shade">Pets</th>
                    <td>{roomsDetails.pets}</td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
          <div className="row my-3">
            <div className="col-md-6 col-12">
              <div className="form-group">
                <label htmlFor="Fromdate" className="font-weight-bolder mr-3">
                  From Date{" "}
                </label>
                <DatePicker
                  selected={startDate}
                  onChange={handleChangeStart}
                  minDate={moment().toDate()}
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="col-md-6 col-12">
              <div className="form-group">
                <label htmlFor="Todate" className="font-weight-bolder mr-3">
                  To Date{" "}
                </label>
                <DatePicker
                  selected={endDate}
                  minDate={moment().toDate()}
                  onChange={handleChangeEnd}
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-12">
              <h6 className="font-weight-bolder">
                Number of days : {daysLeft}
              </h6>
              <mark>Please make sure Checkin time is from 9 am to 12 pm</mark>
            </div>
            <div className="col-md-6 col-12">
              <h6 className="font-weight-bold">
                Price per day :{" "}
                <span className="">Rs {roomsDetails.price}</span>
              </h6>
              <h6 className="font-weight-bold">
                Total Price to be paid :{" "}
                <span className="text-primary">Rs {roomsDetails.price * daysLeft}</span>
              </h6>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-md-12 col-12 my-auto">
              <div className="col-md-12 col-12 float-right">
                <form>
                  <div className="form-group">
                    <label htmlFor="persons">No. of persons</label>
                    <input
                      type="number"
                      value={persons}
                      className="form-control"
                      onChange={handlepersons}
                      id="persons"
                      placeholder="No. of persons"
                      required
                    />

                    <br />
                    <label htmlFor="forName">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={fullName}
                      id="forName"
                      onChange={handleName}
                      placeholder="Full name"
                      required
                    />
                    <br />

                    <label htmlFor="Number">Number</label>
                    <PhoneInput
                      defaultCountry="PK"
                      className="phoneInput"
                      id="number"
                      placeholder="Enter phone number"
                      value={value}
                      onChange={setValue}
                    />
                    <br />

                    <label htmlFor="CNIC">CNIC Number</label>
                    <input
                      type="number"
                      className="form-control"
                      value={cnic}
                      onChange={handleCnic}
                      required
                      id="CNIC"
                      placeholder="CNIC"
                      maxLength={13}
                    />
                    <br />

                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      value={address}
                      onChange={handleaddress}
                      id="address"
                      placeholder="Your address"
                      required
                    />
                    <br />

                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={handleemail}
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                      required
                    />
                    <small id="emailHelp" className="form-text text-muted">
                      Enter the same email through which you have logged in.
                    </small>
                  </div>

                  <div className="form-group form-check"></div>
                </form>
                <center>
                  <button onClick={writeToDatabase}
                    className="btn btn-block btn-outline-primary confirm-booking-btn"
                  >
                    Confirm Booking
                  </button>
                </center>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
