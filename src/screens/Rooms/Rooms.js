import React from 'react'
import MyCarousel from '../../components/Carousel/MyCarousel'
import MyCopyright from '../../components/Copyright/MyCopyright'
import MyFooter from '../../components/Footer/MyFooter'
import SearchRooms from './SearchRooms'

const Rooms = () => {
    return (
        <div>
            <MyCarousel title="Book Your Room" subtitle="As per your choice.."/>
            <SearchRooms/>
            <MyFooter/>
            <MyCopyright/>
        </div>
    )
}

export default Rooms



