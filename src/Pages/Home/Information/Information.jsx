import React from 'react';
import { BsCalendar2DayFill } from "react-icons/bs";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdAddLocationAlt } from "react-icons/md";



const Information = () => {
    return (
        <div className='max-w-7xl mx-auto bg-black  text-white  my-6 px-8 py-16 rounded-lg '>
            <div className='flex  justify-around'>
                <div className='flex items-center gap-4 '>
                    <div><BsCalendar2DayFill className='text-3xl text-[#FF3811]' /></div>
                    <div>
                        <p>We are open monday-friday</p>
                        <h2>7:00 am - 9:00 pm</h2>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div><FaPhoneVolume className='text-3xl text-[#FF3811]' /></div>
                    <div>
                        <p>Have a question?</p>
                        <h2>+2546 251 2658</h2>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <div><MdAddLocationAlt className='text-3xl text-[#FF3811]' /></div>
                    <div>
                        <p>Need a repair? our address</p>
                        <h2>Liza Street, New York</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Information;