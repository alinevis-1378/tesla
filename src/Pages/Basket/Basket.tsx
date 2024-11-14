import React, { useEffect, useState } from 'react'
import HeaderShop from '../../Components/HeaderShop/HeaderShop'
import './Basket.css'
import CardInBasket from '../../Components/CardInBasket/CardInBasket'
import { CartContext } from '../../Context/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { JSX } from 'react/jsx-runtime'
import { CardCarAccesory } from '../../Components/CardCarAccesooryType/CardCarAccesory.type'
import { VscGlobe } from 'react-icons/vsc'
function Basket() {

  const carContext = useContext(CartContext)
  const [totalPrice , setTotalPrice] = useState(0)

  const[resizePage , setResizePage] = useState(window.innerWidth > 960)
  useEffect(() => {
    const handleResize = () => {
      setResizePage(window.innerWidth > 960)
    }

    window.addEventListener('resize' , handleResize)
    return () => removeEventListener('resize' , handleResize)
  },[])


  useEffect(() => {
    const getProduct = carContext.userCart
    const newTotalPrice = getProduct.reduce((total , getProduct) => {
      return total + getProduct.price
    }, 0)
    setTotalPrice(newTotalPrice)
  } , [carContext.userCart])


  return (
    <div>
    <HeaderShop/>
    {resizePage ?
    
    <>
     {carContext.userCart.length === 0 ? (<> <div className='h-auto bg-[#0e0e0e]  p-5'>
    <div className='flex flex-col items-start md:ml-[5rem] lg:ml-[8rem] xl:ml-[10rem]'>
    <div className='px-[3rem]'>
    <h1 className='text-white block pt-10 font-semibold text-left lg:text-left text-[2rem] '>CART</h1>
    </div>
    <div className='h-auto mt-[3rem] ml-[3rem] text-left'>
        <span className='text-[#949191] mt-[3rem] font-bold text-[15px] md:text-[1rem]'>YOUR CART IS EMPTY.</span>
       <div className='flex mt-[2rem] gap-x-[2rem]'>
       <Link to={'/myshop'}><button className='bg-[#3c3c3c] px-5 py-2 text-[#949191] font-[1000] w-[20rem] border-t-[1px] border-[#fff] text-[11px] tracking-[2px] h-[3rem]'>CONTINUE SHOPPING</button></Link>
      <Link to={''}><button className='bg-[#0e0e0e] px-4 py-2 font-[1000] text-[#949191] w-[20rem]  border-[0.5px] border-[#666666] text-[11px] tracking-[2px] h-[3rem]'>SING IN</button></Link>
       </div>
    </div>
    </div>
    <div className='flex flex-col gap-y-3 mt-[20rem] mb-[5rem]'>
      <span className='text-[#aaa9a9] font-bold text-[12px] tracking-[2px]'>TESLA © 2024</span>
      <span className='text-[#aaa9a9] font-bold text-[12px] tracking-[2px]'>PRIVACY $ LEGAL</span>
    </div>
    </div></>) : (<> <div className='h-auto bg-[#0e0e0e] p-5 sm:px-[3rem]'>
         <div className='flex justify-evenly items-center mt-[4rem]'>

         <div className='flex flex-col'>
         <h1 className='text-white block pt-10 font-semibold text-left text-[1.2rem]'>CART</h1>
           <section>
            {carContext.userCart.map((car) => (
            <CardInBasket FeaturedProducts={[]} FloorMats={[]} Interior={[]} Exterior={[]} Vault={[]} WheelsandTires={[]} Parts={[]} Keys={[]} model={''} {...car}/>
           ))}
          </section>
         </div>
         
      <div className='bg-white h-[17rem]'>
      <div className='w-[27rem] h-[17rem] text-left mt-[2px] mb-[5rem] bg-[#1b1b1b] p-[2rem] border-t-[1px] border-t-[#fff]'>
        <span className='text-white font-semibold'>ORDER SUMMARY</span>
        <div className='flex justify-between mt-3'>
          <span className='text-[#adabab]'>Shipping</span>
          <span className='text-[#adabab]'>{totalPrice > 800 ? 'free' : '$100.00'}</span>
        </div>
        <div className='flex justify-between mt-3'>
          <span className='text-[#adabab]'>Sales Tax</span>
          <span className='text-[#adabab]'>Calculated at checkout</span>
        </div>
        <div className='flex justify-between mt-3'>
          <span className='text-white font-semibold'>SUBTOTAL</span>
          <span className='text-[#fff] font-semibold'>${totalPrice.toLocaleString()}{'.00'}</span>
        </div>
      </div>
      </div>
        </div>

        <div className='mt-[20rem]'>
          <span className='text-[#c4c2c2] tracking-[0.2rem]'>TESLA © 2024</span>
        </div>
    </div>

    <div className='w-[100%] h-auto bg-[#151414] fixed bottom-0'>
     <button className='m-mainheaderm my-7 bg-[#3c3c3c] px-4 py-2 text-[#949191] font-bold w-[22rem] border-t-[1px] border-[#fff]'>CHECKOUT</button>
    </div></>)}
    </> 
    
    : <> {carContext.userCart.length === 0 ? (<> <div className=' h-[52.4rem] bg-[#0e0e0e] p-5'>
        <div className='md:px-[5rem]'>
        <h1 className='text-white block pt-10 font-semibold text-left text-[1.2rem]'>CART</h1>
        <hr className='mt-5' />
        </div>
        <div className='h-auto flex flex-col gap-y-5'>
            <span className='text-[#949191] mt-[3rem] font-bold text-[15px]'>YOUR CART IS EMPTY.</span>
           <Link to={'/myshop'}><button className='m-mainheaderm  bg-[#3c3c3c] px-5 py-2 text-[#949191] font-[1000] w-[80%] sm:w-[55%] md:w-[50%] border-t-[1px] border-[#fff] text-[11px] tracking-[2px] h-[3rem]'>CONTINUE SHOPPING</button></Link>
            <button className='m-mainheaderm  bg-[#0e0e0e] px-4 py-2 font-[1000] text-[#949191] w-[80%] sm:w-[55%] md:w-[50%] border-[0.5px] border-[#666666] text-[11px] tracking-[2px] h-[3rem]'>SING IN</button>
        </div>
        <div className='flex flex-col gap-y-3 mt-[18rem] mb-[7.3rem]'>
          <span className='text-[#aaa9a9] font-bold text-[12px] tracking-[2px]'>TESLA © 2024</span>
          <span className='text-[#aaa9a9] font-bold text-[12px] tracking-[2px]'>PRIVACY $ LEGAL</span>
        </div>
        </div></>) : (<> <div className='h-auto bg-[#0e0e0e] p-5 sm:px-[3rem] md:px-[5rem]'>
        <h1 className='text-white block pt-10 font-semibold text-left text-[1.2rem]'>CART</h1>
        <div>
          <hr className='mt-5' />
          <section>
           {carContext.userCart.map((car) => (
            <CardInBasket FeaturedProducts={[]} FloorMats={[]} Interior={[]} Exterior={[]} Vault={[]} WheelsandTires={[]} Parts={[]} Keys={[]} model={''} {...car}/>
           ))}
          </section>
          <hr className='hr' />
        </div>

      <div className='w-[22rem] h-[15rem] text-left mt-[1.5rem] mb-[5rem]'>
        <span className='text-white font-semibold'>ORDER SUMMARY</span>
        <div className='flex justify-between mt-3'>
          <span className='text-[#adabab]'>Shipping</span>
          <span className='text-[#adabab]'>{totalPrice > 100 ? '$100.00' : 'free'}</span>
        </div>
        <div className='flex justify-between mt-3'>
          <span className='text-[#adabab]'>Sales Tax</span>
          <span className='text-[#adabab]'>Calculated at checkout</span>
        </div>
        <div className='flex justify-between mt-3'>
          <span className='text-white font-semibold'>SUBTOTAL</span>
          <span className='text-[#fff] font-semibold'>${totalPrice.toLocaleString()}{'.00'}</span>
        </div>
      </div>
        <div className='mb-[5rem]'>
          <span className='text-[#c4c2c2] tracking-[0.2rem]'>TESLA © 2024</span>
        </div>
    </div>

    <div className='w-[100%] h-auto bg-[#151414] fixed bottom-0'>
     <button className='m-mainheaderm my-7 bg-[#3c3c3c] px-4 py-2 text-[#949191] font-bold w-[22rem] border-t-[1px] border-[#fff]'>CHECKOUT</button>
    </div></>)}</>}
  
    </div>
  )
}

 export default Basket
