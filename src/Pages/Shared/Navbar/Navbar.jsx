import React from 'react';
import { Link } from 'react-router-dom';
import logo from '..//..//.//.//../assets/logo.svg'

const Navbar = () => {
    const naveItem = <>
        <li className='font-bold '><Link to='/'>Home</Link></li>
        <li className='font-bold '> <Link to="/about">About</Link></li>
        <li className='font-bold '> <Link to="/Services">Services</Link></li>
        <li className='font-bold '> <Link to='/Blog'> Blog</Link></li>
        <li className='font-bold '> <Link to='/Contact'> Contact</Link></li>
    </>

    return (
        <div className='h-28 mb-3'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {naveItem}
                        </ul>
                    </div>
                    <Link to="/" className=" text-xl">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {naveItem}
                    </ul>
                </div>
                <div className="navbar-end">
                <button className="py-3 px3 p-3 border-2 border-[#FF3811] text-[#FF3811] rounded-sm">Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;