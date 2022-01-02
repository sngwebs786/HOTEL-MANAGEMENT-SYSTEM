import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import card1 from '../imgs/card1.jpg'
import card2 from '../imgs/card2.jpg'
import card3 from '../imgs/card3.jpg'
import card4 from '../imgs/card4.jpg'
import card5 from '../imgs/card5.jpg'
import card6 from '../imgs/card6.jpg'

const MyHotelCards = () => {

    function handleBookNow(){
        window.open("../screens/Signup");
    }

    return (
        <div className='container'>
            <center>
                <h1 className='checkHotelHeading'>Check Our Hotels</h1>
            </center>
            <div className='row'>

                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6  card hotelCardDiv">
                    <img className="card-img-top hotelCard" src={card4} alt="Card image cap " />
                    <div className="card-body">
                        <h5 className="card-title">Hotel 1</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                       <Link to="/signUp"> <button className="btn btn-primary">Book Now</button></Link>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6card hotelCardDiv">
                    <img className="card-img-top hotelCard" src={card1} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Hotel 2</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/signUp"> <button className="btn btn-primary">Book Now</button></Link>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 card hotelCardDiv">
                    <img className="card-img-top hotelCard" src={card2} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Hotel 3</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/signUp"> <button className="btn btn-primary">Book Now</button></Link>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 card hotelCardDiv">
                    <img className="card-img-top hotelCard" src={card3} alt="Card image cap " />
                    <div className="card-body">
                        <h5 className="card-title">Hotel 4</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/signUp"> <button className="btn btn-primary">Book Now</button></Link>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 card hotelCardDiv">
                    <img className="card-img-top hotelCard" src={card5} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Hotel 5</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/signUp"> <button className="btn btn-primary">Book Now</button></Link>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 card hotelCardDiv">
                    <img className="card-img-top hotelCard" src={card6} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Hotel 6</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link to="/signUp"> <button className="btn btn-primary">Book Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyHotelCards
