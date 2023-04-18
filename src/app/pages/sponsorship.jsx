import {Header} from "../components/header";
import {Footer} from "../components/footer";
import React from "react";
import {Slide} from "react-slideshow-image";

export const Sponsorship = () => {

    let proprieties = {
        infinite: true,
        duration: 1000,
        transitionDuration: 10000,
        arrows: false
    };

    return (<>
        <Header active={"sponsorship"} />

        <div className={`flex h-[560px] bg-red-200`}>
            <Slide {...proprieties} >
                <div className="text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi commodi dolor earum, et fuga fugiat libero maiores minus obcaecati possimus quibusdam quidem ratione sint tempore voluptas voluptatem? Labore, saepe!</div>
            </Slide>
        </div>


        <Footer />
    </>)
}