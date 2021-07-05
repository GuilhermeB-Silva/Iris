import Head from 'next/head'

import { useState,useContext, useEffect} from 'react'

import { Header } from "../Component/Header/Index"
import { Sidebar } from "../Component/SideBar/Index"

import { Main} from '../Component/Main/Index'
import { AuthContext} from '../Context/AuthContext'
import { parseCookies } from 'nookies'
import { api } from '../Services/api'


export default function Dashboard(){

    const [openMenuMobile, setOpenMenuMobile] = useState(false)

    const { saveEmployees } = useContext(AuthContext)

    
    useEffect(()=>{
        
        const cookies = parseCookies()
        console.log(cookies)

        if(cookies){
            api.get('/Portal/MinhaEquipe',{
                headers:{
                    Authorization: `Bearer ${cookies['authiris']}`,
                    'SIS_USUARIO_ID': 4,
                    "SIS_NIVEL_ID": 8,
                    'SIS_PESO': "5000"
            }}).then(response=> saveEmployees(response.data))
        } 

    },[])

    function openMobileMenu(){
        setOpenMenuMobile(true)
    }

    function closeMenuMobile(){
        setOpenMenuMobile(false)
    }

    return(
        <div className="w-full grid grid-cols-irislayout grid-rows-irislayout">
            <Head><title>Dashboard</title></Head>
            <Header values={{openMenuMobile,openMobileMenu,closeMenuMobile}}/>
            <Sidebar values={{openMenuMobile,openMobileMenu,closeMenuMobile}}/>
            <Main/>
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
  