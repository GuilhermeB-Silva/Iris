import { useState,Fragment } from 'react'
import { Dialog,Transition  } from '@headlessui/react';
import { EmployeeCard } from './EmployeeCard/Index';
import { useContext} from 'react'

import { AuthContext } from "../../../Context/AuthContext";

export function Status({values}){

    const { statusType}=values

    const { employees} = useContext(AuthContext)


    const photo = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'


    return(

        <div className="
        mt-4
        px-4
        relative
        z-0"
        > 

            <h5 className="mb-2 text-center text-gray-400 sm:text-left md:text-xl">{statusType}</h5>

            <div className="px-1 py-2 max-h-56 overflow-y-auto">

                <div className="
                grid gap-1
                grid-cols-1
                sm:grid-cols-2
                md:grid-cols-3
                lg:flex flex-col
                ">
                    {employees.map(employee=>(
                        <EmployeeCard key={employee.USUARIO_ID} 
                        values={{photo,name:employee.NOME,minutes:45,online:true}}/>
                    ))}
                
                </div>

            </div>

        </div>
    )
}