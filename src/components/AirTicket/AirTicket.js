import React from 'react';
import {Link} from 'react-router-dom';

const AirTicket = ({ticket}) => {
    const {id, from, to , trip, businessPrice, economicPrice, depart} = ticket;

    return (
        <div className = "offset-1 col-md-3 col-sm-5 col-8 p-1">
            <div class="card" style={{minHeight:"200px", backgroundColor:"blue", color:"white"}}>
                <div class="card-body">
                    <h4 class="card-title">{from} to</h4>
                    <h5 class="card-subtitle mb-2 ">{to}</h5>
                    <h6 class="card-subtitle mb-2 ">Depart: {depart}</h6>
                    <h6>Trip:{trip}</h6>
                    <p class="card-text">Business class:{businessPrice}$</p>
                    <p class="card-text">Economic class:{economicPrice}$</p>
                    <Link to= {`booking/${id}`} class="btn btn-light">Book Now!</Link>
                </div>
            </div>
            
        </div>
    );
};

export default AirTicket;