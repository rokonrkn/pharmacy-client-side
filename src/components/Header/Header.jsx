import React from 'react';
import './Header.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';

const Header = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <div>
            <div className="xl:mx-20">
                {['md'].map((expand) => (
                    <Navbar key={expand} expand={expand} className=" mb-3">
                        <Container fluid>
                            <div>
                                <Button 
                                className='flex text-xl'
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    Browse categorys <span className='ml-4'><AiOutlineMenuFold className='mt-1 w-9 h-6' /></span>
                                </Button>
                                <Menu
                                className=''
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem className='w-56' onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                                </Menu>
                            </div>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                            <Navbar.Offcanvas
                                id={`offcanvasNavbar-expand-${expand}`}
                                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                placement="end"
                            >
                                {/* <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                        Offcanvas
                                    </Offcanvas.Title>
                                </Offcanvas.Header> */}
                                <Offcanvas.Body>
                                    <Nav className="justify-content-center items-center flex-grow-1 pe-3">
                                        <Link><Nav className='ml-2 '>Home</Nav></Link>
                                        <Link><Nav className='ml-2 '>Shop</Nav></Link>
                                        <Link><Nav className='ml-2 '>Pages</Nav></Link>
                                        <Link><Nav className='ml-2 '>Blog</Nav></Link>
                                        <Link><Nav className='ml-2 '>Contact</Nav></Link>
                                        {/* <Nav href="#action2">Link</Nav> */}
                                    </Nav>
                                    <div className="flex">
                                        <div className=""><FaRegUser className='text-2xl' /></div>
                                        <Link><span className='ml-2'>Sign in</span></Link>
                                    </div>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                ))}
            </div>
        </div>
    )
}

export default Header;