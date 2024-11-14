import { Products } from '../ProductType/ProductType.type'
import { Link } from 'react-router-dom'

function CardProduct({id , image1 , title , titr1, isBtnShop=false} : Products) {

  return (
    <>
   <div className='relative w-full h-screen flex items-start justify-center pt-[6rem]'>
   <div className='absolute inset-0 pb-[48.5%]'>
    <img className='bg-gradient-to-tr block absolute top-0 left-0 w-full h-full object-cover' src={image1}/>
   </div>

   <div className='flex flex-col items-center justify-center absolute'>
       <h1 className={`w-[vw] font-black font-[cursive] text-white text-[8vw] sm:text-[8vw] md:text-[5vw] 2xl:text-[3vw]`}>{title}</h1>
       <h3 className={`font-bold font-[cursive] pt-3 text-white text-[4vw] sm:text-[4vw] md:text-[3vw] 2xl:text-[2vw]`}>
         <span>{titr1}</span><sup>{''}</sup>
       </h3>
       {/* <p className='font-bold font-[cursive]'>
        <span>{twoTitr}</span><sup>{''}</sup>
       </p> */}
   </div>
 <div className='relative sm:relative 2xl:relative'>
 <div className="flex flex-col items-center justify-center absolute top-[37rem] left-[-10.5rem] gap-y-3 sm:flex sm:justify-center sm:items-center sm:w-[38rem] sm:flex-row sm:gap-x-8 sm:absolute sm:left-[-18.5rem] sm:top-[40rem] 2xl:left-[-20rem] 2xl:top-[34rem]">
 {isBtnShop === true ? <><Link to={'/myshop'}><button className="bg-black w-[21rem] py-[0.5rem] px-[4rem] rounded-md text-white font-sans mt-[1rem] sm:mt-0 sm:w-[17rem]">Shop Now</button></Link></> : <><Link to={`/oneproduct/${id}`}><button className="bg-white w-[21rem] py-[0.5rem] px-[4rem] rounded-md text-black font-sans z-[1] sm:w-[17rem]">Order Now</button></Link>
 <button className="bg-black w-[21rem] py-[0.5rem] px-[4rem] rounded-md text-white font-sans mt-[1rem] sm:mt-0 sm:w-[17rem]">Learn More</button></>}
   </div> 
 </div>
   </div>
   </>
  )
}

export default CardProduct