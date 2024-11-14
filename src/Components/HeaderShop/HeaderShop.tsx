import  { useContext, useEffect, useState } from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import { IoIosSearch } from "react-icons/io";

function HeaderShop() {
const carContext = useContext(CartContext)
const [open , setOpen] = useState(false)

const [resizePage , setResizePage] = useState(window.innerWidth > 1199)
console.log(resizePage)

useEffect(() => {
  const handleResize = () => { 
    setResizePage(window.innerWidth > 1199)
  }
  window.addEventListener('resize' , handleResize)
  return ()=> window.removeEventListener('resize' , handleResize)

} , [])


const toggleNavbar = () => {
    setOpen((prev) => !prev)
}


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
      
       <div className='flex w-[10rem] justify-between'>
       <div className='flex flex-row-reverse gap-[0.8rem]'>   
                {open ? null : (<button onClick={toggleNavbar}>
                    <span className='text-[0.9rem] tracking-[0.2rem] text-[#d3d0d0]  pl-3 pr-3 pt-1 pb-1 h-[1.8rem] block'>MENU</span>
                </button>)}
                <Link to={'/myshop/basket'}><button className=''><AiOutlineShoppingCart  className='text-white w-[1.8rem] h-[1.8rem]'/></button></Link>
                <div className="relative">
                    <span className="w-[10px] absolute top-[-9px] right-[-48px] badge badge-secondary bg-blue-600 border-none">{carContext.userCart.length}</span>
                </div>
                <IoIosSearch className='text-white w-[1.5rem] h-[1.5rem]'/>
                </div>
       </div>
         
       </div>
       {open ? ( <div>
        <button onClick={toggleNavbar} className='absolute top-[1rem] left-[22rem] z-[1]'>
        <IoCloseOutline />
        </button>
        <ul className={`bg-white  flex flex-col text-black font-bold font-sans gap-y-6 items-start pl-[1.5rem] pt-[4rem] w-[100vw] h-[100vh] absolute top-0 left-0`}>
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
        
        : 
        
        <>
        <header className='fixed top-0 left-0 z-[1] w-[100%]'>
            <div className='flex items-center justify-between pl-5 py-4 w-[100%]'>
                <div className='flex justify-center gap-x-6 align-middle'>
                    <a aria-label="Tesla Logo" className="tds-site-logo-link" href="/">
                    <svg className="w-[6rem] h-[1.3rem] " viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg">
                        <path fill="white" d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7M308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7"></path>
                    </svg><span className="hidden">Tesla</span></a>
                    <div className='text-white text-[13px]'>|</div>
                    <div className='text-white text-[13px]'>SHOP</div>
                    </div>
                    
                <div className='flex flex-row-reverse'>   
                {open ? null : (<button onClick={toggleNavbar}>
                    <span className='text-[0.9rem] tracking-[0.2rem] text-[#d3d0d0]  pl-3 pr-3 pt-1 pb-1 h-[1.8rem] block'>MENU</span>
                </button>)}
                <Link to={'/myshop/basket'}><button className=''><AiOutlineShoppingCart  className='text-white w-[1.8rem] h-[1.8rem]'/></button></Link>
                <div className="relative">
                    <span className="w-[10px] absolute top-[-9px] right-[-35px] badge badge-secondary bg-blue-600 border-none">{carContext.userCart.length}</span>
                </div>
                </div>
            </div>


            {open ? ( <div>
        <button onClick={toggleNavbar} className='absolute top-[1rem] left-[22rem] z-[1]'>
        <IoCloseOutline />
        </button>
        <ul className={`bg-white  flex flex-col text-black font-bold font-sans gap-y-6 items-start pl-[1.5rem] pt-[4rem] w-[100vw] h-[100vh] absolute top-0 left-0`}>
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

export default HeaderShop