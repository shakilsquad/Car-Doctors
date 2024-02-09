import React from 'react';

const ChooseUs = () => {
    return (
        <div className='my-10 py-6 '>
            <div>
                <h3 className="text-center text-2xl text-[#FF3911] font-bold">Core Features</h3>
                <h2 className="text-center text-5xl font-bold">Why Choose Us</h2>
                <p className="text-center text-sm font-semibold pt-4">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
                <div className='flex justify-between pt-8 '>
                    <div className='flex flex-col items-center justify-center cursor-pointer  hover:text-white hover:bg-[#FF3811] duration-500 space-y-2 rounded-lg text-center p-5 border border-[#E8E8E8] '>
                        <img src="https://i.ibb.co/Q6yrKPX/Group-71-removebg-preview.png" className='w-[50px] h-[50px]' alt="" />
                        <h3 className='text-sm font-semibold'>Expert Team</h3>
                    </div>
                    <div className='flex flex-col justify-center  cursor-pointer items-center bg-[#FF3811] text-white hover:bg-[#FF3811] duration-500 space-y-2 rounded-lg text-center p-5 border border-[#E8E8E8] '>
                        <img src="https://i.ibb.co/vzz1j4z/Group-38729.png" className='w-[50px] h-[50px]'  alt="" />
                        <h3 className='text-sm font-semibold'>Timely Delivery</h3>
                    </div>
                    <div className='flex flex-col items-center justify-center cursor-pointer  hover:text-white hover:bg-[#FF3811] duration-500 space-y-2 rounded-lg text-center p-5 border border-[#E8E8E8] '>
                        <img src="https://i.ibb.co/HTdjBjW/Group.png" className='w-[50px] h-[50px]' alt="" />
                        <h3 className='text-sm font-semibold'>24/7 Support</h3>
                    </div>
                    <div className='flex flex-col items-center justify-center  cursor-pointer  hover:text-white hover:bg-[#FF3811] duration-500 space-y-2 rounded-lg text-center p-5 border border-[#E8E8E8] '>
                        <img src="https://i.ibb.co/8jXZZPK/Wrench.png" className='w-[50px] h-[50px]' alt="" />
                        <h3 className='text-sm font-semibold'>Best Equipment</h3>
                    </div>
                    <div className=' flex flex-col items-center justify-center cursor-pointer  hover:text-white hover:bg-[#FF3811] duration-500 space-y-2 rounded-lg text-center p-5 border border-[#E8E8E8] '>
                        <img src="https://i.ibb.co/vYrc2rc/Group-38730.png" className='w-[50px] h-[50px]' alt="" />
                        <h3 className='text-sm font-semibold'>100% Guranty</h3>
                    </div>
                    <div className='flex flex-col items-center justify-center  cursor-pointer  hover:text-white hover:bg-[#FF3811] duration-500 space-y-2 rounded-lg text-center p-5 border border-[#E8E8E8] '>
                        <img src="https://i.ibb.co/4t5PSc6/Group-38731-removebg-preview.png" className='w-[50px] h-[50px]' alt="" />
                        <h3 className='text-sm font-semibold'>Timely Delivery</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;