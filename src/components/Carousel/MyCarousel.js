import React from 'react';
import slider1 from '../../imgs/hotel1.jpg';
import slider2 from '../../imgs/hotel2.jpg';
import slider3 from '../../imgs/hotel3.jpg';
import './MyCarousel.css';
import { Link } from 'react-router-dom'


var sliderStyle1 = {
    backgroundImage: `url(${slider1})`
}

var sliderStyle2 = {
    backgroundImage: `url(${slider2})`
}

var sliderStyle3 = {
    backgroundImage: `url(${slider3})`
}
const MyCarousel = (props) => {

    return (
        <div className="carousel slide" id="carouselExampleIndicators" data-ride="carousel" data-interval='7000'>
            <ol className='carousel-indicators'>
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className='active'></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1" ></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2" ></li>
            </ol>
            <div className='carousel-inner' role="listbox">

                {/* Slide 1 */}

                <div className='carousel-item active' style={sliderStyle1}>
                    <div className='carousel-caption text-center'>
                        <h1>{props.title}</h1>
                        <h3>{props.subtitle}</h3>
                        <Link to="/rooms"><a className='btn btn-outline-light btn-lg carousel-btn'>Our Rooms</a></Link>
                    </div>
                </div>

                {/* Slide 2 */}

                <div className='carousel-item ' style={sliderStyle2}>
                    <div className='carousel-caption text-center'>
                        <h1>{props.title}</h1>
                        <h3>{props.subtitle}</h3>
                        <Link to="/rooms"><a className='btn btn-outline-light btn-lg carousel-btn'>Our Rooms</a></Link>
                    </div>
                </div>

                {/* Slide 3 */}

                <div className='carousel-item' style={sliderStyle3}>
                    <div className='carousel-caption text-center'>
                        <h1>{props.title}</h1>
                        <h3>{props.subtitle}</h3>
                        <Link to="/rooms"><a className='btn btn-outline-light btn-lg carousel-btn'>Our Rooms</a></Link>
                    </div>
                </div>

            </div>

            <a className='carousel-control-prev' href="#carouselExampleIndicators" role="button" data-slide='prev'>
                <span className='carousel-control-prev-icon' aria-hidden="true"></span>
            </a>


            <a className='carousel-control-next' href="#carouselExampleIndicators" role="button" data-slide='next'>
                <span className='carousel-control-next-icon' aria-hidden="true"></span>
            </a>
        </div>
    )
}

export default MyCarousel;