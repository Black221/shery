import {Slide} from "react-slideshow-image";
import React from "react";


export const Cover = () => {

    let proprieties = {
        infinite: true,
        duration: 0,
        transitionDuration: 10000,
        arrows: false
    };

    return (
        <div className={`flex h-[560px] bg-red-200`}>
            <Slide {...proprieties} >
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </Slide>
        </div>
    )
}