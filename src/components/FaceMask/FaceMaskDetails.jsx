import { Rating } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const FaceMaskDetails = ({ medical }) => {

    const { name, image, rating, price, priceOff, id } = medical;

    return (
        <div>
            <div className="border-solid border-1 border-gray-200">
                <div className="">
                    <img src={image} alt="" />
                </div>
                <div className="text-start px-3">
                    <Link to={`/product/${id}`}><h3 className='hover:text-blue-700'>{name}</h3></Link>
                    <span className='mt-6'><Rating className='mt-2' name="read-only" value={rating} readOnly /></span>
                    <div className='flex pb-2'>
                        <h4 className='font-bold'>${price}</h4>
                        <h4 className='ml-2 line-through'>${priceOff}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FaceMaskDetails;