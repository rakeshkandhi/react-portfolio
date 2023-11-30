import React from 'react';
import { FaBars, FaIcons } from 'react-icons/fa';
const NavBar = () => {
    return (
        <div className='flex justify-between items-center w-full h-20  text-white px-4 bg-black fixed '>
            <div>
                <h1 className='text-6xl font-signature ml-2'>Rakhi</h1>
            </div>
        </div>
    );
};

export default NavBar;
