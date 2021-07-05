import { useState,Fragment } from 'react'
import { Dialog,Transition  } from '@headlessui/react';

export function EmployeeCard({values}){


    const {photo,name,minutes,online} =  values

    const [isOpen, setIsOpen] = useState(false)

    function handleOpenModal(){
        setIsOpen(true)
    }

    function handleCloseModal(){
        setIsOpen(false)
    }


    return(
        <>
        <button className="
        flex flex-shrink items-center
        px-2 p-1
        cursor-pointer
        w-max  
        rounded-lg 
        bg-gray-200
        xsm:w-full xsm:justify-center 
        md:px-1 md:flex-col 
        lg:bg-gray-100 lg:flex-row lg:py-2 lg:justify-between lg:px-4
        " 
        onClick={handleOpenModal}
        >
            <div className="flex md:flex-col items-center lg:flex-row">

                <div className="inline-block relative w-max flex flex-col">
                    <img className="xsm:hidden md:block w-7 rounded-full" 
                    src={photo} alt="User photo"/>

                    <span className={`
                    md:absolute 
                    top-0 right-0 
                    block h-2 w-2 
                    rounded-full ring-2 ring-white 
                    ${online ? 'bg-green-400' : 'bg-red-400'}
                    `}
                    ></span>

                </div>
                
                <span className="
                text-left text-gray-500 text-xms 
                ml-1 
                sm:text-center 
                md:ml-0 md:text-xs 
                lg:ml-4 
                "
                
                >{name}</span>
            </div>

            <span className="
            hidden 
            text-left text-xms text-gray-500 
            ml-1 
            sm:text-center 
            md:ml-0 md:text-xs 
            lg:inline 
            ">{minutes}</span>
        
        </button>

        <Transition appear show={isOpen} as={Fragment}>
            <Dialog
            as="div"
            className="fixed inset-0 z-10 overflow-y-auto"
            onClose={handleCloseModal}
            >
                <div className="min-h-screen px-4 text-center bg-bgmodal">
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    >
                    <Dialog.Overlay className="fixed inset-0" />
                    </Transition.Child>

                    <span
                    className="inline-block h-screen align-middle"
                    aria-hidden="true"
                    >
                    &#8203;
                    </span>
                    <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                    >
                    <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                        <div className="flex justify-center relative">
                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" className="rounded-full" alt="" />
                            <span className="absolute w-10 h-10 bg-green-300 rounded-full absolute bottom-0"></span>
                        </div>
                        <Dialog.Title
                        as="h3"
                        className="mt-4 text-center text-lg font-medium leading-6 text-gray-900"
                        >
                        {name}
                        </Dialog.Title>
                        <div className="mt-2">
                        <p className="text-sm text-gray-500 text-center">
                        Horário de trabalho: 08:00 - 12:00/13:00 - 18:00 
                        </p>
                        </div>

                        <div className="mt-4">
                        <button
                            type="button"
                            className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white font-bold bg-hover border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                            onClick={handleCloseModal}
                        >
                            Fechar
                        </button>
                        </div>
                    </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>

        </>
    )
}