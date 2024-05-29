import React from 'react';
import './Body.css'
import mask from '../../../public/images/__next_static_media_mask.924f6744.png'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from '@mui/material';
import 'animate.css';
import machine from '../../../public/images/__next_static_media_img-1.bb0ab272.png'
import Marquee from "react-fast-marquee";

const Body = () => {
    return (
        <div >
            <div className="">
                <div className="body-container">
                    <div className="bg-[#ece1f1]">
                        <div className="xl:mx-24 py-12">
                            <div className="text-container">
                                <div className="animate__animated animate__backInLeft ">
                                    <div className="bg-gradient-to-r w-48 rounded-sm px-2 text-white from-indigo-500 via-purple-500 to-pink-500 ...">
                                        100% Premium Quality
                                    </div>
                                    <div className="mt-6">
                                        <h3 className='text-5xl '>New Antibacterial Surgical Mask</h3>
                                        <p className='mt-2 text-gray-600'> when unknown printer took a galley type scramble</p>
                                        <h2 className='mt-2 text-5xl text-[#0d6efd]'>$50.00</h2>
                                    </div>
                                    <div className="mt-10">
                                        <Stack direction="row" spacing={2}>
                                            <Link><Button className='shop' variant="contained">Shop Now</Button></Link>
                                        </Stack>
                                    </div>
                                </div>
                                <div className="animate__animated animate__fadeInDown">
                                    <div className="">
                                        <img className='h-[300px] w-[300px] relative' src={mask} alt="" />
                                    </div>
                                </div>
                                <div className="bg-[#f3a952] animate__animated animate__fadeInDown h-36 w-36 rounded-full flex items-center  absolute xl:ml-[600px]">
                                    <h4 className='text-white text-center uppercase text-xl ml-10 font-bold'>save <br /> 80% of</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#dff8ff]">
                        <div className="xl:mr-20">
                            <div className="text-center py-10 text1-container">
                                <p className='text-xl text-gray-600'>Thermometer</p>
                                <h3 className='text-5xl'>Digital Sx-1R</h3>

                            </div>
                            <div className="text-center">
                                <img className='w-72 ml-20' src={machine} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* marquee  */}
            <div className="xl:mx-24 py-4 marqee-container">
                <Marquee  speed={80} gradient className='text-5xl font-sixe'>
                    DIGITAL PRODUCT MIDMEAL RESOURCES
                </Marquee>
            </div>
        </div>
    );
};

export default Body;