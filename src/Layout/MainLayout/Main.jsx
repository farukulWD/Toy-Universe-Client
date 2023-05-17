import React from 'react';
import Menubar from '../../Component/Menubar/Menubar';

const Main = () => {
    return (
        <div className='max-w-[1280px] mx-auto'>
            <Menubar></Menubar>
            <h2>This is main layout</h2>
        </div>
    );
};

export default Main;