import React from 'react';
import TopHeader from '../components/TopHeader/TopHeader';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const Main = () => {
    return (
        <div>
            <TopHeader></TopHeader>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;