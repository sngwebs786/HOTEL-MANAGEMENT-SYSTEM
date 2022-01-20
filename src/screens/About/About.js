import React from 'react'
import './About.css'
import hotelVideo from '../../imgs/video.mp4'
import {Link} from 'react-router-dom'
import MyFooter from '../../components/Footer/MyFooter'
import MyCopyright from '../../components/Copyright/MyCopyright'

const About = () => {
    return (
        <div>
            <section class="heading">
                <video autoPlay loop class="video-background" muted plays-inline>
                    <source src={hotelVideo} type="video/mp4" />
                </video>

                <center>
                    <div class="welcome-msg ">
                        <h1> About SNG Hotels </h1>
                        <p>
                            SNG Hotels, is an Indian hospitality chain of leased and franchised hotels, homes and living spaces.
                            Founded in 2020 by Vineet Kumar, SNG initially consisted mainly of budget hotels. The startup expanded
                            globally with thousands of hotels, vacation homes and millions of rooms in India, Malaysia, UAE, Nepal, China,
                            Brazil, Mexico, UK, Philippines, Japan, Saudi Arabia, Sri Lanka, Indonesia, Vietnam, the United States and more.

                            Nestled beside an 18-hole golf course minutes from the slopes, Hotel Park City is consistently acclaimed among the best hotels
                            in Park City, Utah. Among our most recent accolades, our AAA Four Diamond resort has proudly been rated a “Top Ski Hotel” by Conde
                            Nast Traveler, and our Ruth’s Chris Steak House is the #1 rated Ruth’s Chris Steak House in the western U.S. 
                        </p>
                       <Link to="rooms"> <a class="btn btn-book btna"> Book Room </a> </Link>
                       <Link to="/"> <a class="btn btn-home btna"> Return to Home</a></Link>
                    </div>

                </center>
            </section>
            <MyFooter/>
            <MyCopyright/>
        </div>
    )
}

export default About
