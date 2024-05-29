import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './ProductDetails.css'
import { Rating } from '@mui/material';

const ProductDetails = () => {
    const product = useLoaderData()
    const { name, image, rating, price } = product;
    console.log(product)
    return (
        <div>
            <div className="product-container ">
                <div className="xl:mx-24">
                    <h3 className='xl:pt-20 text-5xl font-size font-bold'>{name}</h3>
                    <div className='flex text-xl mt-4'>
                        <Link to={`/`} className='mr-2'>Home</Link> >
                        <p className='text-blue-500 ml-2'>Product</p>
                    </div>
                </div>
            </div>
            <div className="xl:mx-24 mt-20">
                <div className="grid xl:grid-cols-2 gap-10">
                    <div className="border-solid border-2 border-gray-200">
                        <img src={image} alt="" />
                    </div>
                    <div className="">
                        <h3 className='text-4xl font-bold font-size'>{name}</h3>
                        <span className='mt-20'><Rating name="read-only" className='mt-4' value={rating} readOnly /></span>
                        <h3 className='font-bold text-2xl text-blue-600'>${price}</h3>
                        <p className='mt-2'>I have been a loyal customer of this auto parts company for years and I cannot recommend them enough. Their extensive selection of high-quality parts and accessories.</p>
                        <form>
                            <fieldset class="forced-color-adjust-none lg:forced-color-adjust-auto ...">
                                <legend>Choose a color:</legend>
                                <select class="hidden lg:block">
                                    <option value="White">White</option>
                                    <option value="Gray">Gray</option>
                                    <option value="Black">Black</option>
                                </select>
                                <div class="lg:hidden">
                                    <label>
                                        <input class="sr-only" type="radio" name="color-choice" value="White" />
                                        
                                    </label>
                                    
                                </div>
                            </fieldset>
                        </form>
                    </div>
                    <div className="">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;