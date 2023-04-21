import React from "react";


export const Header = ({active}) => {

    return(
        <header className="sticky top-0 bg-white z-50 flex items-center justify-between py-4 md:py-4 md:px-8 px-2">
            <a href="/" className="text-black-800 inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl"
               aria-label="logo">
                <svg width="95" height="94" viewBox="0 0 95 94" className="h-auto w-6 text-indigo-500"
                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M96 0V47L48 94H0V47L48 0H96Z"/>
                </svg>
                Shery
            </a>
            <nav className="hidden gap-12 lg:flex">
                <a href="/"
                   className={`${active === "home" ? "text-indigo-700" : " text-gray-600"} text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500`}>
                    Accueil</a>
                <a href="/boutique" className={`${active === "marketplace" ? "text-indigo-700" : " text-gray-600"} text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500`}>
                    Boutique
                </a>
                <a href="/parrainage"
                   className={`${active === "sponsorship" ? "text-indigo-700" : " text-gray-600"} text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500`}>
                    Parrainage</a>
                <a href="/Blog" className={`${active === "blog" ? "text-indigo-700" : " text-gray-600"} text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500`}>
                    Blog</a>
                <a href="/#contact"
                   className={`${active === "/#contact" ? "text-indigo-700" : " text-gray-600"} text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500`}>
                    Contact</a>
            </nav>

            <div className="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">
                <a href="/inscription"
                   className="inline-block rounded-lg px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:text-indigo-500 focus-visible:ring active:text-indigo-600 md:text-base">S'inscrire</a>

                <a href="/connexion"
                   className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Se connecter</a>
            </div>

            <button type="button"
                    className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd"
                          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clipRule="evenodd"/>
                </svg>

                Menu
            </button>
        </header>
    )
}