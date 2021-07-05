import Head from 'next/head'
import Image from 'next/image';
import { Input} from '../Component/Input/Input'
import { useContext} from 'react'
import {AuthContext} from '../Context/AuthContext';
import {useState} from 'react'
import { MenuIcon,XIcon,SearchIcon} from '@heroicons/react/outline'




export default function Login(){

    const [cpf,setCpf] = useState('')
    const [senha,setSenha] = useState('')

    const {SignIn} = useContext(AuthContext)


    function loginCpf(e){
        setCpf(e.target.value)
    }

    function loginSenha(e){
        setSenha(e.target.value)
    }

    async function handleSubmitForm(e){
        e.preventDefault()

        const data = {
            cpf,senha
        }
        await SignIn(data)
    }


    return (
        <div className="h-screen w-screen"> 

            <Head> <title>Login | Iris</title></Head>


            <header className='flex justify-between items-center w-screen absolute top-5 z-10 px-4'>
                <Image src='/images/irislogo.png' width={90} height={35} alt="iris logo"/>
                
                <MenuIcon className="hidden w-9"/>
                
                <div className="flex flex-col items-center md:flex-row">

                    <span href="#" className='
                    text-sm 
                    text-gray-400 tracking-tighter 
                    md:mr-4' 
                    > Você não tem uma conta ?</span>

                    <a href="#" className='
                    text-sm text-gray-400 font-bold 
                    uppercase
                    py-0.5 px-2
                    border-2 rounded-full border-gray-400
                    md:border-2 md:border-gray-300 md:rounded-full md:uppercase md:pregister
                    transition duration-200 
                    hover:text-gray-600 hover:border-gray-600'
                    > Cadastrar agora</a>
                </div>
            </header>

            <div className='flex'>

                <div className='h-screen relative xsm:hidden md:block w-30'>
                    <Image className="object-cover opacity-20" src='https://source.unsplash.com/collection/9714704/' layout='fill'/>
                </div>

                <div className="xsm:w-full md:w-70 flex justify-center items-center">
                    <div className="xsm:w-4/5 md:w-3/5">
                        <form onSubmit={handleSubmitForm} className="xsm:mt-36 md:mt-0">
                            <h1 className="xsm:text-center mb-5 text-lg md:mb-12 lg:text-3xl text-gray-600">Acessar o painel</h1>

                            <Input values={{type:'text',value:cpf,label:'e-mail',getLogin:loginCpf}}/>

                            <Input values={{type:'password',value:senha ,label:'senha',getLogin:loginSenha}} />

                            <button className="
                            text-sm
                            py-2
                            w-full
                            rounded-md
                            text-white font-bold 
                            bg-bluelight
                            hover:bg-bluehover transition duration-200 
                            md:px-3 md:py-2 md:rounded-full md:w-2/5
                            lg:max-w-30%
                            "
                            >Acessar painel</button>

                           
                        </form>   
                    </div>
                </div>

            </div>
        </div>
    )
}