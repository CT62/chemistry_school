'use client'
import {useSession, signOut} from 'next-auth/react'

export default function Header(){
    const {data: session,status} = useSession();
    return(
    <header>
        <nav className="z-10 w-full absolute bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                <div className="flex flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative">
                    <input aria-hidden="true" type="checkbox" name="toggle_nav" id="toggle_nav" className="hidden peer" />
                    <div className="relative z-20 w-full flex justify-between lg:w-max md:px-0">
                        <a href="/" aria-label="logo" className="flex space-x-2 items-center">
                            <span className="text-2xl font-bold">C.S.G</span>
                        </a>
                        
                        <div className="relative flex items-center lg:hidden max-h-10">
                            <label role="button" htmlFor="toggle_nav" aria-label="humburger" id="hamburger" className="relative  p-6 -mr-6">
                                <div aria-hidden="true" id="line" className="m-auto h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"></div>
                                <div aria-hidden="true" id="line2" className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"></div>
                            </label>
                        </div>
                    </div>
                    <div aria-hidden="true" className="fixed z-10 inset-0 h-screen w-screen backdrop-blur-2xl origin-bottom scale-y-0 transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden"></div>
                    <div className="flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl border bg-white border-gray-100 shadow-2xl shadow-gray-600/10 justify-end w-full invisible opacity-0 translate-y-1  absolute top-full left-0 transition-all duration-300 scale-95 origin-top 
                                lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none
                                peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none 
                                 bg-opacity-25 border-white">
                    
                        <div className="lg:pr-4 lg:w-auto w-full lg:pt-0 font-extrabold">
                            <ul className="tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row gap-6 lg:gap-0">
                                <li>
                                    <a href="courses" className="block md:px-4 transition hover:text-primary">
                                        <span>Courses</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="/about" className="block md:px-4 transition hover:text-primary">
                                        <span>About</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    )
}
