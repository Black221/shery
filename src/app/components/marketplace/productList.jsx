import React from "react";


export const ProductList = () => {

    return (
        <section>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <p className="mb-2 text-center font-semibold text-indigo-500 md:mb-3 lg:text-lg">liste produit</p>

                    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Nos Produits </h2>

                    <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of
                        some simple filler text, also known as placeholder text. It shares some characteristics of a
                        real written text but is random or otherwise generated.</p>
                </div>
            </div>

            <div className="2xl:container 2xl:mx-auto flex justify-start space-y-4 px-4 md:px-6 2xl:px-0 mb-16">

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
               <div>
                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-between gap-x-6 gap-y-5">
                       <div className="flex flex-col justify-center items-start p-2 bg-white">
                           <div className="relative">
                               <img className="hidden lg:block" src="https://i.ibb.co/4ZPL5F0/Rectangle-37.png" alt="watch" />
                               <img className="lg:hidden" src="https://i.ibb.co/h1Vc29G/Rectangle-37.png" alt="watch" />

                               <button className="top-4 right-4 absolute p-3.5 text-gray-600 hover:text-gray-500 flex justify-center items-center bg-white rounded-full">
                                   <svg className="fill-stroke" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path
                                           d="M6.25 6.875V5.625C6.25 4.63044 6.64509 3.67661 7.34835 2.97335C8.05161 2.27009 9.00544 1.875 10 1.875V1.875C10.9946 1.875 11.9484 2.27009 12.6517 2.97335C13.3549 3.67661 13.75 4.63044 13.75 5.625V6.875M3.125 6.875C2.95924 6.875 2.80027 6.94085 2.68306 7.05806C2.56585 7.17527 2.5 7.33424 2.5 7.5V15.9375C2.5 17.1187 3.50625 18.125 4.6875 18.125H15.3125C16.4937 18.125 17.5 17.1676 17.5 15.9863V7.5C17.5 7.33424 17.4342 7.17527 17.3169 7.05806C17.1997 6.94085 17.0408 6.875 16.875 6.875H3.125Z"
                                           stroke="currentColor"
                                           strokeWidth="1.5"
                                           strokeLinecap="round"
                                           strokeLinejoin="round"
                                       />
                                       <path d="M6.25 8.75V9.375C6.25 10.3696 6.64509 11.3234 7.34835 12.0267C8.05161 12.7299 9.00544 13.125 10 13.125C10.9946 13.125 11.9484 12.7299 12.6517 12.0267C13.3549 11.3234 13.75 10.3696 13.75 9.375V8.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                   </svg>
                               </button>
                               <div className="flex justify-between mt-4">
                                   <div>
                                       <p className="text-lg font-medium leading-none text-gray-800">Sony Digital Watch</p>
                                   </div>
                                   <div>
                                       <p className="text-lg leading-none text-right text-gray-600">$1245</p>
                                   </div>
                               </div>
                           </div>
                       </div>

                       <div className="flex flex-col justify-center items-start p-2 bg-white">
                           <div className="relative">
                               <img className="lg:block hidden" src="https://i.ibb.co/znBmcWV/Rectangle-37-1.png" alt="headphones" />
                               <img className="lg:hidden" src="https://i.ibb.co/hBXHm0W/Rectangle-37-1.png" alt="headphones" />

                               <button className="top-4 right-4 absolute p-3.5 text-gray-600 hover:text-gray-500 flex justify-center items-center bg-white rounded-full">
                                   <svg className="fill-stroke" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path
                                           d="M6.25 6.875V5.625C6.25 4.63044 6.64509 3.67661 7.34835 2.97335C8.05161 2.27009 9.00544 1.875 10 1.875V1.875C10.9946 1.875 11.9484 2.27009 12.6517 2.97335C13.3549 3.67661 13.75 4.63044 13.75 5.625V6.875M3.125 6.875C2.95924 6.875 2.80027 6.94085 2.68306 7.05806C2.56585 7.17527 2.5 7.33424 2.5 7.5V15.9375C2.5 17.1187 3.50625 18.125 4.6875 18.125H15.3125C16.4937 18.125 17.5 17.1676 17.5 15.9863V7.5C17.5 7.33424 17.4342 7.17527 17.3169 7.05806C17.1997 6.94085 17.0408 6.875 16.875 6.875H3.125Z"
                                           stroke="currentColor"
                                           strokeWidth="1.5"
                                           strokeLinecap="round"
                                           strokeLinejoin="round"
                                       />
                                       <path d="M6.25 8.75V9.375C6.25 10.3696 6.64509 11.3234 7.34835 12.0267C8.05161 12.7299 9.00544 13.125 10 13.125C10.9946 13.125 11.9484 12.7299 12.6517 12.0267C13.3549 11.3234 13.75 10.3696 13.75 9.375V8.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                   </svg>
                               </button>
                               <div className="flex justify-between mt-4">
                                   <div>
                                       <p className="text-lg font-medium leading-none text-gray-800">Sony Headphones</p>
                                   </div>
                                   <div>
                                       <p className="text-lg leading-none text-right text-gray-600">$765</p>
                                   </div>
                               </div>
                           </div>
                       </div>

                       <div className="flex flex-col justify-center items-start p-2 bg-white">
                           <div className="relative">
                               <img className="hidden lg:block" src="https://i.ibb.co/vHj3fjr/Rectangle-37-2.png" alt="speaker" />
                               <img className="lg:hidden" src="https://i.ibb.co/QbpT9td/Rectangle-37-2.png" alt="speaker" />

                               <button className="top-4 right-4 absolute p-3.5 text-gray-600 hover:text-gray-500 flex justify-center items-center bg-white rounded-full">
                                   <svg className="fill-stroke" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path
                                           d="M6.25 6.875V5.625C6.25 4.63044 6.64509 3.67661 7.34835 2.97335C8.05161 2.27009 9.00544 1.875 10 1.875V1.875C10.9946 1.875 11.9484 2.27009 12.6517 2.97335C13.3549 3.67661 13.75 4.63044 13.75 5.625V6.875M3.125 6.875C2.95924 6.875 2.80027 6.94085 2.68306 7.05806C2.56585 7.17527 2.5 7.33424 2.5 7.5V15.9375C2.5 17.1187 3.50625 18.125 4.6875 18.125H15.3125C16.4937 18.125 17.5 17.1676 17.5 15.9863V7.5C17.5 7.33424 17.4342 7.17527 17.3169 7.05806C17.1997 6.94085 17.0408 6.875 16.875 6.875H3.125Z"
                                           stroke="currentColor"
                                           strokeWidth="1.5"
                                           strokeLinecap="round"
                                           strokeLinejoin="round"
                                       />
                                       <path d="M6.25 8.75V9.375C6.25 10.3696 6.64509 11.3234 7.34835 12.0267C8.05161 12.7299 9.00544 13.125 10 13.125C10.9946 13.125 11.9484 12.7299 12.6517 12.0267C13.3549 11.3234 13.75 10.3696 13.75 9.375V8.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                   </svg>
                               </button>
                               <div className="flex justify-between mt-4">
                                   <div>
                                       <p className="text-lg font-medium leading-none text-gray-800">Wonderboom Pill</p>
                                   </div>
                                   <div>
                                       <p className="text-lg leading-none text-right text-gray-600">$550</p>
                                   </div>
                               </div>
                           </div>
                       </div>

                       <div className="flex flex-col justify-center items-start p-2 bg-white">
                           <div className="relative">
                               <img className="hidden lg:block" src="https://i.ibb.co/KsbPgh8/Rectangle-37-3.png" alt="game-controller" />
                               <img className="lg:hidden" src="https://i.ibb.co/QrX9pRv/Rectangle-37-3.png" alt="game-controller" />

                               <button className="top-4 right-4 absolute p-3.5 text-gray-600 hover:text-gray-500 flex justify-center items-center bg-white rounded-full">
                                   <svg className="fill-stroke" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path
                                           d="M6.25 6.875V5.625C6.25 4.63044 6.64509 3.67661 7.34835 2.97335C8.05161 2.27009 9.00544 1.875 10 1.875V1.875C10.9946 1.875 11.9484 2.27009 12.6517 2.97335C13.3549 3.67661 13.75 4.63044 13.75 5.625V6.875M3.125 6.875C2.95924 6.875 2.80027 6.94085 2.68306 7.05806C2.56585 7.17527 2.5 7.33424 2.5 7.5V15.9375C2.5 17.1187 3.50625 18.125 4.6875 18.125H15.3125C16.4937 18.125 17.5 17.1676 17.5 15.9863V7.5C17.5 7.33424 17.4342 7.17527 17.3169 7.05806C17.1997 6.94085 17.0408 6.875 16.875 6.875H3.125Z"
                                           stroke="currentColor"
                                           strokeWidth="1.5"
                                           strokeLinecap="round"
                                           strokeLinejoin="round"
                                       />
                                       <path d="M6.25 8.75V9.375C6.25 10.3696 6.64509 11.3234 7.34835 12.0267C8.05161 12.7299 9.00544 13.125 10 13.125C10.9946 13.125 11.9484 12.7299 12.6517 12.0267C13.3549 11.3234 13.75 10.3696 13.75 9.375V8.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                   </svg>
                               </button>
                               <div className="flex justify-between mt-4">
                                   <div>
                                       <p className="text-lg font-medium leading-none text-gray-800">PS5 controller</p>
                                   </div>
                                   <div>
                                       <p className="text-lg leading-none text-right text-gray-600">$550</p>
                                   </div>
                               </div>
                           </div>
                       </div>

                       <div className="flex flex-col justify-center items-start p-2 bg-white">
                           <div className="relative">
                               <img className="hidden lg:block" src="https://i.ibb.co/vHj3fjr/Rectangle-37-2.png" alt="speaker" />
                               <img className="lg:hidden" src="https://i.ibb.co/QbpT9td/Rectangle-37-2.png" alt="speaker" />

                               <button className="top-4 right-4 absolute p-3.5 text-gray-600 hover:text-gray-500 flex justify-center items-center bg-white rounded-full">
                                   <svg className="fill-stroke" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path
                                           d="M6.25 6.875V5.625C6.25 4.63044 6.64509 3.67661 7.34835 2.97335C8.05161 2.27009 9.00544 1.875 10 1.875V1.875C10.9946 1.875 11.9484 2.27009 12.6517 2.97335C13.3549 3.67661 13.75 4.63044 13.75 5.625V6.875M3.125 6.875C2.95924 6.875 2.80027 6.94085 2.68306 7.05806C2.56585 7.17527 2.5 7.33424 2.5 7.5V15.9375C2.5 17.1187 3.50625 18.125 4.6875 18.125H15.3125C16.4937 18.125 17.5 17.1676 17.5 15.9863V7.5C17.5 7.33424 17.4342 7.17527 17.3169 7.05806C17.1997 6.94085 17.0408 6.875 16.875 6.875H3.125Z"
                                           stroke="currentColor"
                                           strokeWidth="1.5"
                                           strokeLinecap="round"
                                           strokeLinejoin="round"
                                       />
                                       <path d="M6.25 8.75V9.375C6.25 10.3696 6.64509 11.3234 7.34835 12.0267C8.05161 12.7299 9.00544 13.125 10 13.125C10.9946 13.125 11.9484 12.7299 12.6517 12.0267C13.3549 11.3234 13.75 10.3696 13.75 9.375V8.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                   </svg>
                               </button>
                               <div className="flex justify-between mt-4">
                                   <div>
                                       <p className="text-lg font-medium leading-none text-gray-800">Wonderboom Pill</p>
                                   </div>
                                   <div>
                                       <p className="text-lg leading-none text-right text-gray-600">$550</p>
                                   </div>
                               </div>
                           </div>
                       </div>

                       <div className="flex flex-col justify-center items-start p-2 bg-white">
                           <div className="relative">
                               <img className="hidden lg:block" src="https://i.ibb.co/KsbPgh8/Rectangle-37-3.png" alt="game-controller" />
                               <img className="lg:hidden" src="https://i.ibb.co/QrX9pRv/Rectangle-37-3.png" alt="game-controller" />

                               <button className="top-4 right-4 absolute p-3.5 text-gray-600 hover:text-gray-500 flex justify-center items-center bg-white rounded-full">
                                   <svg className="fill-stroke" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path
                                           d="M6.25 6.875V5.625C6.25 4.63044 6.64509 3.67661 7.34835 2.97335C8.05161 2.27009 9.00544 1.875 10 1.875V1.875C10.9946 1.875 11.9484 2.27009 12.6517 2.97335C13.3549 3.67661 13.75 4.63044 13.75 5.625V6.875M3.125 6.875C2.95924 6.875 2.80027 6.94085 2.68306 7.05806C2.56585 7.17527 2.5 7.33424 2.5 7.5V15.9375C2.5 17.1187 3.50625 18.125 4.6875 18.125H15.3125C16.4937 18.125 17.5 17.1676 17.5 15.9863V7.5C17.5 7.33424 17.4342 7.17527 17.3169 7.05806C17.1997 6.94085 17.0408 6.875 16.875 6.875H3.125Z"
                                           stroke="currentColor"
                                           strokeWidth="1.5"
                                           strokeLinecap="round"
                                           strokeLinejoin="round"
                                       />
                                       <path d="M6.25 8.75V9.375C6.25 10.3696 6.64509 11.3234 7.34835 12.0267C8.05161 12.7299 9.00544 13.125 10 13.125C10.9946 13.125 11.9484 12.7299 12.6517 12.0267C13.3549 11.3234 13.75 10.3696 13.75 9.375V8.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                   </svg>
                               </button>
                               <div className="flex justify-between mt-4">
                                   <div>
                                       <p className="text-lg font-medium leading-none text-gray-800">PS5 controller</p>
                                   </div>
                                   <div>
                                       <p className="text-lg leading-none text-right text-gray-600">$550</p>
                                   </div>
                               </div>
                           </div>
                       </div>

                       <div className="flex flex-col justify-center items-start p-2 bg-white">
                           <div className="relative">
                               <img className="hidden lg:block" src="https://i.ibb.co/4ZPL5F0/Rectangle-37.png" alt="watch" />
                               <img className="lg:hidden" src="https://i.ibb.co/h1Vc29G/Rectangle-37.png" alt="watch" />

                               <button className="top-4 right-4 absolute p-3.5 text-gray-600 hover:text-gray-500 flex justify-center items-center bg-white rounded-full">
                                   <svg className="fill-stroke" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path
                                           d="M6.25 6.875V5.625C6.25 4.63044 6.64509 3.67661 7.34835 2.97335C8.05161 2.27009 9.00544 1.875 10 1.875V1.875C10.9946 1.875 11.9484 2.27009 12.6517 2.97335C13.3549 3.67661 13.75 4.63044 13.75 5.625V6.875M3.125 6.875C2.95924 6.875 2.80027 6.94085 2.68306 7.05806C2.56585 7.17527 2.5 7.33424 2.5 7.5V15.9375C2.5 17.1187 3.50625 18.125 4.6875 18.125H15.3125C16.4937 18.125 17.5 17.1676 17.5 15.9863V7.5C17.5 7.33424 17.4342 7.17527 17.3169 7.05806C17.1997 6.94085 17.0408 6.875 16.875 6.875H3.125Z"
                                           stroke="currentColor"
                                           strokeWidth="1.5"
                                           strokeLinecap="round"
                                           strokeLinejoin="round"
                                       />
                                       <path d="M6.25 8.75V9.375C6.25 10.3696 6.64509 11.3234 7.34835 12.0267C8.05161 12.7299 9.00544 13.125 10 13.125C10.9946 13.125 11.9484 12.7299 12.6517 12.0267C13.3549 11.3234 13.75 10.3696 13.75 9.375V8.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                   </svg>
                               </button>
                               <div className="flex justify-between mt-4">
                                   <div>
                                       <p className="text-lg font-medium leading-none text-gray-800">Sony Digital Watch</p>
                                   </div>
                                   <div>
                                       <p className="text-lg leading-none text-right text-gray-600">$1245</p>
                                   </div>
                               </div>
                           </div>
                       </div>

                       <div className="flex flex-col justify-center items-start p-2 bg-white">
                           <div className="relative">
                               <img className="lg:block hidden" src="https://i.ibb.co/znBmcWV/Rectangle-37-1.png" alt="headphones" />
                               <img className="lg:hidden" src="https://i.ibb.co/hBXHm0W/Rectangle-37-1.png" alt="headphones" />

                               <button className="top-4 right-4 absolute p-3.5 text-gray-600 hover:text-gray-500 flex justify-center items-center bg-white rounded-full">
                                   <svg className="fill-stroke" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path
                                           d="M6.25 6.875V5.625C6.25 4.63044 6.64509 3.67661 7.34835 2.97335C8.05161 2.27009 9.00544 1.875 10 1.875V1.875C10.9946 1.875 11.9484 2.27009 12.6517 2.97335C13.3549 3.67661 13.75 4.63044 13.75 5.625V6.875M3.125 6.875C2.95924 6.875 2.80027 6.94085 2.68306 7.05806C2.56585 7.17527 2.5 7.33424 2.5 7.5V15.9375C2.5 17.1187 3.50625 18.125 4.6875 18.125H15.3125C16.4937 18.125 17.5 17.1676 17.5 15.9863V7.5C17.5 7.33424 17.4342 7.17527 17.3169 7.05806C17.1997 6.94085 17.0408 6.875 16.875 6.875H3.125Z"
                                           stroke="currentColor"
                                           strokeWidth="1.5"
                                           strokeLinecap="round"
                                           strokeLinejoin="round"
                                       />
                                       <path d="M6.25 8.75V9.375C6.25 10.3696 6.64509 11.3234 7.34835 12.0267C8.05161 12.7299 9.00544 13.125 10 13.125C10.9946 13.125 11.9484 12.7299 12.6517 12.0267C13.3549 11.3234 13.75 10.3696 13.75 9.375V8.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                   </svg>
                               </button>
                               <div className="flex justify-between mt-4">
                                   <div>
                                       <p className="text-lg font-medium leading-none text-gray-800">Sony Headphones</p>
                                   </div>
                                   <div>
                                       <p className="text-lg leading-none text-right text-gray-600">$765</p>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <section>
                       <div className="items-center px-8 mx-auto max-w-7xl lg:px-16 md:px-12 ">
                           <div className="justify-center w-full lg:p-10 max-auto">
                               <div className="flex items-center justify-between bg-white sm:px-6">
                                   <div className="flex items-center justify-between flex-1">
                                       <div>
                                           <nav className="relative z-0 inline-flex gap-2 -space-x-px" aria-label="Pagination">
                                               <a href="/#"
                                                  className="relative inline-flex items-center px-2 py-2 text-sm font-light text-gray-500 bg-white rounded-lg hover:bg-gray-50">
                                                   <span className="sr-only">Précédent</span>
                                                   <ion-icon name="chevron-back-outline" className="w-5 h-5 md hydrated"
                                                             role="img" aria-label="chevron back outline"></ion-icon>
                                               </a>
                                               <a href="/#" aria-current="page"
                                                  className="relative z-10 inline-flex items-center px-4 py-2 text-sm font-light text-black rounded-lg bg-gray-50"> 1 </a>
                                               <a href="/#"
                                                  className="relative inline-flex items-center px-4 py-2 text-sm font-light text-gray-500 bg-white rounded-lg hover:bg-gray-50"> 2 </a>
                                               <span
                                                   className="relative inline-flex items-center px-4 py-2 text-sm font-light text-gray-700 bg-white rounded-lg"> ... </span>
                                               <a href="/#"
                                                  className="relative inline-flex items-center px-4 py-2 text-sm font-light text-gray-500 bg-white rounded-lg hover:bg-gray-50"> 9 </a>
                                               <a href="/#"
                                                  className="relative inline-flex items-center px-4 py-2 text-sm font-light text-gray-500 bg-white rounded-lg hover:bg-gray-50"> 10 </a>
                                               <a href="/#"
                                                  className="relative inline-flex items-center px-2 py-2 text-sm font-light text-gray-500 bg-white rounded-lg rounded-r-md hover:bg-gray-50">
                                                   <span className="sr-only">Suivant</span>
                                                   <ion-icon name="chevron-forward-outline" className="w-5 h-5 md hydrated"
                                                             role="img" aria-label="chevron forward outline"></ion-icon>
                                               </a>
                                           </nav>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </section>
               </div>

            </div>

        </section>
    )
}