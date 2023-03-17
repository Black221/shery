import {useEffect, useState} from "react";
import "../styles/Header.css"
import lap5 from "../../assets/808300.jpg";
import lap6 from "../../assets/1315769 (1).jpg";
import lap7 from "../../assets/logo.jpg";

export const SliderComponent = () => {

    const [slide, setSlide] = useState(0);
    const [change, setChange] = useState(false);
    const [leftChange, setLeftChange] = useState(false);


    const delay = 3000;

    const [background, setBackground] = useState(["#a08417", "#1c648b", "#d11c1c"]);
    const leftContents = [{
        title: "a sdfdsf",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        extra: "",
        format: "text",
    },{
        title: "b",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        extra: "",
        format: "text",
    },{
        title: "c dfdf",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        extra: "",
        format: "text",
    },{
        title: "d",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        extra: "",
        format: "text",
    }]
    useEffect(() => {
        if (slide <= 0)
            setChange(true)
        if (slide >= background.length - 1)
            setChange(false)

        const timeout = setTimeout(
            () => {
                if (change)
                    setSlide((prevIndex) => prevIndex + 1);
                else
                    setSlide((prevIndex) => prevIndex - 1);

                setLeftChange(false)
            },
            delay
        );

        return () => clearTimeout(timeout);
    }, [slide, change]);

    useEffect(() => {
        const timeoutChange = setTimeout(
            () =>
                setLeftChange(true),
            250
        );

        return () => clearTimeout(timeoutChange);
    }, [leftChange]);

    return (
        <div className="relative h-screen overflow-hidden relative ">

            <div className="absolute h-screen max-h-full ease-in-out duration-[1500ms] space-y-0"
                 style={{ transform: `translateY(${-slide * 100}%)` }}>
                {background.map((bg, index) => (
                    <div key={index} className={`w-screen h-screen m-0`}  style={{backgroundColor: bg,}}>
                    </div>
                ))}
            </div>

            <div className={`absolute  max-w-screen left-[20%] top-[24%]`}>
                {leftChange && <div className="leftContent md:w-80 w-3/4 text-white">
                    <div className="text-[48px] uppercase">{"Titre " + leftContents[slide].title}</div>
                    <div className="text-2xl font-bold">{leftContents[slide].text}</div>
                </div>}
            </div>
        </div>
    )
}