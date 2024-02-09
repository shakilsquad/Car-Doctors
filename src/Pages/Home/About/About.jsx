import React from 'react';

const About = () => {
    return (
        <div className=''>
            <div className="hero py-4 ">
                <div className="hero-content flex gap-6">
                    <div className="flex-1 relative">
                        <img className='rounded-lg  w-3/4' src="https://i.ibb.co/6mPHfK4/person.jpg" alt="" />
                        <img className='rounded-lg right-[60px] top-[150px] absolute w-1/2 border-7 border-white ' src="https://i.ibb.co/Sm4QK9y/parts.jpg" alt="" />
                    </div>
                    <div className=" flex-1 space-y-2 ">
                            <h3 className='text-[#FF3811] font-bold text-base'>About Us</h3>
                            <h1 className='text-[45px] font-bold text-[#151515] '>We are qualified & of experience in this field</h1>
                            <p className='pb-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                            <button class="py-3 px3 p-3 bg-[#FF3811] rounded-lg  text-[#FFFFFF]  ">Discover More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;