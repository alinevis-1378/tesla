import  { useEffect, useState } from 'react'
import Header from '../Header/Header'
import './OneProduct.css'
import { useParams } from 'react-router-dom'
import { IoCloseOutline } from "react-icons/io5";


const allProduct= [
   {id : 1 ,
    video : 'https://digitalassets.tesla.com/video/upload/q_auto/f_auto:video/prod/fulfillment/energy/Order/EnergyConfigurator/landing-page-hero-video_m' ,
    images : ['https://digitalassets.tesla.com/image/upload/q_auto/f_auto/w_750/prod/fulfillment/energy/Order/EnergyConfigurator/pw-selector-image',
              'https://digitalassets.tesla.com/image/upload/q_auto/f_auto/w_750/prod/fulfillment/energy/Order/EnergyConfigurator/pv-selector-image-desktop',
              'https://digitalassets.tesla.com/image/upload/q_auto/f_auto/w_750/prod/fulfillment/energy/Order/EnergyConfigurator/sr-selector-image-desktop',
    ],
   },
   {id : 2 ,
    video : 'https://digitalassets.tesla.com/video/upload/q_auto/f_auto:video/prod/fulfillment/energy/Order/EnergyConfigurator/landing-page-hero-video_m' ,
    images : ['https://digitalassets.tesla.com/image/upload/q_auto/f_auto/w_750/prod/fulfillment/energy/Order/EnergyConfigurator/pw-selector-image',
      'https://digitalassets.tesla.com/image/upload/q_auto/f_auto/w_750/prod/fulfillment/energy/Order/EnergyConfigurator/pv-selector-image-desktop',
      'https://digitalassets.tesla.com/image/upload/q_auto/f_auto/w_750/prod/fulfillment/energy/Order/EnergyConfigurator/sr-selector-image-desktop',
],

},
    {id : 3,
    image: ['https://digitalassets.tesla.com/image/upload/q_auto/f_auto/w_750/prod/fulfillment/energy/Order/EnergyConfigurator/powerwall-landing-hero-mobile',
            'https://digitalassets.tesla.com/image/upload/q_auto/f_auto/w_2048/prod/fulfillment/energy/Order/EnergyConfigurator/powerwall-landing-hero-desktop'
    ],
    },

]

function OneProduct() {
   const {id} = useParams()
   const myPro = allProduct.find((details: { id: number }) => details.id === Number(id))

   const [resizePage , setResizePage]= useState(window.innerWidth > 899)

   useEffect(() => {
     const handleResize = () => {
      setResizePage(window.innerWidth > 899)
     }

     window.addEventListener('resize' , handleResize)
     return () => removeEventListener('resize' , handleResize)
   }, [])
  
   
   const [open , setOpen] = useState(false)

const toggleNavbar = () => {
    setOpen((prev) => !prev)
}

  return (
  resizePage === true ?  
  <>
  {myPro?.id === 3 ? (<>
        <header className='fixed top-0 left-0 z-[1] bg-white'>
          <div className='flex items-center justify-between px-5 py-4 w-[98vw]'>
              <div><a aria-label="Tesla Logo" className="tds-site-logo-link" href="/">
                  <svg className="w-[8rem] h-[1rem] text-black" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg">
                      <path fill="currentColor" d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7M308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7"></path>
                  </svg><span className="hidden">Tesla</span></a></div>
              <div>   
              {open ? null : (<button onClick={toggleNavbar}>
                  <span className='text-[1.2rem] text-white bg-[#578de2] shadow-lg  pl-3 pr-3 pt-1 pb-1 rounded-lg font-medium'>Menu</span>
              </button>)}
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
      <div className='grid grid-cols-2 justify-items-end'>
   <div className='w-[43%]'>
   <img className='w-[43%] h-[698px] object-cover rounded-[22px] fixed top-[5rem] right-[50%]'  src={myPro?.image?.[1]}/>
   </div>
   <div className='p-[2.5rem] pt-[5rem]'>
   <div className='m-mainheaderm bg-radial-gradient  mt-8 h-[8rem] p-[1rem] flex flex-col items-start justify-center rounded-[5px] w-[80%]'>
      <span className='text-white mb-2'>30% Federal Tax Credit</span>
      <span className='text-white text-left'>Solar and Powerwall orders qualify for a federal tax credit. </span>
   </div>
   <div className='flex flex-col items-start'>
      <span className='font-semibold text-2xl text-[#252424] mt-14 mb-4'>PowerWall 3</span>
      <span className='text-[#888585] text-left'>Store energy for intelligent home backup and grid independence, complete with remote monitoring anywhere, anytime.</span>
   </div>
   <div className='flex flex-col items-start mt-8'>
      <span className='mb-2 text-[#4d4c4c]'>Home Address</span>
      <input className='w-[100%] h-[2.5rem] rounded-[5px] bg-[#eeecec] outline-none p-3' type='text' name='address' id='address'/>
   </div>
   <div className='mt-10'>
   <button disabled className='bg-blue-600 w-[100%] rounded-[5px] py-[0.5rem] text-white font-bold mb-[1rem]'>Next</button>
   <span className='text-[#919191]'>We won't spam you in any way.</span>
   </div>
   </div>

      </div>
   </>) 
   : (<> 
   <header className='fixed top-0 left-0 z-[1] bg-white'>
              <div className='flex items-center justify-between px-5 py-4 w-[98vw]'>
               <div><a aria-label="Tesla Logo" className="tds-site-logo-link" href="/">
                     <svg className="w-[8rem] h-[1rem] text-black" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg">
                       <path fill="currentColor" d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7M308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7"></path>
                   </svg><span className="hidden">Tesla</span></a></div>
               <div>   
               {open ? null : (<button onClick={toggleNavbar}>
                   <span className='text-[1.2rem] text-white bg-[#578de2] shadow-lg  pl-3 pr-3 pt-1 pb-1 rounded-lg font-medium'>Menu</span>
               </button>)}
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
      
             <div className='grid grid-cols-2 justify-items-end'>
             <div className='w-[43%]'>
                <video className='w-[43%] h-[698px] object-cover rounded-[22px] fixed top-[5rem] right-[50%]' autoPlay loop src={myPro?.video}/>
                </div>
                <div className='w-[82%]'>
                <div className='pr-[4rem]'>
                <div className='flex flex-col items-start'>
                   <span className='font-semibold text-3xl text-[#252424]'>Power Everything</span>
                   <span className='text-[#888585]'>Enter Home Details</span>
                </div>
                <div className='flex flex-col items-start mt-8'>
                   <span className='mb-2 text-[#4d4c4c]'>Home Address</span>
                   <input className='w-[100%] h-[2.5rem] rounded-[5px] bg-[#eeecec] outline-none p-3' type='text' name='address' id='address'/>
                </div>
                <div className='flex flex-col items-start mt-8'>
                   <span className='text-[#4d4c4c]'>Average Electric Bill</span>
                   <span className='mb-2 text-[#888585]'>One electric bill required</span>
                   <input className='w-[100%] h-[2.5rem] rounded-[5px] bg-[#eeecec] outline-none p-3' type='text' name='address' id='address'/>
                </div>
                <div className='flex flex-col items-start mt-8'>
                   <span>Know your average monthly consumption?</span>
                   <a href='#'>Enter your kWh</a>
                </div>
                <div className='flex flex-col items-start mt-8'>
                   <span className='font-semibold text-2xl text-[#252424]'>Choose a Product</span>
                   <span className='mb-2 text-[#888585]'>Help Me Choose Solar</span>
                </div>
                <div className='m-mainheaderm bg-radial-gradient  mt-8 h-[8rem] p-[1rem] flex flex-col items-start justify-center rounded-[5px]'>
                   <span className='text-white mb-2'>30% Federal Tax Credit</span>
                   <span className='text-white text-left'>Solar and Powerwall orders qualify for a federal tax credit. </span>
                </div>
                <div>
                <input className='custom-input3' type='radio' name='panels' id='Powerwall'/>
                <label className='radio-label3' htmlFor='Powerwall'>
                <div className='m-mainheaderm mt-8 h-auto border-[1px] border-[#dddada] flex flex-col items-start justify-center rounded-[5px]'>
                   <img className='w-[100%] object-cover' src={myPro?.images?.[0]}/>
                   <span className='mb-2 pl-[1rem] text-[#000000]'>Powerwall 3 Only</span>
                   <span className='text-left pl-[1rem] pb-4 text-[#888585]'>Energy backup for your home</span>
                </div>
                </label>
                   <input className='custom-input3' type='radio' name='panels' id='Solar Panels'/>
                   <label className='radio-label3' htmlFor='Solar Panels'>
                   <div className='m-mainheaderm mt-8 h-auto border-[1px] border-[#dddada] flex flex-col items-start justify-center rounded-[5px]'>
                      <img className='w-[100%] object-cover' src={myPro?.images?.[1]}/>
                      <span className='mb-2 pl-[1rem] text-[#000000] mt-2'>Solar Panels + Powerwall 3</span>
                   <span className='text-left pl-[1rem] pb-4 text-[#888585]'>Panels for your existing roof with backup protection</span>
                   </div>
                   </label>
                   <div>
                   <input className='custom-input3' type='radio' name='panels' id='New luxury'/>
                   <label className='radio-label3' htmlFor='New luxury'>
                   <div className='m-mainheaderm mt-8 h-auto border-[1px] border-[#dddada] flex flex-col items-start justify-center rounded-[5px]'>
                      <img className='w-[100%] object-cover' src={myPro?.images?.[2]}/>
                      <span className='mb-2 pl-[1rem] text-[#000000] mt-2'>Solar Panels + Powerwall 3</span>
                   <span className='text-left pl-[1rem] pb-4 text-[#888585]'>New luxury integrated solar roof with backup protection</span>
                   </div>
                   </label>
                   </div>
                </div>
                <div className='mt-4 flex flex-col items-start'>
                <span className='text-left text-[#888585] text-[13px]'>Prices include potential incentives, discounts, and Powerwall. Excludes future energy savings.</span>
                <button disabled className='bg-blue-600 w-[100%] rounded-[5px] py-[0.5rem] text-white font-bold mt-5 mb-[2rem]'>Next</button>
                </div>
           </div>
                </div>
             </div></>)} 
  
  </> 
  
  : 
  
   <>
   {myPro?.id === 3 ? (<>
        <header className='fixed top-0 left-0 z-[1] bg-white'>
          <div className='flex items-center justify-between px-5 py-4 w-[98vw]'>
              <div><a aria-label="Tesla Logo" className="tds-site-logo-link" href="/">
                  <svg className="w-[8rem] h-[1rem] text-black" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg">
                      <path fill="currentColor" d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7M308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7"></path>
                  </svg><span className="hidden">Tesla</span></a></div>
              <div>   
              {open ? null : (<button onClick={toggleNavbar}>
                  <span className='text-[1.2rem] text-white bg-[#578de2] shadow-lg  pl-3 pr-3 pt-1 pb-1 rounded-lg font-medium'>Menu</span>
              </button>)}
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
   
   <div className='mt-20'>
   <img className='w-[100%] h-auto object-contain'  src={myPro?.image?.[0]}/>
   </div>
   <div className='p-[1.5rem]'>
   <div className='m-mainheaderm bg-radial-gradient  mt-8 h-[8rem] p-[1rem] flex flex-col items-start justify-center rounded-[5px]'>
      <span className='text-white mb-2'>30% Federal Tax Credit</span>
      <span className='text-white text-left'>Solar and Powerwall orders qualify for a federal tax credit. </span>
   </div>
   <div className='flex flex-col items-start'>
      <span className='font-semibold text-2xl text-[#252424] mt-14 mb-4'>PowerWall 3</span>
      <span className='text-[#888585] text-left'>Store energy for intelligent home backup and grid independence, complete with remote monitoring anywhere, anytime.</span>
   </div>
   <div className='flex flex-col items-start mt-8'>
      <span className='mb-2 text-[#4d4c4c]'>Home Address</span>
      <input className='w-[100%] h-[2.5rem] rounded-[5px] bg-[#eeecec] outline-none p-3' type='text' name='address' id='address'/>
   </div>
   <div className='mt-10'>
   <button disabled className='bg-blue-600 w-[100%] rounded-[5px] py-[0.5rem] text-white font-bold mb-[1rem]'>Next</button>
   <span className='text-[#919191]'>We won't spam you in any way.</span>
   </div>
   </div>
   </>) 
   : (<><div>
     
   <header className='fixed top-0 left-0 z-[1] bg-white'>
          <div className='flex items-center justify-between px-5 py-4 w-[98vw]'>
              <div><a aria-label="Tesla Logo" className="tds-site-logo-link" href="/">
                  <svg className="w-[8rem] h-[1rem] text-black" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg">
                      <path fill="currentColor" d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7M308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7"></path>
                  </svg><span className="hidden">Tesla</span></a></div>
              <div>   
              {open ? null : (<button onClick={toggleNavbar}>
                  <span className='text-[1.2rem] text-white bg-[#578de2] shadow-lg  pl-3 pr-3 pt-1 pb-1 rounded-lg font-medium'>Menu</span>
              </button>)}
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
   
   <div className='mt-20 w-[70%] m-mainheaderm'>
   <video autoPlay loop src={myPro?.video}/>
   </div>
    <div className='p-[1.5rem]'>
         <div className='flex flex-col items-start'>
            <span className='font-semibold text-3xl text-[#252424]'>Power Everything</span>
            <span className='text-[#888585]'>Enter Home Details</span>
         </div>
         <div className='flex flex-col items-start mt-8'>
            <span className='mb-2 text-[#4d4c4c]'>Home Address</span>
            <input className='w-[100%] h-[2.5rem] rounded-[5px] bg-[#eeecec] outline-none p-3' type='text' name='address' id='address'/>
         </div>
         <div className='flex flex-col items-start mt-8'>
            <span className='text-[#4d4c4c]'>Average Electric Bill</span>
            <span className='mb-2 text-[#888585]'>One electric bill required</span>
            <input className='w-[100%] h-[2.5rem] rounded-[5px] bg-[#eeecec] outline-none p-3' type='text' name='address' id='address'/>
         </div>
         <div className='flex flex-col items-start mt-8'>
            <span>Know your average monthly consumption?</span>
            <a href='#'>Enter your kWh</a>
         </div>
         <div className='flex flex-col items-start mt-8'>
            <span className='font-semibold text-2xl text-[#252424]'>Choose a Product</span>
            <span className='mb-2 text-[#888585]'>Help Me Choose Solar</span>
         </div>
         <div className='m-mainheaderm bg-radial-gradient  mt-8 h-[8rem] p-[1rem] flex flex-col items-start justify-center rounded-[5px]'>
            <span className='text-white mb-2'>30% Federal Tax Credit</span>
            <span className='text-white text-left'>Solar and Powerwall orders qualify for a federal tax credit. </span>
         </div>
         <div>
         <input className='custom-input3' type='radio' name='panels' id='Powerwall'/>
         <label className='radio-label3' htmlFor='Powerwall'>
         <div className='m-mainheaderm mt-8 h-auto border-[1px] border-[#dddada] flex flex-col items-start justify-center rounded-[5px]'>
            <img className='w-[100%] object-cover' src={myPro?.images?.[0]}/>
            <span className='mb-2 pl-[1rem] text-[#000000]'>Powerwall 3 Only</span>
            <span className='text-left pl-[1rem] pb-4 text-[#888585]'>Energy backup for your home</span>
         </div>
         </label>
            <input className='custom-input3' type='radio' name='panels' id='Solar Panels'/>
            <label className='radio-label3' htmlFor='Solar Panels'>
            <div className='m-mainheaderm mt-8 h-auto border-[1px] border-[#dddada] flex flex-col items-start justify-center rounded-[5px]'>
               <img className='w-[100%] object-cover' src={myPro?.images?.[1]}/>
               <span className='mb-2 pl-[1rem] text-[#000000] mt-2'>Solar Panels + Powerwall 3</span>
            <span className='text-left pl-[1rem] pb-4 text-[#888585]'>Panels for your existing roof with backup protection</span>
            </div>
            </label>
            <div>
            <input className='custom-input3' type='radio' name='panels' id='New luxury'/>
            <label className='radio-label3' htmlFor='New luxury'>
            <div className='m-mainheaderm mt-8 h-auto border-[1px] border-[#dddada] flex flex-col items-start justify-center rounded-[5px]'>
               <img className='w-[100%] object-cover' src={myPro?.images?.[2]}/>
               <span className='mb-2 pl-[1rem] text-[#000000] mt-2'>Solar Panels + Powerwall 3</span>
            <span className='text-left pl-[1rem] pb-4 text-[#888585]'>New luxury integrated solar roof with backup protection</span>
            </div>
            </label>
            </div>
         </div>
         <div className='mt-4 flex flex-col items-start'>
         <span className='text-left text-[#888585] text-[13px]'>Prices include potential incentives, discounts, and Powerwall. Excludes future energy savings.</span>
         <button disabled className='bg-blue-600 w-[100%] rounded-[5px] py-[0.5rem] text-white font-bold mt-5 mb-[2rem]'>Next</button>
         </div>
    </div>
   </div></>)}  
</>
  )
}

export default OneProduct



// import  { useEffect, useState } from 'react'
// import Header from '../Header/Header'
// import './OneProduct.css'
// import { useParams } from 'react-router-dom'
// import { IoCloseOutline } from "react-icons/io5";


// const allProduct= [
//    {id : 1 ,
//     video : 'https://digitalassets.tesla.com/video/upload/q_auto/f_auto:video/prod/fulfillment/energy/Order/EnergyConfigurator/landing-page-hero-video_m' ,
//     images : ['https://digitalassets.tesla.com/image/upload/q_auto/f_auto/w_750/prod/fulfillment/energy/Order/EnergyConfigurator/pw-selector-image',
//               'https://digitalassets.tesla.com/image/upload/q_auto/f_auto/w_750/prod/fulfillment/energy/Order/EnergyConfigurator/pv-selector-image-desktop',
//               'https://digitalassets.tesla.com/image/upload/q_auto/f_auto/w_750/prod/fulfillment/energy/Order/EnergyConfigurator/sr-selector-image-desktop',
//     ],
//    },
//    {id : 2 ,
//     video : 'https://digitalassets.tesla.com/video/upload/q_auto/f_auto:video/prod/fulfillment/energy/Order/EnergyConfigurator/landing-page-hero-video_m' ,
//     images : ['https://digitalassets.tesla.com/image/upload/q_auto/f_auto/w_750/prod/fulfillment/energy/Order/EnergyConfigurator/pw-selector-image',
//       'https://digitalassets.tesla.com/image/upload/q_auto/f_auto/w_750/prod/fulfillment/energy/Order/EnergyConfigurator/pv-selector-image-desktop',
//       'https://digitalassets.tesla.com/image/upload/q_auto/f_auto/w_750/prod/fulfillment/energy/Order/EnergyConfigurator/sr-selector-image-desktop',
// ],

// },
//     {id : 3,
//     image: ['https://digitalassets.tesla.com/image/upload/q_auto/f_auto/w_750/prod/fulfillment/energy/Order/EnergyConfigurator/powerwall-landing-hero-mobile'],
//     },

// ]

// function OneProduct() {
//    const {id} = useParams()
//    const myPro = allProduct.find((details: { id: number }) => details.id === Number(id))

//    const [resizePage , setResizePage]= useState(window.innerWidth > 899)

//    useEffect(() => {
//      const handleResize = () => {
//       setResizePage(window.innerWidth > 899)
//      }

//      window.addEventListener('resize' , handleResize)
//      return () => removeEventListener('resize' , handleResize)
//    }, [])
  
   
//    const [open , setOpen] = useState(false)

// const toggleNavbar = () => {
//     setOpen((prev) => !prev)
// }

//   return (
//   resizePage === true ? 
//   <>
//    <header className='fixed top-0 left-0 z-[1] bg-white'>
//           <div className='flex items-center justify-between px-5 py-4 w-[98vw]'>
//               <div><a aria-label="Tesla Logo" className="tds-site-logo-link" href="/">
//                   <svg className="w-[8rem] h-[1rem] text-black" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg">
//                       <path fill="currentColor" d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7M308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7"></path>
//                   </svg><span className="hidden">Tesla</span></a></div>
//               <div>   
//               {open ? null : (<button onClick={toggleNavbar}>
//                   <span className='text-[1.2rem] text-white bg-[#578de2] shadow-lg  pl-3 pr-3 pt-1 pb-1 rounded-lg font-medium'>Menu</span>
//               </button>)}
//               </div>
//           </div>
   
   
//           {open ? ( <div>
//       <button onClick={toggleNavbar} className='absolute top-[1rem] left-[22rem] z-[1]'>
//       <IoCloseOutline />
//       </button>
//       <ul className={`bg-white  flex flex-col text-black font-bold font-sans gap-y-6 items-start pl-[1.5rem] pt-[4rem] w-[100vw] h-[100vh] absolute top-0 left-0`}>
//           <li>Vehicels</li>
//           <li>Energy</li>
//           <li>Charging</li>
//           <li>Discover</li>
//           <li>Shop</li>
//           <li>Support</li>
//           <li>United States</li>
//           <li>Account</li>
//       </ul>
//    </div>) : null}
//       </header>

//       <div className='grid grid-cols-2 justify-items-end'>
//       <div className='w-[43%]'>
//          <video className='w-[43%] h-[698px] object-cover rounded-[22px] fixed top-[5rem] right-[50%]' autoPlay loop src={myPro?.video}/>
//          </div>
//          <div className='w-[82%]'>
//          <div className='pr-[4rem]'>
//          <div className='flex flex-col items-start'>
//             <span className='font-semibold text-3xl text-[#252424]'>Power Everything</span>
//             <span className='text-[#888585]'>Enter Home Details</span>
//          </div>
//          <div className='flex flex-col items-start mt-8'>
//             <span className='mb-2 text-[#4d4c4c]'>Home Address</span>
//             <input className='w-[100%] h-[2.5rem] rounded-[5px] bg-[#eeecec] outline-none p-3' type='text' name='address' id='address'/>
//          </div>
//          <div className='flex flex-col items-start mt-8'>
//             <span className='text-[#4d4c4c]'>Average Electric Bill</span>
//             <span className='mb-2 text-[#888585]'>One electric bill required</span>
//             <input className='w-[100%] h-[2.5rem] rounded-[5px] bg-[#eeecec] outline-none p-3' type='text' name='address' id='address'/>
//          </div>
//          <div className='flex flex-col items-start mt-8'>
//             <span>Know your average monthly consumption?</span>
//             <a href='#'>Enter your kWh</a>
//          </div>
//          <div className='flex flex-col items-start mt-8'>
//             <span className='font-semibold text-2xl text-[#252424]'>Choose a Product</span>
//             <span className='mb-2 text-[#888585]'>Help Me Choose Solar</span>
//          </div>
//          <div className='m-mainheaderm bg-radial-gradient  mt-8 h-[8rem] p-[1rem] flex flex-col items-start justify-center rounded-[5px]'>
//             <span className='text-white mb-2'>30% Federal Tax Credit</span>
//             <span className='text-white text-left'>Solar and Powerwall orders qualify for a federal tax credit. </span>
//          </div>
//          <div>
//          <input className='custom-input3' type='radio' name='panels' id='Powerwall'/>
//          <label className='radio-label3' htmlFor='Powerwall'>
//          <div className='m-mainheaderm mt-8 h-auto border-[1px] border-[#dddada] flex flex-col items-start justify-center rounded-[5px]'>
//             <img className='w-[100%] object-cover' src={myPro?.images?.[0]}/>
//             <span className='mb-2 pl-[1rem] text-[#000000]'>Powerwall 3 Only</span>
//             <span className='text-left pl-[1rem] pb-4 text-[#888585]'>Energy backup for your home</span>
//          </div>
//          </label>
//             <input className='custom-input3' type='radio' name='panels' id='Solar Panels'/>
//             <label className='radio-label3' htmlFor='Solar Panels'>
//             <div className='m-mainheaderm mt-8 h-auto border-[1px] border-[#dddada] flex flex-col items-start justify-center rounded-[5px]'>
//                <img className='w-[100%] object-cover' src={myPro?.images?.[1]}/>
//                <span className='mb-2 pl-[1rem] text-[#000000] mt-2'>Solar Panels + Powerwall 3</span>
//             <span className='text-left pl-[1rem] pb-4 text-[#888585]'>Panels for your existing roof with backup protection</span>
//             </div>
//             </label>
//             <div>
//             <input className='custom-input3' type='radio' name='panels' id='New luxury'/>
//             <label className='radio-label3' htmlFor='New luxury'>
//             <div className='m-mainheaderm mt-8 h-auto border-[1px] border-[#dddada] flex flex-col items-start justify-center rounded-[5px]'>
//                <img className='w-[100%] object-cover' src={myPro?.images?.[2]}/>
//                <span className='mb-2 pl-[1rem] text-[#000000] mt-2'>Solar Panels + Powerwall 3</span>
//             <span className='text-left pl-[1rem] pb-4 text-[#888585]'>New luxury integrated solar roof with backup protection</span>
//             </div>
//             </label>
//             </div>
//          </div>
//          <div className='mt-4 flex flex-col items-start'>
//          <span className='text-left text-[#888585] text-[13px]'>Prices include potential incentives, discounts, and Powerwall. Excludes future energy savings.</span>
//          <button disabled className='bg-blue-600 w-[100%] rounded-[5px] py-[0.5rem] text-white font-bold mt-5 mb-[2rem]'>Next</button>
//          </div>
//     </div>
//          </div>
//       </div>
  
//   </> 
  
  
//   : <>{<>
//    {myPro?.id === 3 ? 
//    (<>
   
//       <header className='fixed top-0 left-0 z-[1] bg-white'>
//           <div className='flex items-center justify-between px-5 py-4 w-[98vw]'>
//               <div><a aria-label="Tesla Logo" className="tds-site-logo-link" href="/">
//                   <svg className="w-[8rem] h-[1rem] text-black" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg">
//                       <path fill="currentColor" d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7M308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7"></path>
//                   </svg><span className="hidden">Tesla</span></a></div>
//               <div>   
//               {open ? null : (<button onClick={toggleNavbar}>
//                   <span className='text-[1.2rem] text-white bg-[#578de2] shadow-lg  pl-3 pr-3 pt-1 pb-1 rounded-lg font-medium'>Menu</span>
//               </button>)}
//               </div>
//           </div>
   
   
//           {open ? ( <div>
//       <button onClick={toggleNavbar} className='absolute top-[1rem] left-[22rem] z-[1]'>
//       <IoCloseOutline />
//       </button>
//       <ul className={`bg-white  flex flex-col text-black font-bold font-sans gap-y-6 items-start pl-[1.5rem] pt-[4rem] w-[100vw] h-[100vh] absolute top-0 left-0`}>
//           <li>Vehicels</li>
//           <li>Energy</li>
//           <li>Charging</li>
//           <li>Discover</li>
//           <li>Shop</li>
//           <li>Support</li>
//           <li>United States</li>
//           <li>Account</li>
//       </ul>
//    </div>) : null}
//       </header>
   
//    <div className='mt-20'>
//    <img className='w-[100%] h-auto object-contain'  src={myPro?.image?.[0]}/>
//    </div>
//    <div className='p-[1.5rem]'>
//    <div className='m-mainheaderm bg-radial-gradient  mt-8 h-[8rem] p-[1rem] flex flex-col items-start justify-center rounded-[5px]'>
//       <span className='text-white mb-2'>30% Federal Tax Credit</span>
//       <span className='text-white text-left'>Solar and Powerwall orders qualify for a federal tax credit. </span>
//    </div>
//    <div className='flex flex-col items-start'>
//       <span className='font-semibold text-2xl text-[#252424] mt-14 mb-4'>PowerWall 3</span>
//       <span className='text-[#888585] text-left'>Store energy for intelligent home backup and grid independence, complete with remote monitoring anywhere, anytime.</span>
//    </div>
//    <div className='flex flex-col items-start mt-8'>
//       <span className='mb-2 text-[#4d4c4c]'>Home Address</span>
//       <input className='w-[100%] h-[2.5rem] rounded-[5px] bg-[#eeecec] outline-none p-3' type='text' name='address' id='address'/>
//    </div>
//    <div className='mt-10'>
//    <button disabled className='bg-blue-600 w-[100%] rounded-[5px] py-[0.5rem] text-white font-bold mb-[1rem]'>Next</button>
//    <span className='text-[#919191]'>We won't spam you in any way.</span>
//    </div>
//    </div>
//    </>) 
   
//    : (<><div>
     
//    <header className='fixed top-0 left-0 z-[1] bg-white'>
//           <div className='flex items-center justify-between px-5 py-4 w-[98vw]'>
//               <div><a aria-label="Tesla Logo" className="tds-site-logo-link" href="/">
//                   <svg className="w-[8rem] h-[1rem] text-black" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg">
//                       <path fill="currentColor" d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7M308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7"></path>
//                   </svg><span className="hidden">Tesla</span></a></div>
//               <div>   
//               {open ? null : (<button onClick={toggleNavbar}>
//                   <span className='text-[1.2rem] text-white bg-[#578de2] shadow-lg  pl-3 pr-3 pt-1 pb-1 rounded-lg font-medium'>Menu</span>
//               </button>)}
//               </div>
//           </div>
   
   
//           {open ? ( <div>
//       <button onClick={toggleNavbar} className='absolute top-[1rem] left-[22rem] z-[1]'>
//       <IoCloseOutline />
//       </button>
//       <ul className={`bg-white  flex flex-col text-black font-bold font-sans gap-y-6 items-start pl-[1.5rem] pt-[4rem] w-[100vw] h-[100vh] absolute top-0 left-0`}>
//           <li>Vehicels</li>
//           <li>Energy</li>
//           <li>Charging</li>
//           <li>Discover</li>
//           <li>Shop</li>
//           <li>Support</li>
//           <li>United States</li>
//           <li>Account</li>
//       </ul>
//    </div>) : null}
//       </header>
   
//    <div className='mt-20 w-[70%] m-mainheaderm'>
//    <video autoPlay loop src={myPro?.video}/>
//    </div>
//     <div className='p-[1.5rem]'>
//          <div className='flex flex-col items-start'>
//             <span className='font-semibold text-3xl text-[#252424]'>Power Everything</span>
//             <span className='text-[#888585]'>Enter Home Details</span>
//          </div>
//          <div className='flex flex-col items-start mt-8'>
//             <span className='mb-2 text-[#4d4c4c]'>Home Address</span>
//             <input className='w-[100%] h-[2.5rem] rounded-[5px] bg-[#eeecec] outline-none p-3' type='text' name='address' id='address'/>
//          </div>
//          <div className='flex flex-col items-start mt-8'>
//             <span className='text-[#4d4c4c]'>Average Electric Bill</span>
//             <span className='mb-2 text-[#888585]'>One electric bill required</span>
//             <input className='w-[100%] h-[2.5rem] rounded-[5px] bg-[#eeecec] outline-none p-3' type='text' name='address' id='address'/>
//          </div>
//          <div className='flex flex-col items-start mt-8'>
//             <span>Know your average monthly consumption?</span>
//             <a href='#'>Enter your kWh</a>
//          </div>
//          <div className='flex flex-col items-start mt-8'>
//             <span className='font-semibold text-2xl text-[#252424]'>Choose a Product</span>
//             <span className='mb-2 text-[#888585]'>Help Me Choose Solar</span>
//          </div>
//          <div className='m-mainheaderm bg-radial-gradient  mt-8 h-[8rem] p-[1rem] flex flex-col items-start justify-center rounded-[5px]'>
//             <span className='text-white mb-2'>30% Federal Tax Credit</span>
//             <span className='text-white text-left'>Solar and Powerwall orders qualify for a federal tax credit. </span>
//          </div>
//          <div>
//          <input className='custom-input3' type='radio' name='panels' id='Powerwall'/>
//          <label className='radio-label3' htmlFor='Powerwall'>
//          <div className='m-mainheaderm mt-8 h-auto border-[1px] border-[#dddada] flex flex-col items-start justify-center rounded-[5px]'>
//             <img className='w-[100%] object-cover' src={myPro?.images?.[0]}/>
//             <span className='mb-2 pl-[1rem] text-[#000000]'>Powerwall 3 Only</span>
//             <span className='text-left pl-[1rem] pb-4 text-[#888585]'>Energy backup for your home</span>
//          </div>
//          </label>
//             <input className='custom-input3' type='radio' name='panels' id='Solar Panels'/>
//             <label className='radio-label3' htmlFor='Solar Panels'>
//             <div className='m-mainheaderm mt-8 h-auto border-[1px] border-[#dddada] flex flex-col items-start justify-center rounded-[5px]'>
//                <img className='w-[100%] object-cover' src={myPro?.images?.[1]}/>
//                <span className='mb-2 pl-[1rem] text-[#000000] mt-2'>Solar Panels + Powerwall 3</span>
//             <span className='text-left pl-[1rem] pb-4 text-[#888585]'>Panels for your existing roof with backup protection</span>
//             </div>
//             </label>
//             <div>
//             <input className='custom-input3' type='radio' name='panels' id='New luxury'/>
//             <label className='radio-label3' htmlFor='New luxury'>
//             <div className='m-mainheaderm mt-8 h-auto border-[1px] border-[#dddada] flex flex-col items-start justify-center rounded-[5px]'>
//                <img className='w-[100%] object-cover' src={myPro?.images?.[2]}/>
//                <span className='mb-2 pl-[1rem] text-[#000000] mt-2'>Solar Panels + Powerwall 3</span>
//             <span className='text-left pl-[1rem] pb-4 text-[#888585]'>New luxury integrated solar roof with backup protection</span>
//             </div>
//             </label>
//             </div>
//          </div>
//          <div className='mt-4 flex flex-col items-start'>
//          <span className='text-left text-[#888585] text-[13px]'>Prices include potential incentives, discounts, and Powerwall. Excludes future energy savings.</span>
//          <button disabled className='bg-blue-600 w-[100%] rounded-[5px] py-[0.5rem] text-white font-bold mt-5 mb-[2rem]'>Next</button>
//          </div>
//     </div>
//    </div></>)}
   
//    </>}</>
//   )
// }

// export default OneProduct

