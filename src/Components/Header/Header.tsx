import  { useEffect, useState } from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { GoQuestion } from "react-icons/go";
import { TfiWorld } from "react-icons/tfi";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { FaRegUserCircle } from "react-icons/fa";


function Header() {

const [open , setOpen] = useState(false)

const toggleNavbar = () => {
    setOpen((prev) => !prev)
}


const [resizePage , setResizePage] = useState(window.innerWidth > 1199)

if(open && window.innerWidth < 1199){
    document.body.style.overflow = 'hidden'
}else {
    document.body.style.overflow = 'auto'  
}

useEffect(() => {
const handleResize = () => {
    setResizePage(window.innerWidth > 1199)
}
window.addEventListener('resize' , handleResize)
return () => window.removeEventListener('resize' , handleResize)

},[])


    return (
       resizePage ? 
       <>
       <header className='absolute top-0 left-0 z-[1] w-[100%]'>
       <div className='flex w-[100%] justify-between mt-5 px-5'>

       <div>
        <a aria-label="Tesla Logo" className="tds-site-logo-link" href="/">
        <svg className="w-[8rem] h-[1rem] text-white" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7M308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7"></path>
        </svg><span className="hidden">Tesla</span></a></div>
       
        <ul className='flex w-[30rem] justify-evenly'>
            <li className='text-white'>Vehicles</li>
            <li className='text-white'>Energy</li>
            <li className='text-white'>Charging</li>
            <li className='text-white'>Discover</li>
            <li className='text-white'>Shop</li>
        </ul>
      
       <div className='flex w-[6rem] justify-between'>
       <GoQuestion className='text-white w-[1.5rem] h-[1.5rem]' />
       <TfiWorld className='text-white w-[1.5rem] h-[1.5rem]' />
       <FaRegUserCircle className='text-white w-[1.5rem] h-[1.5rem]' />
       </div>

       </div>
       </header>
       </> 
       
       : 
    
       <>
       
       <header className='absolute top-0 left-0 z-[1]'>
            <div className='flex items-center justify-between px-5 py-4 w-[100vw]'>
                <div><a aria-label="Tesla Logo" className="tds-site-logo-link" href="/">
                    <svg className="w-[8rem] h-[1rem] text-white" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7M308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7"></path>
                    </svg><span className="hidden">Tesla</span></a></div>
                <div>   
                {open ? null : (<button onClick={toggleNavbar}>
                    <span className='text-[1.2rem] text-white bg-[#578de2] shadow-lg  pl-3 pr-3 pt-1 pb-1 rounded-lg font-medium'>Menu</span>
                </button>)}
                </div>
            </div>


            {open ? ( 
        <div className='flex flex-col mt-[-3rem] pl-[1rem] bg-white'>
        <div className='w-[100%] text-right'>
        <button onClick={toggleNavbar} className=' z-[1] w-[100%] flex justify-end p-[2rem]'>
        <IoCloseOutline />
        </button>
        </div>
      
       
       <ul className={`flex flex-col text-black font-bold font-sans gap-y-6 items-start px-[1rem] pt-[1rem] w-[100%] h-[100vh]`}>
            <li>Vehicels</li>
            <li>Energy</li>
            <li>Charging</li>
            <li>Discover</li>
            <li>Shop</li>
            <li>Support</li>
            <li>United States</li>
            <li>Account</li>
        </ul>
       
    
    </div>) : null}
        </header>
       </>
    )
}

export default Header


