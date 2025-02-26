import React from "react";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import Testimonial from "./Testimonial";
import Work from "./Work";

const LandingPages = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <About />
            <Work />
            <Testimonial />
            <Contact />
            <Footer />
        </div>
    );
};

export default LandingPages;