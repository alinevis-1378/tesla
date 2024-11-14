import { Link } from "react-router-dom"
import { CarsType } from "../CarsType/CarsType.type"


function CardCars({id ,image1 , model , oneTitr , twoTitr} : CarsType) {


  return (
   <>
   <div className='relative w-full h-screen flex items-start justify-center pt-[6rem]'>
   <div className='absolute inset-0 pb-[48.5%]'>
    <img className='bg-gradient-to-tr block absolute top-0 left-0 w-full h-full object-cover' src={image1}/>
   </div>

   <div className='flex flex-col items-center justify-center absolute'>
       <h1 className={`w-[vw] font-black font-[cursive] text-white text-[8vw] sm:text-[8vw] md:text-[5vw] 2xl:text-[3vw]`}>{model}</h1>
       <h3 className={`font-bold font-[cursive] pt-3 text-white text-[4vw] sm:text-[4vw] md:text-[3vw] 2xl:text-[2vw]`}>
         <span>{oneTitr}</span><sup>{''}</sup>
       </h3>
       <p className='font-bold font-[cursive] text-white'>
        <span>{twoTitr}</span><sup>{''}</sup>
       </p>
   </div>
  <div className="relative sm:relative md:relative lg:relative xl:relative 2xl:relative">
  <div className="flex flex-col items-center justify-center gap-y-3  absolute top-[37rem] left-[-10.5rem] sm:flex sm:justify-center sm:items-center sm:w-[38rem] sm:flex-row sm:gap-x-8 sm:absolute sm:left-[-18.5rem] sm:top-[40rem] 2xl:left-[-20rem] 2xl:top-[34rem]">
   <Link to={`/onecar/${id}/cash`}><button className="bg-white w-[21rem] py-[0.5rem] px-[4rem] rounded-md text-black font-sans z-[1] sm:w-[17rem] sm:z-[1]">Order Now</button></Link>
   <button className="bg-black w-[21rem] py-[0.5rem] px-[4rem] rounded-md text-white font-sans mt-[1rem] sm:w-[17rem] sm:mt-0">Demo Drive</button>
   </div> 
  </div>
   </div>
   </>
  )
}

export default CardCars

