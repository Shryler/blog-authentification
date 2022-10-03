import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (<>
        <div className='container text-center p-2 d-flex w-25 justify-content-around'>
            <Link to="/" className="nav-link p-1"><button className='btn btn-primary'>Home</button></Link>
            <Link to="/login" className="nav-link p-1"><button className='btn btn-primary'>Login</button></Link>
            <Link to="/admin" className="nav-link p-1"><button className='btn btn-primary'>Admin</button></Link>
            <Link to="/logged" className="nav-link p-1"><button className='btn btn-primary'>Logged</button></Link>
            <Link to="/account" className="nav-link p-1"><button className='btn btn-primary'>Account</button></Link>
        </div>
    </>
    );
}

export default NavBar;