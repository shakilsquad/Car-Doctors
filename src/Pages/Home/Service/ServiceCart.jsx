import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';


const ServiceCart = ({ service }) => {
    const { img, title,price } = service;
    return (
        <div className='py-6 my-4'>
            <div className="card w-96 border border-gray-300 mb-4 ">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="w-[315px] h-[210px] rounded-xl object-cover " />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{title}</h2>
                    <p></p>
                    <div className=" flex gap-5 justify-between">
                        <h2 className="card-title text-[#FF3811]">Price $ : {price}</h2>
                        <Link to={'/'} className="btn hover:text-[#FF3811] bg-[#FF3811]"><FaArrowRight /></Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCart;