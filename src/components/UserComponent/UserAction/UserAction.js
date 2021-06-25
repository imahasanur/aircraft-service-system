import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import BookingState from '../BookingState/BookingState';
import Booking from '../Booking/Booking';
import './UserAction.css';

const UserAction = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedOption, setSelectedOption] = useState("booking")
    let {bookingId} = useParams();
    // useEffect(()=>{
    //     fetch(`https://quiet-peak-36784.herokuapp.com/isAStudent?email=${loggedInUser.email}&designation=${designation}`)
    //     .then( res => res.json())
    //     .then( data => {
    //         if(data.length === 0){
    //             console.log("inside");
    //             alert("Hey !! You are not a student")
    //             window.location.reload(false);
    //         }
    //     })

    // },[])

    return (
        <div className="user-container">
            <div className="user-sidebar">
                <h6>{loggedInUser.name}</h6>
                <ul>
                    <li  onClick={()=> setSelectedOption("booking")}>Booking</li>
                    <li  onClick={()=> setSelectedOption("booking-state")}>All Bookings</li>
                </ul>
            </div>
            <div className="user-action-container">
                {selectedOption === "booking" && <Booking bookingId={bookingId}></Booking>}
                {selectedOption === "booking-state" && <BookingState></BookingState> }

            </div>           
        </div>
    );
};

export default UserAction;