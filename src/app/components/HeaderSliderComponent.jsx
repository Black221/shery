import {HeaderSlideComponent} from "./HeaderSlideComponent";
import { useEffect, useState} from "react";
import "../styles/Header.css"

export const HeaderSliderComponent = () => {

    const slides = [
        <HeaderSlideComponent
            imgUrl={"assets/bouna.jpg"}
            leftComponent={<div>
                <div></div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias consequatur exercitationem explicabo fugiat magni nobis,
                    pariatur perspiciatis quae quia reiciendis repellat repudiandae
                    sed tenetur unde veniam! Accusamus debitis impedit temporibus.
                </p>
            </div>}
            rightComponent={<div>
                <div></div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias consequatur exercitationem explicabo fugiat magni nobis,
                    pariatur perspiciatis quae quia reiciendis repellat repudiandae
                    sed tenetur unde veniam! Accusamus debitis impedit temporibus.
                </p>
            </div>}/>,
        <HeaderSlideComponent
            imgUrl={"assets/bouna.jpg"}
            leftComponent={<div>bouna b</div>}
            rightComponent={<div>
                <div></div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias consequatur exercitationem explicabo fugiat magni nobis,
                    pariatur perspiciatis quae quia reiciendis repellat repudiandae
                    sed tenetur unde veniam! Accusamus debitis impedit temporibus.
                </p>
            </div>}/>,
        <HeaderSlideComponent
            imgUrl={"assets/bouna.jpg"}
            leftComponent={<div>bouna c</div>}
            rightComponent={<div>
                <div></div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias consequatur exercitationem explicabo fugiat magni nobis,
                    pariatur perspiciatis quae quia reiciendis repellat repudiandae
                    sed tenetur unde veniam! Accusamus debitis impedit temporibus.
                </p>
            </div>}/>,
        <HeaderSlideComponent
            imgUrl={"assets/bouna.jpg"}
            leftComponent={<div>bouna d</div>}
            rightComponent={<div className={``}>
                <div></div>
                <p className={``}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Alias consequatur exercitationem explicabo fugiat magni nobis,
                    pariatur perspiciatis quae quia reiciendis repellat repudiandae
                    sed tenetur unde veniam! Accusamus debitis impedit temporibus.
                </p>
            </div>}/>
    ];

    const leftContents = [{
        title: "a",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequatur exercitationem explicabo fugiat magni nobis",
        extra: "",
        format: "text",
    },{
        title: "b",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequatur exercitationem explicabo fugiat magni nobis",
        extra: "",
        format: "text",
    },{
        title: "c",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequatur exercitationem explicabo fugiat magni nobis",
        extra: "",
        format: "text",
    },{
        title: "d",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequatur exercitationem explicabo fugiat magni nobis",
        extra: "",
        format: "text",
    }]

    const [slide, setSlide] = useState(0);
    const [change, setChange] = useState(true);


    const colors = ["#9d3333", "#359d3a", "#1f6684"];
    const delay = 7500;

    useEffect(() => {
        const timeout = setTimeout(
            () => {
                setSlide((prevIndex) =>
                    prevIndex === colors.length - 1 ? 0 : prevIndex + 1
                );
                setChange(false)
            },
            delay
        );

        return () => clearTimeout(timeout);
    }, [slide]);

    useEffect(() => {
        const timeoutChange = setTimeout(
            () =>
                setChange(true),
            250
        );

        return () => clearTimeout(timeoutChange);
    }, [change]);


    return (
        <div className="h-screen  relative overflow-hidden">
            <div className="absolute h-screen max-h-full ease-in-out duration-[1500ms] space-y-0"
                 style={{ transform: `translateY(${-slide * 100}%)` }}>
                {colors.map((color, index) => (
                    <div key={index} className={`w-screen h-screen m-0`} style={{backgroundColor: `${color}`}}>
                    </div>
                ))}
            </div>
            <div className={`absolute w-screen max-w-screen left-28 top-28`}>
                {change && <div className="leftContent w-80">
                    <div className="text-3xl">{"Titre " + leftContents[slide].title}</div>
                    <div className="text-justify">{leftContents[slide].text}</div>
                </div>}
                {/* <div className={`flex ease-in-out duration-700 space-y-0 w-screen`}
                     style={{ transform: `translateX(${-slide * 100}%)` }}>
                    {slides.map((slide, index) => (
                        <div key={index} className={`w-screen h-screen`}>
                            {slides}
                        </div>
                    ))}
                </div> */}
            </div>
        </div>
    )
}