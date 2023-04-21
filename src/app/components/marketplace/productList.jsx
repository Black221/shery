import React from "react";
import {Pagination} from "./pagination";
import { ProductItem} from "./productItem";
import {Filter} from "./filter";


export const ProductList = () => {

    let PRODUCTS = [
        {
            name : "Sony Digital Watch",
            img: "https://i.ibb.co/4ZPL5F0/Rectangle-37.png",
            price: "$1245",
        },
        {
            name : "Sony Headphones",
            img: "https://i.ibb.co/znBmcWV/Rectangle-37-1.png",
            price: "$765",
        },
        {
            img : "https://i.ibb.co/znBmcWV/Rectangle-37-1.png",
            name: "Sony Headphones",
            price: "$765",
        },
        {
            img : "https://i.ibb.co/vHj3fjr/Rectangle-37-2.png",
            name: "Wonderboom Pill",
            price: "$550",
        },
        {
            name : "PS5 controller",
            img: "https://i.ibb.co/KsbPgh8/Rectangle-37-3.png",
            price: "$550",
        },
        {
            name : "Wonderboom Pill",
            img: "https://i.ibb.co/vHj3fjr/Rectangle-37-2.png",
            price: "$550",
        },
        {
            name : "Sony Digital Watch",
            img: "https://i.ibb.co/4ZPL5F0/Rectangle-37.png",
            price: "$1245",
        },
        {
            name : "Sony Headphones",
            img: "https://i.ibb.co/znBmcWV/Rectangle-37-1.png",
            price: "$765",
        },
    ];
    return (
        <section>

            {/* Heading */}
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <p className="mb-2 text-center font-semibold text-indigo-500 md:mb-3 lg:text-lg">liste produit</p>

                    <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Nos Produits </h2>

                    <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of
                        some simple filler text, also known as placeholder text. It shares some characteristics of a
                        real written text but is random or otherwise generated.</p>
                </div>
            </div>

            {/* Section */}
            <div className="2xl:container 2xl:mx-auto flex justify-start space-y-4 px-4 md:px-6 2xl:px-0 mb-16">
                {/* Filter and categories */}
                <Filter />

                {/* Rending item */}
                <div>
                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-between gap-x-6 gap-y-5">

                       {PRODUCTS.map((item, index) => (
                           <ProductItem item={item} key={index}/>
                       ))}
                   </div>

                   {/* Pagination */}
                   <Pagination />
               </div>
            </div>
        </section>
    )
}