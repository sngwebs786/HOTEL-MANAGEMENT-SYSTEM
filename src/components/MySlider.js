import React from 'react'
import hotel1 from '../imgs/hotel1.jpg'
import hotel2 from '../imgs/hotel2.jpg'
import hotel3 from '../imgs/hotel3.jpg'
import hotel4 from '../imgs/hotel4.jpg'

const MySlider = () => {
    return (
        <div>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100 hotel-slider-imgs" src={hotel3} alt="First slide"/>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 hotel-slider-imgs" src={hotel1} alt="Second slide"/>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 hotel-slider-imgs" src={hotel4} alt="Third slide"/>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100 hotel-slider-imgs" src={hotel2} alt="Third slide"/>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default MySlider
