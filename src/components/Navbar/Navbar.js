import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { UserContext } from '../../App';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/home">Aircraft Service System</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto ">
                        <Link to = "/home" className="nav-link active" href="#">Home <span className="sr-only">(current)</span></Link>
                        <Link to = "/home" className="nav-link" >Services</Link>
                        <Link to = "/home" className="nav-link" >Trips</Link>
                        <Link to = "/admin" className="nav-link" >Admin</Link>
                        <Link to = "/login" className="btn btn-outline-success my-2 my-sm-0" >{loggedInUser.email ? loggedInUser.name : "Sign up"}</Link>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;