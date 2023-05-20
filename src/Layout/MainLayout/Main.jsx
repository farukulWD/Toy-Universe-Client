import React from 'react';
import Menubar from '../../Component/Menubar/Menubar';
import { Outlet } from 'react-router';
import Footer from '../../Component/Footer/Footer';

const Main = () => {
    return (
        <div className='max-w-[1300px] px-2 mx-auto'>
            <Menubar></Menubar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;