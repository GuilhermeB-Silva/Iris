import { useRouter} from 'next/router';

export function NavItem({values}){

    const { text,icon,href,logOut} = values

    const router = useRouter()

    return(
        <div className="
        flex items-center
        w-full
        justify-center
        hover:bg-indigo-700 hover:rounded-lg
        group
        ">
            <button onClick={logOut} className="flex">

            <a href={href} 
            className="
            flex items-center 
            text-indigo-200
            justify-center
            p-3
            w-96
            relative z-999
            group
            ">
                <svg className={`w-6 h-6 
                ${router.pathname == href && "text-green-300"}`}
                >{icon}</svg>
            </a>

            <span className="
            hidden 
            absolute left-20 z-999
            py-3 px-8
            rounded-r-lg
            bg-indigo-600 
            text-gray-100 text-center 
            group-hover:inline 
            ">{text}</span>

            </button>

        </div>
    )
}
