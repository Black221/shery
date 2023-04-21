import React from "react";

export  const Filter  = () => {

    return (
        <section className={``}>
            <div className="items-center px-8 mx-auto max-w-7xl lg:px-16 md:px-12">
                <div className="border rounded-xl justify-center w-full lg:p-10 max-auto">
                    <div className="flex flex-col w-64 mx-auto">
                        <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-white">
                            <div className="flex flex-col flex-grow px-4 mt-5">
                                <div className="hidden md:block">
                                    <div className="relative">
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                    <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                                        <path
                                                            d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                                            stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                            strokeLinejoin="round"></path>
                                                    </svg>
                                                </span>
                                        <input type="text"
                                               className="w-full py-2 pl-10 pr-4 text-black bg-white border border-gray-200 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-500 sm:text-sm rounded-xl placeholder:text-gray-400 focus:border-blue-500"
                                               placeholder="Search"/>
                                    </div>
                                </div>
                                <nav className="flex-1 space-y-1 bg-white">
                                    <p className="px-4 pt-4 text-xs font-semibold text-gray-400 uppercase">
                                        Categorie
                                    </p>
                                    <ul>
                                        <li>
                                            <a className="inline-flex items-center w-full px-4 py-2 mt-1 text-sm text-gray-500 transition duration-200 ease-in-out transform rounded-lg focus:shadow-outline hover:bg-gray-100 hover:scale-95 hover:text-blue-500"
                                               href="/#">
                                                        <span className="ml-4">
                                                            item 1
                                                        </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="inline-flex items-center w-full px-4 py-2 mt-1 text-sm text-gray-500 transition duration-200 ease-in-out transform rounded-lg focus:shadow-outline hover:bg-gray-100 hover:scale-95 hover:text-blue-500"
                                               href="/#">
                                                        <span className="ml-4">
                                                            item 2
                                                        </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="inline-flex items-center w-full px-4 py-2 mt-1 text-sm text-gray-500 transition duration-200 ease-in-out transform rounded-lg focus:shadow-outline hover:bg-gray-100 hover:scale-95 hover:text-blue-500"
                                               href="/#">
                                                        <span className="ml-4">
                                                            item 3
                                                        </span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}