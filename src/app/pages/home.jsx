import React from "react";
import {Header} from "../components/header";
import {Footer} from "../components/footer";
import About from "../components/home/about";
import {Marketplace} from "../components/home/marketplace";
import {Sponsorship} from "../components/home/sponsorship";
import Blog from "../components/home/blog";
import {Contact} from "../components/contact";
import {GoTop} from "../components/goTop";
import {Cover} from "../components/home/cover";


export const Home = () => {


    return (<div className={``}>

        {/* Header */}
        <Header active={"home"} />

        {/* Cover */}
        <Cover />

        {/* About us */}
        <About />

        {/* Marketplace */}
        <Marketplace />

        {/* Sponsorship */}
        <Sponsorship />

        {/* Blog */}
        <Blog />

        {/* Contact*/}
        <Contact />

        {/* Footer */}
        <Footer />

        {/* GO top button*/}
        <GoTop />

    </div>)
}