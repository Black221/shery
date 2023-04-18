import {useAppStateContext} from "../context/appProvider";
import {FaEye} from "react-icons/fa";

import {HashLink as Link} from "react-router-hash-link";


export const Card = ({id, img, name, price, description}) => {

    const {
        addToCart,
        showProduct
    } = useAppStateContext();


    return (
        <div className={`relative p-5 md:min-w-[280px] md:max-w-[280px] md:h-[380px] w-64 h-96 bg-white shadow drop-shadow rounded-xl flex flex-col items-center justify-between`}>
            <div className={`overflow-hidden flex items-center max-h-48 min-h-[12rem] mt-4`}>
                <img src={img[0]} alt=""/>
            </div>
            <div className={`flex-1 text-center space-y-4`} >
                <div className={`text-2xl font-semibold`}>{name}</div>
                <div>{price}</div>
            </div>
            <div>
                <button onClick={() => addToCart({id, img, name, price})} className={`md:px-10 px-4  py-2 bg-main-bg text-white font-semibold rounded-full`}>Ajouter au panier</button>
            </div>

            <Link to={`/boutique#product`}>
                <button onClick={() => {showProduct({id, img, name, price, description})}} className={`flex items-center absolute left-6 top-4 text-sm`}>
                    <FaEye size={20} className={`text-main mr-2`} /> voir produit
                </button>
            </Link>
        </div>
    )
}