import React from "react";

export const GoTop = () => {

    return (
        <button x-data="topBtn" id="topButton" className="fixed z-10 p-3 bg-gray-100 rounded-full shadow-md bottom-10 right-10 animate-pulse">
            <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18">
                </path>
            </svg>
        </button>
    )
}