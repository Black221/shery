import React from "react";

const About = () => {
    return (
        <section className=" px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
            <div className="flex flex-wrap items-center mx-auto max-w-7xl">
                <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
                    <div>
                        <div className="relative w-full max-w-lg">
                            <div
                                className="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                            <div
                                className="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                            <div className="relative">
                                <img className="object-cover object-center mx-auto rounded-lg shadow-2xl" alt="hero"
                                     src={''}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
                    <span
                        className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase"> Presentation </span>
                    <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">Qui somme nous?</h1>
                    <p className="mb-8 text-base leading-relaxed text-left text-gray-500">Free and Premium themes,
                        UI Kit's, templates and landing pages built with Tailwind CSS, HTML &amp; Next.js.</p>
                    <p className="mb-8 text-base leading-relaxed text-left text-gray-500">Free and Premium themes,
                        UI Kit's, templates and landing pages built with Tailwind CSS, HTML &amp; Next.js.</p>
                    <div className="flex-col mt-0 lg:mt-6 max-w-7xl sm:flex">
                        <div className="prose prose-md">
                            <ul>
                                <li className="text-gray-500">Ain't no sunshine when she's gone.</li>
                                <li className="text-gray-500">Expensive feature.</li>
                                <li className="text-gray-500">Really good feauture.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
