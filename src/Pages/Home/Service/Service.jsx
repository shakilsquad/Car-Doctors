import React, { useEffect, useState } from 'react';
import ServiceCart from './ServiceCart';


const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('Service.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className='my-10 py-6 '>
            <div>
                <h3 className="text-center text-2xl text-orange-600 font-semibold">Service</h3>
                <h2 className="text-center text-4xl font-bold">Our Service Area</h2>
                <p className="text-center text-sm pt-2 font-semibold">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                       {
                        services.map( service => <ServiceCart
                        key={service._id}
                        service={service}
                        ></ServiceCart>)
                       }
                </div>
            </div>
        </div>
    );
};

export default Service;