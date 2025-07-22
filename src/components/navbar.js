import React from 'react';
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className="navbar bg-[#0a0a0a]/90 backdrop-blur-md shadow-lg">
            <div className="flex-1">
                <a className="btn btn-ghost">
                    <img 
                        src="/logo_letters_inv_rem.png" 
                        alt="JR Logo"
                        className="h-16"
                    />
                </a>
            </div>
            <div className="flex-[3] flex justify-center items-center">
                <ul className="menu menu-horizontal gap-12">
                    <li><a className="text-xl !text-white font-extrabold tracking-tight hover:!text-primary">Experience</a></li>
                    <li><a className="text-xl !text-white font-extrabold tracking-tight hover:!text-primary">Projects</a></li>
                    <li><a className="text-xl !text-white font-extrabold tracking-tight hover:!text-primary">About me</a></li>
                </ul>
            </div>
            <div className="flex-1 flex justify-end">
                <button 
                    className="btn bg-blue-600 hover:bg-blue-700 border-none text-xl font-extrabold tracking-tight text-white"
                    style={{ marginRight: '16px', paddingLeft: '12px', paddingRight: '12px' }}
                >
                    Book a call!
                </button>
            </div>
        </div>
    );
};

export default Navbar;