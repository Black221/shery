import {HiArrowLongRight} from "react-icons/hi2";


export const CardComponent = ({img}) => {


    return (
        <div className={`px-16 py-2 pt-16 border rounded-xl space-y-8`}>
            <div>
                <img src={img} className={`w-56`} alt=""/>
            </div>
            <div className={`flex flex-col justify-center items-center mt-4 text-2xl space-y-2`}>
                <div className={`text-xl font-semibold`} >Titre produit</div>
                <div className={`font-extralight`}>30xof</div>
                <HiArrowLongRight size={38} />
            </div>
        </div>
    )
}