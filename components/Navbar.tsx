'use client'
import './global.css'
import { useGlobalCartState } from '@/app/contexts/GlobalCartState';
export default function Header(){
    const {count,setCount} = useGlobalCartlState();
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
                                <li>
                                  <a href="/cart" className="block md:px-4 transition hover:text-primary">
                                    <span><div
    className="absolute bottom-auto left-auto -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-blue-500 px-2 py-1 text-center align-baseline text-xs font-bold leading-none text-white">
    {count} 
  </div><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg></span>
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
