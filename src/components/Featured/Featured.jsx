import React from 'react';
import './Featured.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Featured = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className='xl:mx-24'>
            <Carousel responsive={responsive}>
                <div>amt moner amush elo sone</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
                <div>Item 4</div>
                <div>Item 4</div>
                <div>Item 4</div>
                <div>Item 4</div>
                <div>Item 4</div>
                <div>Item 4</div>
                <div>Item 4</div>
                <div>Item 4</div>
            </Carousel>
        </div>
    );
};

export default Featured;