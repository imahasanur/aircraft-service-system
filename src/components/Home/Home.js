import React from 'react';
import Navbar from '../Navbar/Navbar';
import LogIn from '../LogIn/LogIn';
import Footer from '../Footer/Footer';
import TicketCounter from '../TicketCounter/TicketCounter';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <TicketCounter></TicketCounter>
            <Footer></Footer>
        </div>
    );
};

export default Home;