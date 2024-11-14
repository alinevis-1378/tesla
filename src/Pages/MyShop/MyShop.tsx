import { Autoplay, Scrollbar } from "swiper/modules";
import HeaderShop from "../../Components/HeaderShop/HeaderShop"
import OneAccessory from "../../Components/OneAccessory/OneAccessory"
import OtherAccessory from "../../Components/OtherAccessiry/OtherAccessory"
import '../../Components/OtherAccessiry/OtherAccessory.css'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useState } from "react";


const someAccessory = [
  {id : 1 ,
  images : 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/tesla-shop-marketing-imagery/hero-carousel/M_Gradient-900px_Text.png',
  images2 : 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/tesla-shop-marketing-imagery/hero-carousel/M_Gradient-2800px_Text.png',
  oneTitr : '',
  twoTitr : '',
  },

  {
    id: 2,
    images : 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/4Z65LglsywtlS42_mobile.jpg',
    images2 : 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/4Z65LglsywtlS42_web.jpg',
    oneTitr : 'CYBERTRUCK',
    twoTitr : 'ACCESSORIES',
  },
  {
  id: 3,
  images : 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/fvW6NvXGLVYM7kco63br_mobile.jpg',
  images2 : 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/fvW6NvXGLVYM7kco63br_desktop.jpg',
  oneTitr : 'CHARGING',
  twoTitr : '',
},
{
id: 4,
images : 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/XQ7KsyDQ9Au8AXv5hHr1_mobile.jpg',
images2 : 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/XQ7KsyDQ9Au8AXv5hHr1_web.jpg',
oneTitr : 'LIFEESTYLE',
twoTitr : '',
},
]

const Accessory = [
  {id : 1 ,
    images : 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/MS_mobile.jpg' ,
    images2 :'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/MS_web.jpg',
    oneTitr : 'MODEL S',
    twoTitr : 'ACCESSORIES',
    },
    {id : 2 ,
    images : 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaapp/homepage/mobile-app-800x1700.jpg' ,
    images2 :'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaapp/homepage/M3H_desktop-2800x1300.jpg',
    oneTitr : 'MODEL 3',
    twoTitr : 'ACCESSORIES',
    },
    {id : 3 ,
    images : 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/MX_mobile.jpg' ,
    images2 :'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/MX_web.jpg',
    oneTitr : 'MODEL X',
    twoTitr : 'ACCESSORIES',
    },
    {id : 4 ,
    images : 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/MY_mobile.jpg' ,
    images2 :'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/MY_web.jpg',
    oneTitr : 'MODEL Y',
    twoTitr : 'ACCESSORIES',
    },
    {id : 5 ,
    images : 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/faf200f05dde1_men_mobile.jpg' ,
    images2 :'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/faf200f05dde1_men_mobile.jpg',
    oneTitr : 'MEN S',
    twoTitr : 'APPAREL',
    },
    {id : 6 ,
    images : 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/faf200f05dde1_women_mobile.jpg',
    images2 :'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/faf200f05dde1_women_mobile.jpg',
    oneTitr : 'WOMEN S',
    twoTitr : 'APPAREL',
    },
    {id : 7 ,
    images : 'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/faf200f05dde1_kids_mobile.jpg' ,
    images2 :'https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/faf200f05dde1_kids_mobile.jpg',
    oneTitr : 'KID S',
    twoTitr : 'APPAREL',
    },
]

function MyShop() {

  const [resizePage , setResizePage] = useState(window.innerWidth > 639)
  useEffect(() => {
    const handleResize = () => {
      setResizePage(window.innerWidth > 639)
    }

    window.addEventListener('resize' , handleResize)
    return () => removeEventListener('resize' , handleResize)
  })

  
  const [resizePage1 , setResizePage1] = useState(window.innerWidth > 1023)
  useEffect(() => {
    const handleResize1 = () => {
      setResizePage1(window.innerWidth > 1023)
    }

    window.addEventListener('resize' , handleResize1)
    return () => removeEventListener('resize' , handleResize1)
  })

const [isLargScreen , setIsLargScreen] = useState(window.innerWidth > 639)
useEffect(() => {
  const handleResize2 = () => {
    setIsLargScreen(window.innerWidth > 639)
  }

  window.addEventListener('resize' , handleResize2)
  return () => removeEventListener('resize' , handleResize2)
})

  return (
    <div className="bg-[#141414]">
    <HeaderShop/>
    {someAccessory.map((accessory) => (
      <OneAccessory {...accessory}
      images={isLargScreen ? accessory.images2 : accessory.images}
      
      />
    ))}

<div className=" w-[100%] h-auto bg-[#0e0e0e] noghte">
  <div className="flex pt-[4rem]  w-[100%]">
    <span className="text-white font-semibold text-[2rem] ml-[1.5rem]">BEST SELLERS</span>
  </div>
  <div className="mt-[2rem] w-[100%]">
    
{resizePage1 ?
 <>
<Swiper
     watchSlidesProgress={true} slidesPerView={3.3} loop={true} autoplay={true}  modules={[Autoplay]} className="mySwiper">
        <SwiperSlide>
          <img className="px-[1rem] w-[100%] h-auto object-cover" src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1521226-00-A_1_2000.jpg"/>
          <div className="w-[252px] mt-[1rem] px-[1rem] text-left"><span className="text-[#c6c4c4] text-[1.1rem] font-semibold text-left mt-2">CABLE ORGANIZER</span></div>
          </SwiperSlide>
        <SwiperSlide>
          <img className="px-[1rem] w-[100%] h-auto object-cover" src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/INTERIOR/1107681-00-A_0_2000.jpg"/>
          <div className="w-[252px] mt-[1rem] px-[1rem] text-left"><span className='text-[#c6c4c4] text-[1.1rem] font-semibold text-left mt-2'>MODEL 3/Y AIR FILTER</span></div>
          </SwiperSlide>
        <SwiperSlide>
          <img className="px-[1rem] w-[100%] h-auto object-cover" src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/INTERIOR/1634268-00-A_0_2000.jpg"/>
          <div className="w-[252px] mt-[1rem] px-[1rem] text-left"><span className="text-[#c6c4c4] text-[1.1rem] font-semibold text-left mt-2">MODEL Y AND 2017-2023 | MODEL 3 CENTER CONSOLE TRAYS</span></div>
          </SwiperSlide>
        <SwiperSlide>
          <img className="px-[1rem] w-[100%] h-auto object-cover" src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_Y/INTERIOR/1616599-00-A_0_2000.jpg"/>
          <div className="w-[252px] mt-[1rem] px-[1rem] text-left"><span className="text-[#c6c4c4] text-[1.1rem] font-semibold text-left mt-2">MODEL Y ALL-WEATHER INTERIOR LINERS</span></div>
          </SwiperSlide>
      </Swiper>
 </> : 
 
 <>
 {resizePage ? 
<>
<Swiper
     watchSlidesProgress={true} slidesPerView={2.3} loop={true} autoplay={true}  modules={[Autoplay]} className="mySwiper">
        <SwiperSlide>
          <img className="px-[1rem] w-[100%] h-auto object-cover" src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1521226-00-A_1_2000.jpg"/>
          <div className="w-[252px] mt-[1rem] px-[1rem] text-left"><span className="text-[#c6c4c4] text-[1.1rem] font-semibold text-left mt-2">CABLE ORGANIZER</span></div>
          </SwiperSlide>
        <SwiperSlide>
          <img className="px-[1rem] w-[100%] h-auto object-cover" src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/INTERIOR/1107681-00-A_0_2000.jpg"/>
          <div className="w-[252px] mt-[1rem] px-[1rem] text-left"><span className='text-[#c6c4c4] text-[1.1rem] font-semibold text-left mt-2'>MODEL 3/Y AIR FILTER</span></div>
          </SwiperSlide>
        <SwiperSlide>
          <img className="px-[1rem] w-[100%] h-auto object-cover" src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/INTERIOR/1634268-00-A_0_2000.jpg"/>
          <div className="w-[252px] mt-[1rem] px-[1rem] text-left"><span className="text-[#c6c4c4] text-[1.1rem] font-semibold text-left mt-2">MODEL Y AND 2017-2023 | MODEL 3 CENTER CONSOLE TRAYS</span></div>
          </SwiperSlide>
        <SwiperSlide>
          <img className="px-[1rem] w-[100%] h-auto object-cover" src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_Y/INTERIOR/1616599-00-A_0_2000.jpg"/>
          <div className="w-[252px] mt-[1rem] px-[1rem] text-left"><span className="text-[#c6c4c4] text-[1.1rem] font-semibold text-left mt-2">MODEL Y ALL-WEATHER INTERIOR LINERS</span></div>
          </SwiperSlide>
      </Swiper>
</> 

: 
<>
<Swiper
     watchSlidesProgress={true} slidesPerView={1.3} loop={true} autoplay={true}  modules={[Autoplay]}className="mySwiper">
        <SwiperSlide>
          <img className="px-[1rem] w-[100%] h-auto object-cover" src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_S/CHARGING_ADAPTERS/1521226-00-A_1_2000.jpg"/>
          <div className="w-[252px] mt-[1rem] px-[1rem] text-left"><span className="text-[#c6c4c4] text-[1.1rem] font-semibold text-left mt-2">CABLE ORGANIZER</span></div>
          </SwiperSlide>
        <SwiperSlide>
          <img className="px-[1rem] w-[100%] h-auto object-cover" src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/INTERIOR/1107681-00-A_0_2000.jpg"/>
          <div className="w-[252px] mt-[1rem] px-[1rem] text-left"><span className='text-[#c6c4c4] text-[1.1rem] font-semibold text-left mt-2'>MODEL 3/Y AIR FILTER</span></div>
          </SwiperSlide>
        <SwiperSlide>
          <img className="px-[1rem] w-[100%] h-auto object-cover" src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_3/INTERIOR/1634268-00-A_0_2000.jpg"/>
          <div className="w-[252px] mt-[1rem] px-[1rem] text-left"><span className="text-[#c6c4c4] text-[1.1rem] font-semibold text-left mt-2">MODEL Y AND 2017-2023 | MODEL 3 CENTER CONSOLE TRAYS</span></div>
          </SwiperSlide>
        <SwiperSlide>
          <img className="px-[1rem] w-[100%] h-auto object-cover" src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/studio/CAR_ACCESSORIES/MODEL_Y/INTERIOR/1616599-00-A_0_2000.jpg"/>
          <div className="w-[252px] mt-[1rem] px-[1rem] text-left"><span className="text-[#c6c4c4] text-[1.1rem] font-semibold text-left mt-2">MODEL Y ALL-WEATHER INTERIOR LINERS</span></div>
          </SwiperSlide>
      </Swiper>
</>}
 </>}

      </div>
</div>

    {Accessory.map((accessory1) => (
      <OtherAccessory index={0} {...accessory1}
      images={isLargScreen ? accessory1.images2 : accessory1.images}
      />
    ))}
    </div>
  )
}

export default MyShop