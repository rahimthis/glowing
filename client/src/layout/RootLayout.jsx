import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';

const RootLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default RootLayout;