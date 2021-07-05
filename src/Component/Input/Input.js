export function Input({values}){

    const { type,label,id,value,getLogin}  = values

    const inputLabel = label.toUpperCase()

    return(

        <div className="flex flex-col">
            <div className="flex items-center justify-between">
                <label htmlFor="logintxt" className="text-xs py-2 font-bold">{inputLabel}</label>
                {type === 'password' && 
                <a href="#" 
                className="
                text-xs font-bold text-leading15px text-bluelight
                xsm:text-xs 
                "
                >Esqueci minha senha</a> }

            </div>

            <input type={type} value={value} onChange={getLogin} className="
            w-full h-6 
            mb-8 px-4 
            border-gray-200 border-2 rounded 
            focus:border-blue-400
            transition duration-75 
            xsm:py-4 py-3 
            md:h-10 
            lg:py-6
            "/>

        </div>
    )
}