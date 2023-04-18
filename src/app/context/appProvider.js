import React, {createContext, useContext, useState} from "react";

const StateContext = createContext(undefined);


export const AppContextProvider = ({ children}) => {

    const [activeMenu, setActiveMenu] = useState(false);
    const [products, setProducts] = useState([]);
    const [screenSize, setScreenSize] = useState(undefined);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isLoading, setIsLoading] = useState(false)
    const [search, setSearch] = useState("");
    const [scroll, setScroll] = useState(false)
    const [cart, setCart] = useState([])
    const [openCart, setOpenCart] = useState(false)
    const [largeScreen, setLargeScreen] = useState(true);
    const [currentSection, setCurrentSection] = useState("");
    const [currentProduct, setCurrentProduct] = useState(null);
    const [bestOf, setBestOf] = useState(null);
    const [slideProduct, setSlideProduct] = useState(null);
    const [slideBProduct, setSlideBProduct] = useState(null);

    const getScroll = (ref) => {
        const scroll = Math.abs(ref.current.getBoundingClientRect().top - ref.current.offsetTop);
        console.log(scroll, ref);
    };

    const getOffset = () => {

    }

    const addToCart = (product) => {

        setCart((cart) => [...cart, product]);
    }

    const removeToCart = (product) => {
        setCart((cart) => (cart.filter((c) => (c !== product))))
    }

    const showProduct = (p) => {
        setCurrentProduct(p);
    }

    return (
        <StateContext.Provider value={{
            activeMenu, setActiveMenu,
            screenSize, setScreenSize,
            isLoading, setIsLoading,
            search, setSearch,
            scroll, setScroll,
            cart, setCart,
            largeScreen, setLargeScreen,
            scrollPosition, setScrollPosition,
            getScroll, getOffset,
            currentSection, setCurrentSection,
            currentProduct, setCurrentProduct, showProduct,
            addToCart, removeToCart,
            openCart, setOpenCart,
            products, setProducts,
            bestOf, setBestOf,
            slideProduct, setSlideProduct,
            slideBProduct, setSlideBProduct
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useAppStateContext = () => useContext(StateContext)