import React from 'react';
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


const Testimonial = () => {

    const data = [
        {
            img: 'https://i.ibb.co/ZfxDcmP/Rectangle-7.png',
            name: 'Car Engine Plug',
            title: 'Engine Expert',
            facebook: 'https://www.facebook.com/johndoe',
            instagram: 'https://www.instagram.com/johndoe',
            twitter: 'https://www.twitter.com/johndoe',
            linkedin: 'https://www.linkedin.com/in/johndoe',
        },
        {
            img: 'https://i.ibb.co/n3k7fzd/Rectangle-7-1.png',
            name: 'Car Engine Plug',
            title: 'Engine Expert',
            facebook: 'https://www.facebook.com/johndoe',
            instagram: 'https://www.instagram.com/johndoe',
            twitter: 'https://www.twitter.com/johndoe',
            linkedin: 'https://www.linkedin.com/in/johndoe',
        },
        {
            img: 'https://i.ibb.co/zXKMzBx/Rectangle-7-2.png',
            name: 'Car Engine Plug',
            title: 'Engine Expert',
            facebook: 'https://www.facebook.com/johndoe',
            instagram: 'https://www.instagram.com/johndoe',
            twitter: 'https://www.twitter.com/johndoe',
            linkedin: 'https://www.linkedin.com/in/johndoe',
        },
        {
            img: 'https://i.ibb.co/ZfxDcmP/Rectangle-7.png',
            name: 'Car Engine Plug',
            title: 'Engine Expert',
            facebook: 'https://www.facebook.com/johndoe',
            instagram: 'https://www.instagram.com/johndoe',
            twitter: 'https://www.twitter.com/johndoe',
            linkedin: 'https://www.linkedin.com/in/johndoe',
        },
        {
            img: 'https://i.ibb.co/n3k7fzd/Rectangle-7-1.png',
            name: 'Car Engine Plug',
            title: 'Engine Expert',
            facebook: 'https://www.facebook.com/johndoe',
            instagram: 'https://www.instagram.com/johndoe',
            twitter: 'https://www.twitter.com/johndoe',
            linkedin: 'https://www.linkedin.com/in/johndoe',
        },
        {
            img: 'https://i.ibb.co/zXKMzBx/Rectangle-7-2.png',
            name: 'Car Engine Plug',
            title: 'Engine Expert',
            facebook: 'https://www.facebook.com/johndoe',
            instagram: 'https://www.instagram.com/johndoe',
            twitter: 'https://www.twitter.com/johndoe',
            linkedin: 'https://www.linkedin.com/in/johndoe',
        },
        {
            img: 'https://i.ibb.co/ZfxDcmP/Rectangle-7.png',
            name: 'Car Engine Plug',
            title: 'Engine Expert',
            facebook: 'https://www.facebook.com/johndoe',
            instagram: 'https://www.instagram.com/johndoe',
            twitter: 'https://www.twitter.com/johndoe',
            linkedin: 'https://www.linkedin.com/in/johndoe',
        },

    ]

    return (
        <div className='my-7 py-6  '>
            <div>
                <h3 className="text-center text-2xl text-[#FF3911] font-bold">Testimonial</h3>
                <h2 className="text-center text-5xl font-bold">What Customer Says</h2>
                <p className="text-center text-sm font-semibold pt-4">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>

                <div className='p-10 flex gap-7'>

                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}  // Adjust the value based on your preference
                        navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            '@0.00': {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            '@0.75': {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            '@1.00': {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            '@1.50': {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        {
                            data.map(cart => <SwiperSlide
                                className='py-[50px]'
                                key={cart.name}
                            >
                                <div className='border border-[#dbd6d6] space-y-6 shadow-sm w-[600px] h-[300px] rounded-lg p-6'>
                                    <div className='flex justify-between gap-4 '>
                                        <img className='rounded-full' src="https://i.ibb.co/CHXpR56/Ellipse-2.png" alt="" />
                                        <div>
                                            <h1 className='text-2xl font-bold '>Awlad Hossain</h1>
                                            <h3 className='text-xl font-semibold text-[#737373]'>Businessman</h3>
                                        </div>
                                        <div>
                                            <img src="https://i.ibb.co/5Knmdvt/quote-1-removebg-preview.png" alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                                    </div>
                                    <div className='flex space-x-1'>
                                        <FaStar className='text-[#FF3811] text-xl' />
                                        <FaStar className='text-[#FF3811] text-xl' />
                                        <FaStar className='text-[#FF3811] text-xl' />
                                        <FaStar className='text-[#FF3811] text-xl' />
                                        <FaStar className='text-[#FF3811] text-xl' />
                                    </div>
                                </div>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;