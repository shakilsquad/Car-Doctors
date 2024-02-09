import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
    const [Products, setProduct] = useState([]);
    useEffect(() => {
        fetch('Products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <div className='pt-8'>
            <div>
                <h3 className="text-xl text-[#FF3811] text-center font-bold">Popular Products</h3>
                <h1 className="text-5xl font-bold text-center">Browse Our Products</h1>
                <p className='text-center pt-4 font-semibold'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            Products.map( product => <ProductCard
                            key={product._id}
                            product={product}
                            ></ProductCard>)
                        }
                </div>
            </div>
        </div>
    );
};

export default Products;