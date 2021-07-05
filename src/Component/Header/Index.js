import { MenuIcon,XIcon,SearchIcon} from '@heroicons/react/outline'
import { AuthContext} from '../../Context/AuthContext'
import { useContext} from 'react'




export function Header({values}){
    
    const {openMenuMobile,openMobileMenu,closeMenuMobile} = values

    const { user} = useContext(AuthContext)

    return(
        <header className="bg-white h-16 shadow-sm col-start-2 col-end-13 ">

            <div className="h-full 
            px-6
            py-3 
            flex items-center justify-between 
            md:px-4 
            md:grid md:justify-center 
            md:col-start-4 md:col-end-13 
            md:grid-cols-12 
            ">

                <div className="
                flex-grow 
                md:col-start-3 md:col-end-10 
                lg:px-0 lg:w-5/5 "
                >
                    <div className="w-full">
                        <label htmlFor="search" className="sr-only">Search</label>
                        <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                                <SearchIcon className="h-5 w-5 text-gray-400"/>
                            </div>
                            <input id="search" name="search" 
                            className="
                            block w-full bg-white
                            border border-gray-300
                            rounded-md
                            py-2 pl-10 pr-3 
                            text-sm
                            placeholder-gray-400 
                            focus:outline-none focus:text-gray-900"
                            placeholder="Colaboradores" type="search"/>
                        </div>
                    </div> 
                </div>

                <div className="hidden md:col-start-11 md:col-end-13 md:block md:justify-self-end">
                    <div className="flex-shrink-0 relative">
                        <span className="font-bold">{user.nome}</span>
                    </div>
                </div>

                <div className="ml-8 md:hidden " >
                    <button type="button" className="
                    p-2 rounded-md 
                    text-gray-400 
                    hover:text-gray-500 hover:bg-gray-100 
                    md:block" 
                    onClick={openMobileMenu} aria-controls="mobile-menu" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="w-6"/>
                    </button>
                </div>
                    
            </div>
        </header>
    )
}