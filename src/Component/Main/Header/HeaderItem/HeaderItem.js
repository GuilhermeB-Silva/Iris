export function HeaderItem({values}){

    const {text,number } = values

    return(

        <div className="
        flex items-center 
        xsm:flex-col 
        sm:flex-row" 
        >
            <h1 className="
            xsm:text-lg 
            sm:text-2xl 
            md:text-5xl 
            lg:text-6xl"
            >{number}</h1>

            <h4 className="
            text-lg text-gray-400 font-bold 
            xsm:text-sm xsm:ml-2  
            sm:text-base 
            md:ml-4 md:text-lg 
            lg:text-xl"
            >{text}</h4>
        </div>
    )
}