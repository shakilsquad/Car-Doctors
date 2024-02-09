import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[500px] rounded-lg">
                <div id="slide1" className="carousel-item relative w-full  ">
                    <img src="https://i.ibb.co/qWmtjTk/5.jpg" className="w-full object-cover" />
                    <div className="absolute flex items-center  h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  left-0  top-0   ">
                        <div className=' text-white space-y-5 pl-[100px] w-1/2'>
                            <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='space-x-3'>
                                <button class="py-3 px3 p-3 bg-[#FF3811] rounded-sm ">Discover More</button>
                                <button className="py-3 px3 p-3 border-white border-2 rounded-sm ">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex gap-3 transform -translate-y-1/2  right-6 bottom-5">
                        <a href="#slide4" className="btn btn-circle bg-[#FF3811]">❮</a>
                        <a href="#slide2" className="btn btn-circle   bg-[#FF3811]">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/yNrD940/4.jpg" className="w-full object-cover" />
                    <div className="absolute flex items-center  h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  left-0  top-0   ">
                        <div className=' text-white space-y-5 pl-[100px] w-1/2'>
                            <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='space-x-3'>
                                <button class="py-3 px3 p-3 bg-[#FF3811] rounded-sm ">Discover More</button>
                                <button className="py-3 px3 p-3 border-white border-2 rounded-sm ">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex gap-3 transform -translate-y-1/2  right-6 bottom-5">
                        <a href="#slide1" className="btn btn-circle   bg-[#FF3811]">❮</a>
                        <a href="#slide3" className="btn btn-circle   bg-[#FF3811]">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/j8L3YT3/3.jpg" className="w-full object-cover" />
                    <div className="absolute flex items-center  h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  left-0  top-0   ">
                        <div className=' text-white space-y-5 pl-[100px] w-1/2'>
                            <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='space-x-3'>
                                <button class="py-3 px3 p-3 bg-[#FF3811] rounded-sm ">Discover More</button>
                                <button className="py-3 px3 p-3 border-white border-2 rounded-sm ">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex gap-3 transform -translate-y-1/2  right-6 bottom-5">
                        <a href="#slide2" className="btn btn-circle   bg-[#FF3811]">❮</a>
                        <a href="#slide4" className="btn btn-circle   bg-[#FF3811]">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/cx4ks4v/2.jpg" className="w-full object-center " />
                    <div className="absolute flex items-center  h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  left-0  top-0   ">
                        <div className=' text-white space-y-5 pl-[100px] w-1/2'>
                            <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div className='space-x-3'>
                                <button class="py-3 px3 p-3 bg-[#FF3811] rounded-sm ">Discover More</button>
                                <button className="py-3 px3 p-3 border-white border-2 rounded-sm ">Latest Project</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex gap-3 transform -translate-y-1/2  right-6 bottom-5">
                        <a href="#slide3" className="btn btn-circle   bg-[#FF3811]">❮</a>
                        <a href="#slide1" className="btn btn-circle   bg-[#FF3811]">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;