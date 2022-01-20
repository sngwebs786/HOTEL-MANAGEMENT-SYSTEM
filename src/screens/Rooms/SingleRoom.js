import React from 'react'
import MyCarousel from '../../components/Carousel/MyCarousel'
import card5 from '../../imgs/card5.jpg';
import card2 from '../../imgs/card2.jpg';
import card3 from '../../imgs/card3.jpg';
import './Rooms.css'
import { Link, useParams } from "react-router-dom";
import MyFooter from '../../components/Footer/MyFooter';
import MyCopyright from '../../components/Copyright/MyCopyright';
import { child, get, ref, set } from "firebase/database";
import { getDatabase } from "firebase/database";
import { useEffect } from 'react';



const roomsDetails = [{
    single: {
        capacity: 1,
        breakfast: "included",
        price: 1200,
        pets: "allowed",
        roomtype: "single",
        size:"250 sqft"
    },
    double: {
        capacity: 2,
        breakfast: "included",
        price: 2400,
        pets: "allowed",
        roomtype: "double",
        size:"500 sqft"

    },
    family: {
        capacity: 6,
        breakfast: "not included",
        price: 3500,
        pets: "not allowed",
        roomtype: "family",
        size:"750 sqft"

    },
    presidential: {
        capacity: 4,
        breakfast: "included",
        price: 4300,
        pets: "not allowed",
        roomtype: "presidential",
        size:"1000 sqft"

    }
}]


const SingleRoom = () => {

    const { roomType } = useParams();
    // const [roomState, setRoomState] = React.useState()
    // const [roomData, setRoomData] = React.useState()
    // var newa;
    // const db = getDatabase();
    // useEffect(() => {

    //     console.log(roomType)
    //     setRoomState(roomType)
    //     console.log(roomState)
    //     get(child(ref(db), "/rooms")).then((data) => {
    //         const dataa = Object.values(data.val())
    //         console.log(data.val()[roomType])
    //         let newvar = data.val()[roomType]
    //         setRoomData((roomData)=>({...roomData,newvar}));
    //         console.log(roomData)
    //         // console.log(data)
    //     })

    // }, [])

    //database

    // const Breakfast = roomData.newvar.breakfast
    // console.log(Breakfast)
    // console.log("xhl rgha")
    //       const userAuth = Object.values(data.val()).filter(
    //         (item) => item.email === email && item.isAdmin === false
    //       );
    //       if (userAuth[0]) {
    //         return signInWithEmailAndPassword(auth, email, password);
    //       }
    //       alert("Please Sign in with User Account.");
    //     return signInWithEmailAndPassword(auth, email, password);
    // });
console.log(roomType)
    var myVar;

    if (roomType == "single") {

        myVar = roomsDetails[0].single
console.log(myVar)
    }
    else if (roomType == "double") {

        myVar = roomsDetails[0].double

    }

    else if (roomType == "family") {

        myVar = roomsDetails[0].family

    }

    else if (roomType == "presidential") {

        myVar = roomsDetails[0].presidential

    }

    return (
        <div>
            <MyCarousel title={`${roomType} Room`} />
            <center>
                <h1 className='room-details-heading'>Details of {myVar.roomtype}  room</h1>
            </center>
            <div className='singleRoom-cards'>
                <div class="card">
                    <img class="card-img-top" src={card5} alt="Card image cap" />
                </div>

                <div class="card">
                    <img class="card-img-top" src={card2} alt="Card image cap" />
                </div>

                <div class="card">
                    <img class="card-img-top" src={card3} alt="Card image cap" />
                </div>


            </div>



            <div className='single-room-detail'>
                <div className='single-room-detail-para'>

                    <h1>Details</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorum fuga adipisci ullam quibusdam, doloribus aspernatur molestias, nam voluptatibus tenetur expedita maiores. Aut veritatis iste dolorum, modi aliquid dicta voluptatum.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorum fuga adipisci ullam quibusdam, doloribus aspernatur molestias, nam voluptatibus tenetur expedita maiores. Aut veritatis iste dolorum, modi aliquid dicta voluptatum.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorum fuga adipisci ullam quibusdam, doloribus aspernatur molestias, nam voluptatibus tenetur expedita maiores. Aut veritatis iste dolorum, modi aliquid dicta voluptatum.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolorum fuga adipisci ullam quibusdam, doloribus aspernatur molestias, nam voluptatibus tenetur expedita maiores. Aut veritatis iste dolorum, modi aliquid dicta voluptatum.
                    </p>
                </div>


                <div className='single-room-detail-list'>
                    <h1>Info</h1>

                    <p>Price : Rs {myVar.price} <br /> <br />
                        Size :{myVar.size} <br /> <br />
                        Max Capacity :  {myVar.capacity} Person <br /> <br />
                        Pets:  {myVar.pets} <br /> <br />
                        Free Breakfast: {myVar.breakfast} <br /> <br />

                    </p>
                </div>
            </div>


            <div className='single-room-detail'>
                <div className='single-room-detail-list2 '>

                    <h1>Extras</h1>
                    <p>"Plush pillows and breathable bed linens" <br />
                        "Soft Towel" <br />
                        "AC" <br />
                    </p>

                </div>

                <div className='single-room-detail-list2'>
                    <h1 className='white'> Extras</h1>

                    <p>"Comfortable Beds" <br />
                        "Amazing view" <br />
                        "Internet" <br />
                    </p>

                </div>

                <div className='single-room-detail-list2'>
                    <h1 className='white'>Extras</h1>

                    <p>"Plush pillows and breathable bed linens" <br />
                        Complimentary refreshments <br />
                        "Adequate safety/security" <br />
                    </p>

                </div>


            </div>

            
            <center>
                <div>
                    <Link to={`/booknow/${roomType}`}><button className='btn bookNow-btn'>Book Now</button></Link>
                </div>
            </center>


            <MyFooter />
            <MyCopyright />
        </div>
    )
}

export default SingleRoom;