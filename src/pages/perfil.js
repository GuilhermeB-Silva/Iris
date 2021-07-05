import { Sidebar} from '../Component/SideBar/Index'
import { useContext, useState} from 'react'
import { ProfileItem } from '../Component/ProfileItem/Index';
import {MenuIcon,MailIcon} from '@heroicons/react/outline'
import { AuthContext } from '../Context/AuthContext';
import { parseCookies } from 'nookies';




export default function Perfil(){

    const [openMenuMobile, setOpenMenuMobile] = useState(false)
    const {user} = useContext(AuthContext)

    function openMobileMenu(){
        setOpenMenuMobile(true)
    }

    function closeMenuMobile(){
        setOpenMenuMobile(false)
    }

    return(
        <div className="flex">
            <Sidebar values={{openMenuMobile,openMobileMenu,closeMenuMobile}}/>
        
            <div className="h-screen w-full flex overflow-hidden bg-white">
                <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
                    <div className="h-16 md:hidden">
                        <div className="flex items-center justify-between 
                        h-full 
                        bg-gray-50 
                        border-b border-gray-200 
                        px-6 py-1.5">
                            <img src="/images/iconiris.png" alt="Iris logo" />
                            <div>
                                <button type="button" className="
                                -mr-3 
                                h-12 w-12 
                                inline-flex items-center justify-center 
                                rounded-md 
                                text-gray-500 
                                hover:text-gray-900 focus:outline-none"
                                onClick={openMobileMenu}
                                >
                                    <span className="sr-only">Open sidebar</span>
                                    <MenuIcon className="w-9"/>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 relative z-0 flex overflow-hidden">
                        <main className="
                        flex-1 relative z-0 overflow-y-auto 
                        focus:outline-none xl:order-last"
                        >
                            <div>
                                <div>
                                    <img className="h-32 w-full object-cover lg:h-48" 
                                    src="https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                                    alt="Background Profile"/>
                                </div>
                                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                                    <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                                        <div className="flex">
                                            <img className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32" 
                                            src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Employee Photo"/>
                                        </div>
                                        <div className="mt-6 
                                        sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1"
                                        >
                                            <div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                                                <h1 className="text-2xl font-bold text-gray-900 truncate">
                                                    {user.nome}
                                                </h1>
                                            </div>
                                            <div className="
                                            mt-6 
                                            flex flex-col justify-stretch 
                                            space-y-3 
                                            sm:flex-row sm:space-y-0 sm:space-x-4"
                                            >
                                                <button type="button" 
                                                className="
                                                inline-flex justify-center 
                                                px-4 py-2 
                                                border border-gray-300 shadow-sm rounded-md
                                                text-sm font-medium text-gray-700
                                                bg-white 
                                                hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500
                                                ">
                                                    <MailIcon className='w-5 mr-3'/>
                                                    <span>Message</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
                                        <h1 className="text-2xl font-bold text-gray-900 truncate">
                                            {user.nome}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                
                            <div className="mt-6 sm:mt-2 2xl:mt-5">
                                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                                    <a href="#" 
                                    className="
                                    border-b-2 border-pink-500 
                                    font-medium text-sm text-gray-900 
                                    whitespace-nowrap 
                                    py-4 px-1 
                                    " 
                                    aria-current="page">
                                    Perfil
                                    </a>
                                </div>
                            </div>
                
                            <div className="
                            max-w-5xl 
                            mt-6 px-4 mb-8 mx-auto 
                            sm:px-6 
                            lg:px-8 
                            ">
                                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">

                                    <ProfileItem values={{ fieldName:'Phone',content:'(555) 123-4567'}}/>
                                    <ProfileItem values={{ fieldName:'Email',content:'erikarishad@example.com'}}/>
                                    <ProfileItem values={{ fieldName:'Title',content:'Senior Front-End Developer'}}/>
                                    <ProfileItem values={{ fieldName:'Team',content:'Product Development'}}/>
                                    <ProfileItem values={{ fieldName:'Location',content:'San Francisco'}}/>
                                    <ProfileItem values={{ fieldName:'Sits',content:' Oasis, 4th floor'}}/>
                                    <ProfileItem values={{ fieldName:'Salary',content:'$145,000'}}/>
                                    <ProfileItem values={{ fieldName:'Birthday',content:'June 8, 1990'}}/>

                                    <div className="sm:col-span-2">
                                        <dt className="text-sm font-medium text-gray-500">
                                            About
                                        </dt>
                                        <dd className="mt-1 max-w-prose text-sm text-gray-900 space-y-5">
                                            <p>
                                            Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.
                                            </p>
                                            <p>
                                            Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.
                                            </p>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    )
}



export async function getServerSideProps(context) {
  

    const cookie = parseCookies(context)
    if(!cookie['authiris']){
        return{
            redirect:{
                destination:'/login',
                permanent:true
            }
        }
    }
  
    return {
      props: {}, // will be passed to the page component as props
    }
  }
  