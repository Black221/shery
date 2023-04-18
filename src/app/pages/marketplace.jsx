import {Header} from "../components/header";
import React from "react";
import {ProductList} from "../components/marketplace/productList";
import {Cover} from "../components/marketplace/cover";
import {Standard} from "../components/marketplace/standard";
import {Advice} from "../components/marketplace/advice";
import {Footer} from "../components/footer";


export const Marketplace = () => {

    return (<>

        {/* Header */}
        <Header active={"marketplace"} />

        {/* Cover */}
        <Cover />

        {/* Product list */}
       <ProductList />

        {/* Norme hygienique */}
        <Standard />

        {/* Conseil hygiene */}
        <Advice />

        {/* Footer */}
        <Footer />
    </>)
}