
export const HeaderSlideComponent = ({imgUrl, leftComponent, rightComponent}) => {


    return (<>
        <div className={`flex justify-around h-screen w-screen`}>

            <div className={`h-full`}>

                <div className="h-[60%] flex items-center">
                   {leftComponent}
                </div>
            </div>

            <div className={`h-full flex flex-col justify-end`}>

                <div className="h-[60%] flex items-center">
                   {rightComponent}
                </div>
            </div>
        </div>
    </>)
}
