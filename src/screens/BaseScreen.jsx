import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const BaseScreen = () => {
    return (<>
        <NavBar />
        <div className="container">
            <main>
                <Outlet />
            </main>
        </div>
    </>
    );
};

export default BaseScreen;