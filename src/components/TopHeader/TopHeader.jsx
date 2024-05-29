import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from  '../../../public/__next_static_media_logo.88ea1a63.png'

const TopHeader = () => {
    return (
        <div className="">
            <div className='xl:mx-20'>
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="container">
                        {/* Left side - Logo */}
                        <a className="navbar-brand" href="/">
                            <img src={logo} alt="Logo" height="30" />
                        </a>

                        {/* Center - Search Input */}
                        <form className="form-inline py-2 my-lg-0 mx-auto">
                            <div className="input-group w-96 rounded-full">
                                <input
                                    type="text"
                                    className="form-control bg-light  rounded-full"
                                    placeholder="Search Product"
                                />
                                <div className="input-group-append">
                                    <span className="input-group-text">
                                        <Link><FontAwesomeIcon icon={faSearch} /></Link>
                                    </span>
                                </div>
                            </div>
                        </form>

                        {/* Right side - Add to Cart Icon and Name */}
                        <div className="ml-auto d-flex align-items-center">
                            <span className="mr-3">Card</span>
                            <FontAwesomeIcon icon={faShoppingCart} size="lg" />
                        </div>
                    </div>
                </nav>

            </div>
            <hr />
        </div>
    );
};

export default TopHeader;