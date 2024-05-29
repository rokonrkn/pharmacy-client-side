import React from 'react';
import Body from '../Body/Body';
import PopularCatagorys from '../PopularCatagorys/PopularCatagorys';
import Featured from '../Featured/Featured';

const Home = () => {
    return (
        <div>
            <Body></Body>
            <Featured></Featured>
            <PopularCatagorys></PopularCatagorys>
        </div>
    );
};

export default Home;