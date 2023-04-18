import whatsapp from "../assets/whatsapp.png";
import facebook from "../assets/facebook.png";
import gmail from "../assets/gmail.png";
import insta from "../assets/insta.png";
import {useAppStateContext} from "../context/appProvider";


export const SocialMedia = () => {

    const  rsx = [whatsapp, facebook, gmail, insta];

    const {
        screenSize,
        largeScreen
    } = useAppStateContext();

    return (
        <div className={`fixed left-0 h-screen flex items-center top-0 z-50`}>
            <div className={`bg-white rounded-r-xl shadow drop-shadow-xl bg-opacity-80 ${largeScreen ? "p-4  space-y-10" : "p-2 space-y-6"}`}>
                {rsx.map((r, index) => (
                    <img key={index} src={r} className={`${screenSize > 800 ? 'w-10': "w-8"}`} alt=""/>
                ))}
            </div>
        </div>
    )
}