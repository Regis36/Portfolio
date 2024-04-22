import React from 'react';
import HomePage from './Components/HomePage';
import Navbar from './Components/NavBar';
import About from './Components/AboutMe';
import Experience from './Components/Experience';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

import "./CSS/styles.css"

export default function App() {
    return (
        <>
            <Navbar/>
            <HomePage/>
            <About/>
            <Experience/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </>
    );
}