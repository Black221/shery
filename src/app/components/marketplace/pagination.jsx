import React from "react";


export const Pagination = () => {

    return (
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
    )
}