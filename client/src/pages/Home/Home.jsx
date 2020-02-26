import React from 'react';

import './Home.scss'
import {Header, Advantages, About, Pricing} from './HomePageParts/'

export const Home = () => {
    return (
        <>
            <Header />
            <Advantages />
            <About />
            <Pricing />
        </>
    )
}