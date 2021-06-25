import React from 'react';
import './TicketCounter.css';
import tickets from '../../fakeData/tickets';
import AirTicket from '../AirTicket/AirTicket';

const TicketCounter = () => {
    return (
        <div className="ticket-counter">
            <div className="">
                <h3 className="text-center text-decoration-underline text-white">Tickets</h3>
                <div className="row container-fluid gx-5">
                    {tickets.map(ticket => <AirTicket ticket = {ticket}></AirTicket>)}
                </div>
            </div>
        </div>
    );
};

export default TicketCounter;