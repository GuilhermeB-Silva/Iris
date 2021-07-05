import { AuthContext}from '../../Context/AuthContext'
import { parseCookies } from 'nookies';
import jwt_decode from "jwt-decode";

import { useContext} from 'react'


import {
BellIcon,
HomeIcon,
ClockIcon,
ChartBarIcon,
UsersIcon,
IdentificationIcon,
CakeIcon,
LogoutIcon,
XIcon
} from '@heroicons/react/outline'

import { NavItem } from "./NavItem/Index";

export function Sidebar({values}){


    const cookies = parseCookies()


    const { logOut,user} = useContext(AuthContext)

    const {openMenuMobile,closeMenuMobile} = values

    return(

        <div className="h-screen row-start-1 flex">

{/* mobile menu */}
            <div className={`${openMenuMobile ? 'absolute' : 'hidden'} inset-0 flex z-40 md:hidden `} role="dialog" aria-modal="true">
           
                <div className="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"></div>
            
                <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none">
{/* CLOSE SIDEBAR */}
                    <div className="absolute top-0 right-0 -mr-12 pt-4">
                        <button type="button" onClick={closeMenuMobile} className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="sr-only">Close sidebar</span>
                            <XIcon className="w-6 text-white"/>
                        </button>
                    </div>

                    <div className="pt-5 pb-4 ">
                        <div className="flex-shrink-0 flex items-center px-4">
                            <img className="h-8 w-auto" src="images/irislogo.png" alt="Workflow"/>
                        </div>
                        <nav aria-label="Sidebar" className="mt-5">

                            <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                                <a href="#" className="flex-shrink-0 group block">
                                    <div className="flex items-center">
                                        <div>
                                            <img className="inline-block h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-base font-medium text-gray-700 group-hover:text-gray-900">
                                              {user.name}
                                                
                                            </p>
                                            <p className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                                                Configurações da conta
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="px-2 space-y-1">
                                
                                <a href="#" className="group p-2 rounded-md flex items-center text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                                    <HomeIcon className="w-6 mr-4"/>
                                    Home
                                </a>

                                <a href="#" className="group p-2 rounded-md flex items-center text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                                    <BellIcon className="w-6 mr-4"/>
                                    Notificações
                                </a>

                                <a href="#" className="group p-2 rounded-md flex items-center text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                                    <ClockIcon className="w-6 mr-4"/>
                                    Ponto
                                </a>

                                <a href="#" className="group p-2 rounded-md flex items-center text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                                    <ChartBarIcon className="w-6 mr-4"/>
                                    Relatório
                                </a>

                                <a href="#" className="group p-2 rounded-md flex items-center text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                                    <UsersIcon className="w-6 mr-4"/>
                                    Colaboradores
                                </a>

                                <a href="#" className="group p-2 rounded-md flex items-center text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                                    <IdentificationIcon className="w-6 mr-4"/>
                                    Conta
                                </a>

                                <a href="#" className="group p-2 rounded-md flex items-center text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                                    <CakeIcon className="w-6 mr-4"/>
                                    Aniversariantes
                                </a>

                                <a href="#" className="group p-2 rounded-md flex items-center text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                                    <LogoutIcon className="w-6 mr-4"/>
                                    Sair
                                </a>
                           
                            </div>

                        </nav>
                    </div>

                </div>

                <div className="flex-shrink-0 w-14" aria-hidden="true"></div>
            </div>
            
{/* LG MENU */}
            <div className="hidden md:flex lg:flex-shrink-0 relative top-0">
                <div className="flex flex-col w-20 flex-1 overflow-y-auto overflow-x-hidden bg-indigo-600">
                    <div className="flex flex-col justify-items-stretch">
                        <div className="flex-shrink-0 h-16 bg-indigo-700 flex items-center">
                            <a href="#" className="block w-full flex-shrink-0 ">
                                <img className="block mx-auto w-9" src="/images/iconiris.png" alt=""/>
                            </a>
                        </div>  
                        <nav aria-label="Sidebar" className="py-6 flex flex-col items-center space-y-3">

                            <NavItem values={{href:'/dashboard', text:'Home',icon:<HomeIcon/>}}/>

                            <NavItem values={{href:'/notificacoes', text:'Notificações',icon:<BellIcon/>}}/>

                            <NavItem values={{href:'/ponto', text:'Ponto',icon:<ClockIcon/>}}/>

                            <NavItem values={{href:'/relatorios', text:'Relatórios',icon:<ChartBarIcon/>}}/>

                            <NavItem values={{href:'/usuarios', text:'Usuários',icon:<UsersIcon/>}}/>

                            <NavItem values={{href:'/perfil', text:'Perfil',icon:<IdentificationIcon/>}}/>

                            <NavItem values={{href:'/aniversariantesdashboard', text:'Aniversariantes',icon:<CakeIcon/>}}/>

                            <NavItem values={{text:'Sair',icon:<LogoutIcon/>,logOut}}/>

                        </nav>

                        <div className="flex-shrink-0 flex py-8 items-end">
                            <a href="#" className="flex-shrink-0 w-full">
                            <img className="block mx-auto h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                            <div className="sr-only">
                                <p>
                                    {user.name}
                                </p>
                                <p>
                                    Account settings
                                </p>
                            </div>
                            </a>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    )
}