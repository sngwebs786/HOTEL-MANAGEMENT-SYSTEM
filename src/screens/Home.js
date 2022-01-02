import React from 'react'
import ContactUs from '../components/ContactUs';
import CopyrightBar from '../components/CopyrightBar';
import MyHotelCards from '../components/MyHotelCards';
import MyNavbar from '../components/MyNavbar';
import MySlider from '../components/MySlider';
import SearchRoom from '../components/SearchRoom';

const Home = () => {
    return (
        <div>
            <MyNavbar/>
            <MySlider/>
            <MyHotelCards/>
            {/* <SearchRoom/> */}
            <ContactUs/>
            <CopyrightBar/>
        </div>
    )
}

export default Home
