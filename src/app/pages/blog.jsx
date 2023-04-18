import {Header} from "../components/header";
import {Footer} from "../components/footer";
import {Slide} from "react-slideshow-image";
import React from "react";
import {Contact} from "../components/contact";
import 'react-slideshow-image/dist/styles.css';

export const Blog = () => {

    let proprieties = {
        infinite: true,
        duration: 5000,
        transitionDuration: 1000,
        arrows: false
    };

    const images = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ];

    return (<>

        <Header active={"blog"} />

        <div className={`h-[560px]`}>
            <Slide {...proprieties}  >
                <div className="h-[560px] flex items-center justify-center each-slide-effect">
                    <img src={images[0]} alt=""/>

                </div>
                <div className="h-[560px] flex items-center justify-center each-slide-effect">
                    <img src={images[1]} alt=""/>
                </div>
                <div className="h-[560px] flex items-center justify-center each-slide-effect">
                    <img src={images[2]} alt=""/>
                </div>
            </Slide>
        </div>

        <div className="bg-white py-6 sm:py-8 lg:py-12 mt-20">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <p className="mb-2 text-center font-semibold text-indigo-500 md:mb-3 lg:text-lg">Introducing</p>

                <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Revolutionary way
                    to build the web</h2>

                <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some
                    simple filler text, also known as placeholder text. It shares some characteristics of a real written
                    text but is random or otherwise generated.</p>
            </div>
        </div>

        <div className="w-10/12 mx-auto mb-20 md:mb-32">
            <div className="container grid grid-cols-12 mx-auto">
                <div className="flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover lg:col-span-6 lg:h-auto">
                    <div className="flex justify-between pb-4 border-bottom">
                        <div className="flex items-center">
                            <a rel="noopener noreferrer" href="/#"
                               className="mb-0 capitalize ">Photography</a>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <img src="https://source.unsplash.com/random/480x360/?4" alt=""
                                 className="block object-cover object-center w-full rounded-md h-96 " />
                                <div className="flex items-center text-xs">
                                    <span>6 min ago</span>
                                </div>
                        </div>
                        <div className="space-y-2">
                            <a rel="noopener noreferrer" href="/#" className="block">
                                <h3 className="text-xl font-semibold">Facere ipsa nulla
                                    corrupti praesentium pariatur architecto</h3>
                            </a>
                            <p className="leading-snug ">Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Repellat, excepturi.</p>
                        </div>
                    </div>
                    <div>
                        <a href="/#"
                           className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Read
                            more</a>
                    </div>
                </div>
                <div className="flex flex-col col-span-12 p-6 space-y-4 lg:col-span-6 lg:p-10 ">
                    <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                        <a href="/#"
                           className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                            <img
                                src="https://source.unsplash.com/random/480x360/?2"
                                loading="lazy" alt=" by Minh Pham"
                                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>
                        </a>

                        <div className="flex flex-col gap-2">
                            <span className="text-sm text-gray-400">July 19, 2021</span>

                            <h2 className="text-xl font-bold text-gray-800">
                                <a href="/#"
                                   className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">New
                                    trends in Tech</a>
                            </h2>

                            <p className="text-gray-500">This is a section of some simple filler text, also known as
                                placeholder text.</p>

                            <div>
                                <a href="/#"
                                   className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Read
                                    more</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                        <a href="/#"
                           className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                            <img
                                src="https://source.unsplash.com/random/480x360/?5"
                                loading="lazy" alt="by Minh Pham"
                                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>
                        </a>

                        <div className="flex flex-col gap-2">
                            <span className="text-sm text-gray-400">July 19, 2021</span>

                            <h2 className="text-xl font-bold text-gray-800">
                                <a href="/#"
                                   className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">New
                                    trends in Tech</a>
                            </h2>

                            <p className="text-gray-500">This is a section of some simple filler text, also known as
                                placeholder text.</p>

                            <div>
                                <a href="/#"
                                   className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Read
                                    more</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
                        <a href="/#"
                           className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
                            <img
                                src="https://source.unsplash.com/random/480x360/?3"
                                loading="lazy" alt=" by Minh Pham"
                                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"/>
                        </a>

                        <div className="flex flex-col gap-2">
                            <span className="text-sm text-gray-400">July 19, 2021</span>

                            <h2 className="text-xl font-bold text-gray-800">
                                <a href="/#"
                                   className="transition duration-100 hover:text-indigo-500 active:text-indigo-600">New
                                    trends in Tech</a>
                            </h2>

                            <p className="text-gray-500">This is a section of some simple filler text, also known as
                                placeholder text.</p>

                            <div>
                                <a href="/#"
                                   className="font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Read
                                    more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className=" py-24 mx-auto md:w-10/12 mx-auto">
            <h2 className="mb-2 text-3xl font-extrabold leading-tight text-gray-900">Skcript Blog</h2>
            <p className="mb-20 text-lg text-gray-500">Comes directly from the desk of engineers, creators and managers
                at Skcript.</p>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                <div>
                    <a href="/#">
                        <img src="https://source.unsplash.com/random/480x360/?4" className="object-cover w-full h-56 mb-5 bg-center rounded" alt="Kutty"
                             loading="lazy"/>
                    </a>
                    <h2 className="mb-2 text-lg font-semibold text-gray-900">
                        <a href="/#" className="text-gray-900 hover:text-purple-700">Process Documents Using Artificial
                            Intelligence For RPA Bots</a>
                    </h2>
                    <p className="mb-3 text-sm font-normal text-gray-500">
                        Earlier RPA bots used to have some limitations like it would take structured data for processing
                        from excel, database, on these data. But with advancements in technology like OCR (Optical
                        Character Recognition) and Machine Learning, RPA bots are capable of extracting these data …
                    </p>
                    <p className="mb-3 text-sm font-normal text-gray-500">
                        <a href="/#" className="font-medium text-gray-900 hover:text-purple-700">Praveen Juge</a>
                        • April 16, 2020
                    </p>
                </div>
                <div>
                    <a href="/#">
                        <img src="https://source.unsplash.com/random/480x360/?4" className="object-cover w-full h-56 mb-5 bg-center rounded"
                             alt="Kutty" loading="lazy"/>
                    </a>
                    <h2 className="mb-2 text-lg font-semibold text-gray-900">
                        <a href="/#" className="text-gray-900 hover:text-purple-700">Implement Dark Mode in Your Android
                            App</a>
                    </h2>
                    <p className="mb-3 text-sm font-normal text-gray-500">
                        Are you curious to implement the Dark Mode in Android Application? Here’s the perfect guideline
                        to attain the Dark Mode in Android Application. Don’t waste your time; just implement and enjoy
                        Dark Mode.
                    </p>
                    <p className="mb-3 text-sm font-normal text-gray-500">
                        <a href="/#" className="font-medium text-gray-900 hover:text-purple-700">Praveen Juge</a>
                        • April 16, 2020
                    </p>
                </div>
                <div>
                    <a href="/#">
                        <img src="https://source.unsplash.com/random/480x360/?4" className="object-cover w-full h-56 mb-5 bg-center rounded" alt="Kutty"
                             loading="lazy"/>
                    </a>
                    <h2 className="mb-2 text-lg font-semibold text-gray-900">
                        <a href="/#" className="text-gray-900 hover:text-purple-700">Why is Mental Health one of the
                            Important Issues to Address?</a>
                    </h2>
                    <p className="mb-3 text-sm font-normal text-gray-500">
                        Mental health was one of the under spoken topics before this lockdown. After sitting at home for
                        about six months I realized that this is one of the important issues to address not only in the
                        work sector but also in daily living.
                    </p>
                    <p className="mb-3 text-sm font-normal text-gray-500">
                        <a href="/#" className="font-medium text-gray-900 hover:text-purple-700">Praveen Juge</a>
                        • April 16, 2020
                    </p>
                </div>
                <div>
                    <a href="/#">
                        <img src="https://source.unsplash.com/random/480x360/?4" className="object-cover w-full h-56 mb-5 bg-center rounded"
                             alt="Kutty" loading="lazy"/>
                    </a>
                    <h2 className="mb-2 text-lg font-semibold text-gray-900">
                        <a href="/#" className="text-gray-900 hover:text-purple-700">Pattern Matching In Elixir</a>
                    </h2>
                    <p className="mb-3 text-sm font-normal text-gray-500">
                        Pattern matching is a great way to write idiomatic functional code. It’s a powerful tenant of
                        functional programming that makes it a joy to write conditional statements. If you don’t want
                        your
                        code to be peppered with deeply nested statements or multiple variations of similar business
                        logic, use pattern matching!
                    </p>
                    <p className="mb-3 text-sm font-normal text-gray-500">
                        <a href="/#" className="font-medium text-gray-900 hover:text-purple-700">Praveen Juge</a>
                        • April 16, 2020
                    </p>
                </div>
                <div>
                    <a href="/#">
                        <img src="https://source.unsplash.com/random/480x360/?4" className="object-cover w-full h-56 mb-5 bg-center rounded" alt="Kutty"
                             loading="lazy"/>
                    </a>
                    <h2 className="mb-2 text-lg font-semibold text-gray-900">
                        <a href="/#" className="text-gray-900 hover:text-purple-700">3 things you should change during
                            your focus group interview</a>
                    </h2>
                    <p className="mb-3 text-sm font-normal text-gray-500">We changed three things about our feedback
                        sessions, and it changed everything about running customer feedback sessions.</p>
                    <p className="mb-3 text-sm font-normal text-gray-500">
                        <a href="/#" className="font-medium text-gray-900 hover:text-purple-700">Praveen Juge</a>
                        • April 16, 2020
                    </p>
                </div>
                <div>
                    <a href="/#">
                        <img src="https://source.unsplash.com/random/480x360/?4" className="object-cover w-full h-56 mb-5 bg-center rounded"
                             alt="Kutty" loading="lazy"/>
                    </a>
                    <h2 className="mb-2 text-lg font-semibold text-gray-900">
                        <a href="/#" className="text-gray-900 hover:text-purple-700">Using Webpack with React
                            Typescript</a>
                    </h2>
                    <p className="mb-3 text-sm font-normal text-gray-500">
                        Ever wondered if there is a way to just tie up all your code into one single module for easy
                        usage. If so, in this article I will show you how to bundle all your code into a single
                        javascript
                        module that you can easily use in any other project.
                    </p>
                    <p className="mb-3 text-sm font-normal text-gray-500">
                        <a href="/#" className="font-medium text-gray-900 hover:text-purple-700">Praveen Juge</a>
                        • April 16, 2020
                    </p>
                </div>
            </div>
            <div
                className="flex flex-col items-center justify-center mt-20 space-x-0 space-y-2 md:space-x-2 md:space-y-0 md:flex-row">
                <a href="/#" className="w-full rounded-full btn btn-light btn-xl md:w-auto">Previous Page</a>
                <a href="/#" className="w-full rounded-full btn btn-light btn-xl md:w-auto">Next Page</a>
            </div>
        </section>

        <section className="md:w-10/12 mx-auto bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="flex overflow-hidden rounded-lg bg-gray-100">
                    <div className="relative hidden bg-gray-200 sm:block sm:w-1/3 lg:w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1604076913837-52ab5629fba9?auto=format&q=75&fit=crop&w=750"
                            loading="lazy" alt=" by mymind"
                            className="absolute inset-0 h-full w-full object-cover object-center"/>
                    </div>

                    <div className="flex w-full items-center p-4 sm:w-2/3 sm:p-8 lg:w-1/2 lg:pl-10">
                        <div className="flex w-full flex-col items-center sm:block">
                            <div className="mb-4 sm:mb-8">
                                <h2 className="text-center text-xl font-bold text-indigo-500 sm:text-left sm:text-2xl lg:text-3xl">Get
                                    the latest updates</h2>
                                <p className="text-center text-gray-500 sm:text-left">Sign up for our newsletter</p>
                            </div>

                            <form className="mb-3 flex w-full max-w-md gap-2 sm:mb-5">
                                <input placeholder="Email"
                                       className="bg-gray-white w-full flex-1 rounded border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 outline-none ring-indigo-300 transition duration-100 focus:ring"/>

                                <button
                                    className="inline-block rounded bg-indigo-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Send
                                </button>
                            </form>

                            <p className="text-center text-xs text-gray-400 sm:text-left">By signing up to our
                                newsletter you agree to our <a href="/#"
                                                               className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Term
                                    of Service</a> and <a href="/#"
                                                          className="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy
                                    Policy</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Contact />

        <Footer />
    </>)
}