import { HeaderItem } from "./HeaderItem/HeaderItem";
import { AuthContext } from "../../../Context/AuthContext";

import { useContext} from 'react'


export function Header({values}){

    const {employees} = useContext(AuthContext)


    return(
        <div className="
        py-2
        text-gray-800 
        shadow-lg 
        col-span-full 
        relative -z-1 
        flex justify-around
        lg:justify-around 
        sm:mt-5 px-4 
        row-start-1 
        w-full 
        ">
            <HeaderItem values={{text:'Colaboradores',number:employees.length}}/>

            <HeaderItem values={{text:'Localizações',number:20}}/>

            <HeaderItem values={{text:'Pedidos',number:30}}/>

        </div>
    )
}