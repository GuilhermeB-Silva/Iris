import { createContext,useState,useEffect} from 'react'
import { useRouter} from 'next/router'
import { api} from '../Services/api'
import { setCookie,parseCookies, destroyCookie} from 'nookies'


export const AuthContext = createContext({})

export function AuthProvider({children}){

    const [user,setUser] = useState({})
    const [employees,setEmployees] = useState([])

    const isAuthenticated = !!user

    const router = useRouter()

    function saveEmployees(arr){
        setEmployees(arr)
    }


    async function SignIn({cpf,senha}){

        try{
            const response = await api.post('/Account/login',{
                cpf,senha
            })
    
            const { token,usuario} = response.data

            const { nome,matricula,perfil} = usuario

            setCookie(null,'authiris',token,{
                maxAge:60 * 60 * 24 * 30,
                path:'/'
            })

            setUser({nome,matricula,perfil}) 
            
            router.push('/dashboard')

        }catch(err){
            console.log(err)
        }

    }

    function logOut(){
        destroyCookie(null,'authiris',{
            path:'/'
        })
        router.push("/login")
    }

    return(

        <AuthContext.Provider  value={{isAuthenticated,SignIn,user,logOut,saveEmployees,employees}}>
            {children}
        </AuthContext.Provider>
    )
}