import './styles/App.css';
import {SliderComponent} from "./components/SliderComponent";
import {HeadComponent} from "./components/HeadComponent";
import {useEffect, useRef, useState, useTransition} from "react";
import {CardComponent} from "./components/CardComponent";

import tof1 from "../assets/808300.jpg";
import tof2 from "../assets/1315769.jpg";
import logo from "../assets/logo.jpg";

const App = () => {

    const items = [
        {title: "a"},
        {title: "b"},
        {title: "c"},
        {title: "d"},
        {title: "d"},
        {title: "d"},
    ];

    const [countItem, setCountItem] = useState(0);

    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
        if (window.scrollY >= 10) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        changeBackground()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground)

    })

    const parallax = useRef(null)


    return (

        <div className="mx-1/12 font-body">

            {/*
            <div className="mx-auto">
                <SliderComponent />
            </div>
            */}
            <div className={`h-screen flex justify-center items-center`} style={{backgroundImage: `url(${tof1})`, backgroundSize: 'cover'}}>
                <div className={`space-y-10 bg-gra0 w-8/12 bg-opacity-50 `}>
                    <div className={`text-white font-semibold text-center text-8xl `}>Grand <br/> titre  presentation</div>
                    <div className={` text-center text-white  text-4xl  mx-auto`}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Animi, aut autem blanditiis consequatur corporis cum

                    </div>
                </div>
            </div>

            <div className={`mt-16`}>

                <div className="w-9/12 mx-auto  py-20 bg-white flex flex-col justify-around items-center">
                    <div className={`space-y-10`}>
                        <div className={`text-[38px] font-semibold text-center`}>Grand titre presentation</div>
                        <div className={` text-center  text-xl w-9/12 mx-auto `}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Animi, aut autem blanditiis consequatur corporis cum
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Animi, aut autem blanditiis consequatur corporis cum
                        </div>
                    </div>

                    <div className={`flex justify-around items-center space-y-16 mt-12 md:space-y-0 flex-wrap w-full`}>
                        <CardComponent img={logo} />
                        <CardComponent img={logo} />
                        <CardComponent img={logo} />
                    </div>
                </div>

                <div className={`min-h-screen flex items-center `}>
                    <div className={`w-full h-[560px] relative flex items-center justify-between px-8`} style={{backgroundImage: `url(${tof1})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}}>
                        <div className={`p-8 bg-blue-600 bg-opacity-25 text-white max-w-[680px] py-20 space-y-8`}>
                            <div className={`text-4xl font-extrabold`}>come with us</div>
                            <ul className={`list-disc space-y- font-semibold text-xl`}>
                                <li className={`ml-4`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Animi, aut autem blanditiis consequatur corporis cum</li>
                                <li className={`ml-4`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Animi, aut autem blanditiis consequatur corporis cum</li>
                            </ul>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>

                <div className={`space-y-10`}>
                    <div className={`text-[38px] font-semibold text-center`}>Grand titre presentation</div>
                    <div className={` text-center  text-xl w-9/12 mx-auto `}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Animi, aut autem blanditiis consequatur corporis cum
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Animi, aut autem blanditiis consequatur corporis cum
                    </div>
                </div>

                <div className={`flex flex-wrap justify-around relative bg-white mt-6 items-center`}>

                    <div className={` md:w-1/2 bg-red-500`}>
                        <img src={tof2} alt=""/>
                    </div>

                    <div className={`max-w-xl space-y-10`}>
                        <div className={`text-[38px] font-semibold text-center`}>Grand titre presentation</div>
                        <div className={` text-center  text-xl `}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Animi, aut autem blanditiis consequatur corporis cum
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Animi, aut autem blanditiis consequatur corporis cum
                        </div>
                    </div>
                </div>

                <div className={`overflow-hidden flex items-center  flex-col h-screen relative  mt-48`}>
                    <div className={`md:w-[680px] md:h-[480px]  w-96 h-80 bg-blue-600 relative z-30 rounded-2xl`} style={{backgroundImage: `url(${tof1})`}}>

                    </div>
                    <div className={`min-w-[125vw] min-h-[125vw] absolute top-44 rounded-full bg-cyan-600 `}>

                    </div>
                    <div className={`relative mt-20`}>
                        <div className={`text-[38px] font-semibold text-center`}>Grand titre presentation</div>
                        <div className={` text-center  text-xl w-6/12 mx-auto `}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Animi, aut autem blanditiis consequatur corporis cum
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Animi, aut autem blanditiis consequatur corporis cum
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
