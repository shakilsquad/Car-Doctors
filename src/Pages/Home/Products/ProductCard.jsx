import React from 'react';
import { FaStar } from "react-icons/fa";



const ProductCard = ({ product }) => {
    const { title, img, price } = product;
    return (
        <div className='py-6 my-4'>
            <div className="card w-96 border border-gray-300 shadow-sm">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="w-[315px] h-[210px] rounded-xl  " />
                </figure>
                <div className="card-body items-center text-center">
                    <div className='flex space-x-1'>
                        <FaStar className='text-[#FF3811] text-xl' />
                        <FaStar className='text-[#FF3811] text-xl' />
                        <FaStar className='text-[#FF3811] text-xl' />
                        <FaStar className='text-[#FF3811] text-xl' />
                        <FaStar className='text-[#FF3811] text-xl' />
                    </div>
                    <h2 className="card-title text-2xl font-bold">{title}</h2>

                    <div className="card-actions">
                        <button className="text-[#FF3811] font-bold text-xl">$ {price}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;