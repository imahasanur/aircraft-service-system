import React, { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import tickets from '../../../fakeData/tickets';
import { useForm } from "react-hook-form";
import businessTickets from "../../../fakeData/businessTickets";
import economicTickets from "../../../fakeData/economicTickets";
import StripeCard from '../StripeCard/StripeCard';

const stripePromise = loadStripe("pk_test_51IhI5zBZhWQhSLfZfr3c5CWf7nUS49BK7hGQlZ56KfAqpQPTbw7lo2jgd1GZqcQZzTqtIgmRv9t48EMLbchIdVCQ00uWUD26I1");
const Booking = ({bookingId}) => {
    const { register, handleSubmit } = useForm();
    const [bookingTicket, setBookingTicket] = useState([]);
    const [selectedDate, setSelectedDate] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState(null)
    const [selectedTicketTwo, setSelectedTicketTwo] = useState(null)
    const [selectedTicketThree, setSelectedTicketThree] = useState(null)
    const [selectedTicketFour, setSelectedTicketFour] = useState(null)

    const onSubmit = data =>{
        console.log(data);
    } 

    useEffect(()=>{
        let ticket;
        ticket = tickets.map(ticket => {
            if(ticket.id === parseInt(bookingId)){
                console.log(ticket);
                return ticket;
            }
    
        })
        setBookingTicket(ticket);
    },[])

    return (
        <div>
            <h2 className="text-center text-decoration-underline">Current Booking</h2>
            <div className="row p-1">
                <div className="offset-1 col-10 col-sm-7 col-md-6">
                    <div className="card p-1" style={{background:"skyblue",color:'blue'}}>
                        <h3> {bookingTicket[0]?.from} to {bookingTicket[0]?.to}</h3>
                        <h4>Trip: {bookingTicket[0]?.trip}</h4>
                        <h5>Depart: {bookingTicket[0]?.depart}</h5>
                        <p></p>
                    </div>
                </div>
            </div>
            <div className="row p-1">
                <div className="offset-1 col-10 col-sm-8 col-md-7">
                    <form onSubmit={handleSubmit(onSubmit)}>
                                
                        <div> <input onClick={()=>setSelectedDate(true)} type="date" {...register("date")} placeholder="xx/mm/yy" required className="m-1"  /> </div>                 
                        {selectedDate === true && <div onClick={()=>setSelectedTicket("1")}> <select {...register("ticket1")} className="m-1" >
                            {businessTickets.map(seat =><option value={`${seat}`}>{seat} --Business</option> )}
                            {economicTickets.map(seat =><option value={`${seat}`}>{seat} --Economic</option> )}
                        </select> </div> }
                        {selectedTicket === "1" && <div onClick={()=>setSelectedTicketTwo("2")}> <select {...register("ticket2")} className="m-1" >
                            {businessTickets.map(seat =><option value={`${seat}`}>{seat} --Business</option> )}
                            {economicTickets.map(seat =><option value={`${seat}`}>{seat} --Economic</option> )}
                        </select> </div> }
                        {selectedTicketTwo === "2" && <div onClick={()=>setSelectedTicketThree("3")}> <select {...register("ticket3")} className="m-1" >
                            {businessTickets.map(seat =><option value={`${seat}`}>{seat} --Business</option> )}
                            {economicTickets.map(seat =><option value={`${seat}`}>{seat} --Economic</option> )}
                        </select> </div> }
                        {selectedTicketThree === "3" && <div onClick={()=>setSelectedTicketFour("4")}> <select {...register("ticket4")} className="m-1" >
                            {businessTickets.map(seat =><option value={`${seat}`}>{seat} --Business</option> )}
                            {economicTickets.map(seat =><option value={`${seat}`}>{seat} --Economic</option> )}
                        </select> </div> }
                        {selectedTicketFour === "4" && <div > <select {...register("ticket5")} className="m-1" >
                            {businessTickets.map(seat =><option value={`${seat}`}>{seat} --Business</option> )}
                            {economicTickets.map(seat =><option value={`${seat}`}>{seat} --Economic</option> )}
                        </select> </div> }
                        {selectedDate === true && <div className="p-2">
                            <p><small>pay with</small></p>
                            <input className="" type="radio" defaultValue="stripe" {...register("payWith")}  id="flexRadioDefault1" required />
                            <label className="form-check-label" for="flexRadioDefault1">
                            stripe
                            </label>
                        </div>}
                        {selectedDate === true && <div className="row p-2">
                            <div className="col-8 col-sm-5 col-md-7">
                                <Elements stripe={stripePromise}>
                                <StripeCard></StripeCard>
                                </Elements>
                            </div>
                        </div>}
                        <input type="submit" value="Book" className="m-1" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Booking;
