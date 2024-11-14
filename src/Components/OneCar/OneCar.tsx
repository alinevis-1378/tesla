import './OneCar.css'
import { NavLink, Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IoCloseOutline } from "react-icons/io5";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const allDetailCars = [
  {id : 1 ,
   image1 :'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Mobile-LHD-v2.jpg' ,
   images : [
   'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT355,$PBSB,$W38A,$IPB2&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&crop=1300,500,300,300&',
   'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT355,$PPSW,$W38A,$IPB2&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&crop=1300,500,300,300&',
   'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT355,$PPSB,$W38A,$IPB2&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&crop=1300,500,300,300&',
   'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT355,$PR01,$W38A,$IPB2&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&crop=1300,500,300,300&',
   'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT355,$PN01,$W38A,$IPB2&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&crop=1300,500,300,300&',

   'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT355,$PBSB,$W39S,$IPB2&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&crop=1300,500,300,300&',
   'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT355,$PPSW,$W39S,$IPB2&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&crop=1300,500,300,300&',
   'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT355,$PPSB,$W39S,$IPB2&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&crop=1300,500,300,300&',
   'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT355,$PR01,$W39S,$IPB2&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&crop=1300,500,300,300&',
   'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT355,$PN01,$W39S,$IPB2&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&crop=1300,500,300,300&',
   
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT355,$PBSB,$W38A,$IPB2&view=SIDE&model=m3&size=1920&bkba_opt=1&crop=1300,450,300,300&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT355,$PPSW,$W38A,$IPB2&view=SIDE&model=m3&size=1920&bkba_opt=1&crop=1300,450,300,300&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT355,$PPSB,$W38A,$IPB2&view=SIDE&model=m3&size=1920&bkba_opt=1&crop=1300,450,300,300&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT355,$PR01,$W38A,$IPB2&view=SIDE&model=m3&size=1920&bkba_opt=1&crop=1300,450,300,300&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT355,$PN01,$W38A,$IPB2&view=SIDE&model=m3&size=1920&bkba_opt=1&crop=1300,450,300,300&',

     'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT355,$PBSB,$W39S,$IPB2&view=SIDE&model=m3&size=1920&bkba_opt=1&crop=1300,450,300,300&',
     'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT355,$PPSW,$W39S,$IPB2&view=SIDE&model=m3&size=1920&bkba_opt=1&crop=1300,450,300,300&',
     'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT355,$PPSB,$W39S,$IPB2&view=SIDE&model=m3&size=1920&bkba_opt=1&crop=1300,450,300,300&',
     'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT355,$PR01,$W39S,$IPB2&view=SIDE&model=m3&size=1920&bkba_opt=1&crop=1300,450,300,300&',
     'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT355,$PN01,$W39S,$IPB2&view=SIDE&model=m3&size=1920&bkba_opt=1&crop=1300,450,300,300&',

    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT355,$PBSB,$W38A,$IPB2&view=STUD_RIMCLOSEUP&model=m3&size=1920&bkba_opt=1&crop=0,950,160,0&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT355,$PPSW,$W38A,$IPB2&view=STUD_RIMCLOSEUP&model=m3&size=1920&bkba_opt=1&crop=0,950,160,0&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT355,$PPSB,$W38A,$IPB2&view=STUD_RIMCLOSEUP&model=m3&size=1920&bkba_opt=1&crop=0,950,160,0&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT355,$PR01,$W38A,$IPB2&view=STUD_RIMCLOSEUP&model=m3&size=1920&bkba_opt=1&crop=0,950,160,0&' ,
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT355,$PN01,$W38A,$IPB2&view=STUD_RIMCLOSEUP&model=m3&size=1920&bkba_opt=1&crop=0,950,160,0&',

    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT355,$PBSB,$W39S,$IPB2&view=STUD_RIMCLOSEUP&model=m3&size=1920&bkba_opt=1&crop=0,950,160,0&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT355,$PPSW,$W39S,$IPB2&view=STUD_RIMCLOSEUP&model=m3&size=1920&bkba_opt=1&crop=0,950,160,0&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT355,$PPSB,$W39S,$IPB2&view=STUD_RIMCLOSEUP&model=m3&size=1920&bkba_opt=1&crop=0,950,160,0&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT355,$PR01,$W39S,$IPB2&view=STUD_RIMCLOSEUP&model=m3&size=1920&bkba_opt=1&crop=0,950,160,0&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT355,$PN01,$W39S,$IPB2&view=STUD_RIMCLOSEUP&model=m3&size=1920&bkba_opt=1&crop=0,950,160,0&',
   ],
   model :'MODEL 3' ,
   oneTitr : '$7,500 Federal Tax Credit Available' ,
   twoTitr : 'From $29,990 After Est. Savings',
   carProperty : {range : '363 mi' , topSpeed :'125 mph' ,mph: '4.9 sec'},
  },

  {id : 2 ,
   image1 :'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-Y-Mobile-Global.jpg' ,
   images : [
     'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY35,$PBSB,$WY19C,$INPB0&view=FRONT34&model=my&size=1920&bkba_opt=1&crop=1300,450,300,300&',
     'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY35,$PPSW,$WY19C,$INPB0&view=FRONT34&model=my&size=1920&bkba_opt=1&crop=1300,450,300,300&',
     'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY35,$PPSB,$WY19C,$INPB0&view=FRONT34&model=my&size=1920&bkba_opt=1&crop=1300,450,300,300&',
     'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY35,$PR01,$WY19C,$INPB0&view=FRONT34&model=my&size=1920&bkba_opt=1&crop=1300,450,300,300&',
     'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY35,$PN01,$WY19C,$INPB0&view=FRONT34&model=my&size=1920&bkba_opt=1&crop=1300,450,300,300&',

     'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY35,$PBSB,$WY20P,$INPB0&view=FRONT34&model=my&size=1920&bkba_opt=1&crop=1300,450,300,300&',
     'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY35,$PPSW,$WY20P,$INPB0&view=FRONT34&model=my&size=1920&bkba_opt=1&crop=1300,450,300,300&',
     'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY35,$PPSB,$WY20P,$INPB0&view=FRONT34&model=my&size=1920&bkba_opt=1&crop=1300,450,300,300&',
     'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY35,$PR01,$WY20P,$INPB0&view=FRONT34&model=my&size=1920&bkba_opt=1&crop=1300,450,300,300&',
     'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY35,$PN01,$WY20P,$INPB0&view=FRONT34&model=my&size=1920&bkba_opt=1&crop=1300,450,300,300&',

     'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY35,$PBSB,$WY19C,$INPB0&view=SIDE&model=my&size=1920&bkba_opt=1&crop=1300,450,300,300&',
     'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY35,$PPSW,$WY19C,$INPB0&view=SIDE&model=my&size=1920&bkba_opt=1&crop=1300,450,300,300&',
     'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY35,$PPSB,$WY19C,$INPB0&view=SIDE&model=my&size=1920&bkba_opt=1&crop=1300,450,300,300&',
     'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY35,$PR01,$WY19C,$INPB0&view=SIDE&model=my&size=1920&bkba_opt=1&crop=1300,450,300,300&',
     'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY35,$PN01,$WY19C,$INPB0&view=SIDE&model=my&size=1920&bkba_opt=1&crop=1300,450,300,300&',

     'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY35,$PBSB,$WY20P,$INPB0&view=SIDE&model=my&size=1920&bkba_opt=1&crop=1300,450,300,300&',
     'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY35,$PPSW,$WY20P,$INPB0&view=SIDE&model=my&size=1920&bkba_opt=1&crop=1300,450,300,300&',
     'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY35,$PPSB,$WY20P,$INPB0&view=SIDE&model=my&size=1920&bkba_opt=1&crop=1300,450,300,300&',
     'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY35,$PR01,$WY20P,$INPB0&view=SIDE&model=my&size=1920&bkba_opt=1&crop=1300,450,300,300&',
     'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY35,$PN01,$WY20P,$INPB0&view=SIDE&model=my&size=1920&bkba_opt=1&crop=1300,450,300,300&',

     'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY35,$PBSB,$WY19C,$INPB0&view=RIMCLOSEUP&model=my&size=1920&bkba_opt=1&crop=0,0,80,0&',
     'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY35,$PPSW,$WY19C,$INPB0&view=RIMCLOSEUP&model=my&size=1920&bkba_opt=1&crop=0,0,80,0&',
     'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY35,$PPSB,$WY19C,$INPB0&view=RIMCLOSEUP&model=my&size=1920&bkba_opt=1&crop=0,0,80,0&',
     'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY35,$PR01,$WY19C,$INPB0&view=RIMCLOSEUP&model=my&size=1920&bkba_opt=1&crop=0,0,80,0&',
     'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY35,$PN01,$WY19C,$INPB0&view=RIMCLOSEUP&model=my&size=1920&bkba_opt=1&crop=0,0,80,0&',

     'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY35,$PBSB,$WY20P,$INPB0&view=RIMCLOSEUP&model=my&size=1920&bkba_opt=1&crop=0,0,80,0&',
     'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY35,$PPSW,$WY20P,$INPB0&view=RIMCLOSEUP&model=my&size=1920&bkba_opt=1&crop=0,0,80,0&',
     'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY35,$PPSB,$WY20P,$INPB0&view=RIMCLOSEUP&model=my&size=1920&bkba_opt=1&crop=0,0,80,0&',
     'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY35,$PR01,$WY20P,$INPB0&view=RIMCLOSEUP&model=my&size=1920&bkba_opt=1&crop=0,0,80,0&',
     'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY35,$PN01,$WY20P,$INPB0&view=RIMCLOSEUP&model=my&size=1920&bkba_opt=1&crop=0,0,80,0&',

   ],
   model :'MODEL Y' , oneTitr : '1.99% APR Financing Ending August 31' ,
   twoTitr : 'From $31,490',
   carProperty : {range : '295 mi' , topSpeed :'139 mph' , mph: '6.35 sec'},
  },

  {id : 3 ,
  image1 :'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-X-Mobile-v2.jpg' ,
  images :[
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX18,$PBSB,$WX00,$IBE00&view=FRONT34&model=mx&size=1920&bkba_opt=1&crop=1300,600,300,230&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX18,$PPSW,$WX00,$IBE00&view=FRONT34&model=mx&size=1920&bkba_opt=1&crop=1300,600,300,230&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX18,$PPSB,$WX00,$IBE00&view=FRONT34&model=mx&size=1920&bkba_opt=1&crop=1300,600,300,230&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX18,$PR01,$WX00,$IBE00&view=FRONT34&model=mx&size=1920&bkba_opt=1&crop=1300,600,300,230&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX18,$PN01,$WX00,$IBE00&view=FRONT34&model=mx&size=1920&bkba_opt=1&crop=1300,600,300,230&',

    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX18,$PBSB,$WX20,$IBE00&view=FRONT34&model=mx&size=1920&bkba_opt=1&crop=1300,600,300,230&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX18,$PPSW,$WX20,$IBE00&view=FRONT34&model=mx&size=1920&bkba_opt=1&crop=1300,600,300,230&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX18,$PPSB,$WX20,$IBE00&view=FRONT34&model=mx&size=1920&bkba_opt=1&crop=1300,600,300,230&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX18,$PR01,$WX20,$IBE00&view=FRONT34&model=mx&size=1920&bkba_opt=1&crop=1300,600,300,230&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX18,$PN01,$WX20,$IBE00&view=FRONT34&model=mx&size=1920&bkba_opt=1&crop=1300,600,300,230&',

    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX18,$PBSB,$WX00,$IBE00&view=SIDE&model=mx&size=1920&bkba_opt=1&crop=1300,600,300,230&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX18,$PPSW,$WX00,$IBE00&view=SIDE&model=mx&size=1920&bkba_opt=1&crop=1300,600,300,230&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX18,$PPSB,$WX00,$IBE00&view=SIDE&model=mx&size=1920&bkba_opt=1&crop=1300,600,300,230&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX18,$PR01,$WX00,$IBE00&view=SIDE&model=mx&size=1920&bkba_opt=1&crop=1300,600,300,230&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX18,$PN01,$WX00,$IBE00&view=SIDE&model=mx&size=1920&bkba_opt=1&crop=1300,600,300,230&',

    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX18,$PBSB,$WX20,$IBE00&view=SIDE&model=mx&size=1920&bkba_opt=1&crop=1300,600,300,230&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX18,$PPSW,$WX20,$IBE00&view=SIDE&model=mx&size=1920&bkba_opt=1&crop=1300,600,300,230&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX18,$PPSB,$WX20,$IBE00&view=SIDE&model=mx&size=1920&bkba_opt=1&crop=1300,600,300,230&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX18,$PR01,$WX20,$IBE00&view=SIDE&model=mx&size=1920&bkba_opt=1&crop=1300,600,300,230&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX18,$PN01,$WX20,$IBE00&view=SIDE&model=mx&size=1920&bkba_opt=1&crop=1300,600,300,230&',

    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX18,$PBSB,$WX00,$IBE00&view=RIMCLOSEUP&model=mx&size=1920&bkba_opt=1&crop=0,0,0,0&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX18,$PPSW,$WX00,$IBE00&view=RIMCLOSEUP&model=mx&size=1920&bkba_opt=1&crop=0,0,0,0&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX18,$PPSB,$WX00,$IBE00&view=RIMCLOSEUP&model=mx&size=1920&bkba_opt=1&crop=0,0,0,0&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX18,$PR01,$WX00,$IBE00&view=RIMCLOSEUP&model=mx&size=1920&bkba_opt=1&crop=0,0,0,0&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX18,$PN01,$WX00,$IBE00&view=RIMCLOSEUP&model=mx&size=1920&bkba_opt=1&crop=0,0,0,0&',

    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX18,$PBSB,$WX20,$IBE00&view=RIMCLOSEUP&model=mx&size=1920&bkba_opt=1&crop=0,0,0,0&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX18,$PPSW,$WX20,$IBE00&view=RIMCLOSEUP&model=mx&size=1920&bkba_opt=1&crop=0,0,0,0&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX18,$PPSB,$WX20,$IBE00&view=RIMCLOSEUP&model=mx&size=1920&bkba_opt=1&crop=0,0,0,0&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX18,$PR01,$WX20,$IBE00&view=RIMCLOSEUP&model=mx&size=1920&bkba_opt=1&crop=0,0,0,0&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX18,$PN01,$WX20,$IBE00&view=RIMCLOSEUP&model=mx&size=1920&bkba_opt=1&crop=0,0,0,0&',
  ],
  model :'MODEL X' ,
  oneTitr : 'From $65,990' ,
  twoTitr : 'After $14,000 Est. Savings' ,
  carProperty : {range : '335 mi' , topSpeed :'149 mph' , mph: '3.8 sec'},
  },

  {id : 4 ,
  image1 :'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-S-Mobile-v2.jpg' ,
  images : [
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS18,$PBSB,$WS91,$IBE00&view=FRONT34&model=ms&size=1920&bkba_opt=1&crop=1300,500,300,300&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS18,$PPSW,$WS91,$IBE00&view=FRONT34&model=ms&size=1920&bkba_opt=1&crop=1300,500,300,300&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS18,$PPSB,$WS91,$IBE00&view=FRONT34&model=ms&size=1920&bkba_opt=1&crop=1300,500,300,300&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS18,$PR01,$WS91,$IBE00&view=FRONT34&model=ms&size=1920&bkba_opt=1&crop=1300,500,300,300&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS18,$PN01,$WS91,$IBE00&view=FRONT34&model=ms&size=1920&bkba_opt=1&crop=1300,500,300,300&',

    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS18,$PBSB,$WS11,$IBE00&view=FRONT34&model=ms&size=1920&bkba_opt=1&crop=1300,500,300,300&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS18,$PPSW,$WS11,$IBE00&view=FRONT34&model=ms&size=1920&bkba_opt=1&crop=1300,500,300,300&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS18,$PPSB,$WS11,$IBE00&view=FRONT34&model=ms&size=1920&bkba_opt=1&crop=1300,500,300,300&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS18,$PR01,$WS11,$IBE00&view=FRONT34&model=ms&size=1920&bkba_opt=1&crop=1300,500,300,300&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS18,$PN01,$WS11,$IBE00&view=FRONT34&model=ms&size=1920&bkba_opt=1&crop=1300,500,300,300&',

    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS18,$PBSB,$WS91,$IBE00&view=SIDE&model=ms&size=1920&bkba_opt=1&crop=1300,450,300,300&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS18,$PPSW,$WS91,$IBE00&view=SIDE&model=ms&size=1920&bkba_opt=1&crop=1300,450,300,300&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS18,$PPSB,$WS91,$IBE00&view=SIDE&model=ms&size=1920&bkba_opt=1&crop=1300,450,300,300&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS18,$PR01,$WS91,$IBE00&view=SIDE&model=ms&size=1920&bkba_opt=1&crop=1300,450,300,300&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS18,$PN01,$WS91,$IBE00&view=SIDE&model=ms&size=1920&bkba_opt=1&crop=1300,450,300,300&',

    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS18,$PBSB,$WS11,$IBE00&view=SIDE&model=ms&size=1920&bkba_opt=1&crop=1300,450,300,300&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS18,$PPSW,$WS11,$IBE00&view=SIDE&model=ms&size=1920&bkba_opt=1&crop=1300,450,300,300&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS18,$PPSB,$WS11,$IBE00&view=SIDE&model=ms&size=1920&bkba_opt=1&crop=1300,450,300,300&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS18,$PR01,$WS11,$IBE00&view=SIDE&model=ms&size=1920&bkba_opt=1&crop=1300,450,300,300&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS18,$PN01,$WS11,$IBE00&view=SIDE&model=ms&size=1920&bkba_opt=1&crop=1300,450,300,300&',

    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS18,$PBSB,$WS91,$IBE00&view=RIMCLOSEUP&model=ms&size=1920&bkba_opt=1&crop=0,950,160,0&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS18,$PPSW,$WS91,$IBE00&view=RIMCLOSEUP&model=ms&size=1920&bkba_opt=1&crop=0,950,160,0&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS18,$PPSB,$WS91,$IBE00&view=RIMCLOSEUP&model=ms&size=1920&bkba_opt=1&crop=0,950,160,0&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS18,$PR01,$WS91,$IBE00&view=RIMCLOSEUP&model=ms&size=1920&bkba_opt=1&crop=0,950,160,0&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS18,$PN01,$WS91,$IBE00&view=RIMCLOSEUP&model=ms&size=1920&bkba_opt=1&crop=0,950,160,0&',

    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS18,$PBSB,$WS11,$IBE00&view=RIMCLOSEUP&model=ms&size=1920&bkba_opt=1&crop=0,950,160,0&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS18,$PPSW,$WS11,$IBE00&view=RIMCLOSEUP&model=ms&size=1920&bkba_opt=1&crop=0,950,160,0&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS18,$PPSB,$WS11,$IBE00&view=RIMCLOSEUP&model=ms&size=1920&bkba_opt=1&crop=0,950,160,0&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS18,$PR01,$WS11,$IBE00&view=RIMCLOSEUP&model=ms&size=1920&bkba_opt=1&crop=0,950,160,0&',
    'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS18,$PN01,$WS11,$IBE00&view=RIMCLOSEUP&model=ms&size=1920&bkba_opt=1&crop=0,950,160,0&',
  ],
  model :'MODEL S' ,
  oneTitr : 'From $68,490' ,
  twoTitr : 'After $6,500 Est. Savings',
  carProperty : {range : '402 mi' , topSpeed :'130 mph' , mph: '3.1 sec'},
  },

]

function OneCar() {

    const { id } = useParams();
    const myCar = allDetailCars.find((prod) => prod.id === Number(id));
     
    const [resizePage , setResizePage] = useState(window.innerWidth > 1279)
    useEffect(() => {
    const handleResize = () => {
      setResizePage(window.innerWidth > 1279)
      }

      window.addEventListener('resize' , handleResize);
      return () => window.removeEventListener('resize' , handleResize)
   } , [])


  type CarImage = {
   [key : string] : string[]
  }

  type cartireimage = {
    [key : string] : string
  }

  const [selectedColor , setSelectedColor] = useState('black')
  const [selectedTire , setSelectedTire] = useState('blackring')
  const [selectedInteriorImage , setSelectedInteriorImage] = useState('blackin')
  
  const handleChangeColor = (color : string) => {
    setSelectedColor(color);
};

const handleChangeTire = (tire : string) => {
 setSelectedTire(tire)
 console.log(tire)
}

const handleChangeInside = (inside : string) => {
 setSelectedInteriorImage(inside)
}




 const carImage1 : CarImage = {
  black : [myCar?.images[0] ?? '', myCar?.images[5] ?? ''] ,
  white : [myCar?.images[1] ?? '' , myCar?.images[6] ?? ''],
  blue : [myCar?.images[2] ?? '' , myCar?.images[7] ?? ''],
  red : [myCar?.images[3] ?? ''  , myCar?.images[8] ?? ''] ,
  StealthGrey : [myCar?.images[4] ?? '' , myCar?.images[9] ?? ''],
 }



  const carImage2 : CarImage = {
    black : [myCar?.images[20] ?? '', myCar?.images[25] ?? ''] ,
    white : [myCar?.images[21] ?? '' , myCar?.images[26] ?? ''],
    blue : [myCar?.images[22] ?? '' , myCar?.images[27] ?? ''],
    red : [myCar?.images[23] ?? ''  , myCar?.images[28] ?? ''] ,
    StealthGrey : [myCar?.images[24] ?? '' , myCar?.images[29] ?? ''],
  }

  const carImage : CarImage = {
    black : [myCar?.images[10] ?? '', myCar?.images[15] ?? ''] ,
    white : [myCar?.images[11] ?? '' , myCar?.images[16] ?? ''],
    blue : [myCar?.images[12] ?? '' , myCar?.images[17] ?? ''],
    red : [myCar?.images[13] ?? ''  , myCar?.images[18] ?? ''] ,
    StealthGrey : [myCar?.images[14] ?? '' , myCar?.images[19] ?? ''],
  }



  const InteriorImage : cartireimage = {
    blackin : 'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$IPB2,$PN01,$MT355&view=STUD_INTERIOR&model=m3&size=1441&bkba_opt=1&crop=0,0,0,0&',
    whitein : 'https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$IPW2,$PN01,$MT355&view=STUD_INTERIOR&model=m3&size=1441&bkba_opt=1&crop=0,0,0,0&',
  }

const carTireImage : cartireimage = {
  blackring : 'https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/static_assets/MODEL3_/UI/Wheel-Swatch_18-in.png?',
  whitering : 'https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/static_assets/MODEL3_/UI/Wheel-Swatch_19-in.png?',
} 

const Interior : cartireimage = {
blackin : 'https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/static_assets/MODEL3/UI/ui_swat_int_in3pb.png?',
whitein : 'https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/static_assets/MODEL3/UI/ui_swat_int_white.png?',
}

const [open , setOpen] = useState(false)

const toggleNavbar = () => {
    setOpen((prev) => !prev)
}

  return (
  resizePage === true ? 
  <div className='grid grid-cols-2 w-[100%]  mt-[5rem]'>
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

  <div className='w-[100%] ml-[2rem]'>
  <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper myswiper1  lg:w-[50rem] 2xl:w-[60rem]"
      >
        <SwiperSlide><img className='w-[100%] mt-[4rem]' src={selectedTire === 'blackring' ? carImage1[selectedColor][0] : carImage1[selectedColor][1]}/></SwiperSlide>
        <SwiperSlide><img className='w-[100%] mt-[4rem]' src={selectedTire === 'blackring' ? carImage[selectedColor][0] : carImage[selectedColor][1]}/></SwiperSlide>
        <SwiperSlide><img className='w-[100%]' src={selectedTire === 'blackring' ? carImage2[selectedColor][0] : carImage2[selectedColor][1]}/></SwiperSlide>
      </Swiper>
  </div>
  <div className='flex flex-col items-center w-[82%] ml-[8rem]'>
  <section className='grid grid-cols-1 mt-[2rem]'>
       <div><h3 className='font-bold font-[cursive] text-[1.5rem] ml-[2rem]'>{myCar?.model}</h3></div>
       <div className='flex justify-evenly items-center mt-[1rem]'>
          <div className='flex flex-col items-center justify-center'>
              <span className='font-semibold'>{myCar?.carProperty?.range}</span>
              <p>Range {'('} EPA est.{')'}</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
              <span className='font-semibold'>{myCar?.carProperty?.topSpeed}</span>
              <p>Top Speed</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
              <span className='font-semibold'>{myCar?.carProperty?.mph}</span>
              <p>0-60 mph</p>
          </div>
       </div>
     </section>

     <div className="flex justify-center w-[24rem] gap-[4rem] mt-[2rem]">
      <NavLink style={({isActive}) => {return isActive ? {color : 'blue' , borderBottom : '1px solid blue' , scale : '2' , transition : 'all 0.5s ease-in'} : {}}} className='border-b-[1px] border-b-[black] text-[#6a6868] font-bold font-[cursive]' to='cash'>Cash</NavLink>
      <NavLink style={({isActive}) => {return isActive ? {color : 'blue' , borderBottom : '1px solid blue' , scale : '2' , transition : 'all 0.5s ease-in'} : {}}} className='border-b-[1px] border-b-[black] text-[#6a6868] font-bold font-[cursive]' to='lease'>Lease</NavLink>
      <NavLink style={({isActive}) => {return isActive ? {color : 'blue' , borderBottom : '1px solid blue' , scale : '2' , transition : 'all 0.5s ease-in'} : {}}} className='border-b-[1px] border-b-[black] text-[#6a6868] font-bold font-[cursive]' to='finance'>Finance</NavLink>
      </div>
    <Outlet/>
    <button className='m-mainheaderm mt-5 w-[13rem] bg-[#eeeded] rounded-md py-[0.5rem] px-[2rem]'>
     <span> Feature Details</span>
    </button>

    <section className='flex flex-col mt-16'>
      <div className='mt-8'>
        <span className='m-mainheaderm font-bold text-[1.5rem]'>Paint</span>
        <div className='flex items-center justify-center mt-8'>
          {['black' , 'white' , 'blue' , 'red' , 'StealthGrey'].map(color => (
  
           <div>
           <input type='radio' id={`color${color}`} name='paint' className='custom-radio' onChange={() => handleChangeColor(color)} checked={selectedColor === color}/>
           <label className='radio-label' htmlFor={`color${color}`}>
           <img className='w-[2.5rem] p-1' src={color === 'StealthGrey' ? 'https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/static_assets/MODEL3_/UI/Paint_StealthGrey.png?' : `https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/static_assets/MODEL3/UI/Paint_${color.charAt(0).toUpperCase() + color.slice(1)}.png`} />
           </label>
           </div>
          ))}
        </div>
      </div>
    </section>

    <section className='mt-16'>
      <span className='m-mainheaderm font-bold text-[1.5rem]'>Wheels</span>
      <div className='flex items-center justify-center gap-x-2 mt-8'>
       {['blackring' , 'whitering'].map(tire => ( 
      <div>
      <input className='custom-radio1' type='radio' name='ring' id={tire} onChange={() => handleChangeTire(tire)} checked={selectedTire === tire}/>
      <label className='radio-label1' htmlFor={tire}>
      <img className='p-1' src={carTireImage[tire]}/>
      </label>
      </div>
       ))}
      </div>
    </section>

    <section className='mt-16'>
      <span className='m-mainheaderm font-bold text-[1.5rem]'>Interior</span>
      <div className='flex justify-center items-center mt-5'>
      {['blackin' , 'whitein'].map(inside => (
         <div>
         <input type='radio' id={inside} className='custom-radio2' name='Interior' onChange={() => handleChangeInside(inside)} checked={selectedInteriorImage === inside}/>
         <label className='radio-label2' htmlFor={inside}>
         <img className='p-1' src={Interior[inside]}/>
         </label>
        </div>
      ))}
      </div>
    </section>
    <button className='m-mainheaderm mt-5 w-[13rem] bg-[#eeeded] rounded-md py-[0.5rem] px-[2rem]'>
     <span> Feature Details</span>
    </button>

    <section>
      <video className='w-[100%] h-auto' src='https://digitalassets.tesla.com/co1n/video/upload/f_auto:video,q_auto:best/prod/static_assets/MODEL3_/UI/lane_change_m3.mp4' autoPlay playsInline loop/>
      <div className='flex flex-col px-[1.5rem] sm:flex sm:flex-col sm:items-center'>
        <h1 className='pt-5 font-bold text-xl text-[#535252]'>Full Self-Driving Capability</h1>
        <span className='mt-2'>$8000</span>
        <span className='text-left mt-4 text-[#706f6f] w-[21rem] text-[15px] sm:'>Receive a 30 day trial of Full Self-Driving Capability with a new vehicle purchase.</span>
        <span className='text-left mt-4 text-[#706f6f] w-[22rem] text-[15px] sm:'>Your car will be able to drive itself almost anywhere with minimal driver intervention and will continuously improve</span>
          <ul className='!list-disc w-[22rem] text-left mt-5 pl-[2rem] text-[#706f6f]'>
            <li>Navigate on Autopilot</li>
            <li>Auto Lane Change</li>
            <li>Autopark</li>
            <li>Summon</li>
            <li>Smart Summon</li>
            <li>Autosteer on city streets</li>
            <li>Traffic Light and Stop Sign Control</li>
          </ul>
          <div>
            <p className='text-left mt-4 text-[#000000] w-[21rem] text-[13px]'>The currently enabled features require active driver supervision and do not make the vehicle autonomous. The activation and use of these features are dependent on achieving reliability far in excess of human drivers as demonstrated by billions of miles of experience, as well as regulatory approval, which may take longer in some jurisdictions. As these self-driving features evolve, your car will be continuously upgraded through over-the-air software updates.</p>
            <div className='flex gap-x-3 justify-between items-center mt-7'>
            <button className='bg-blue-600 w-[9.5rem] rounded-sm py-1 text-white font-bold'>Add</button>
            <button className='bg-[#dfdfdf] w-[9.5rem] rounded-sm py-1'>Feature Details</button>
            </div>
          </div>
          <div className='mt-[7rem]'>
            <h1 className='font-bold text-xl text-[#2d2d2d] mb-8'>Charging</h1>
            <span>Home charging equipment is not included</span>
            <div className='flex flex-col gap-y-4 mt-8'>
              <div className='flex gap-3'>
              <input className='w-[1.5rem] h-[1.5rem]' type='checkbox' id='Wall Connector' name='Wall Connector'/>
              <div className='flex justify-between w-[19rem]'><label htmlFor='Wall Connector'>Wall Connector</label>
              <span>$450</span></div>
              </div>
              <div className='flex gap-3'>
              <input className='w-[1.5rem] h-[1.5rem]' type='checkbox' id='Mobile Connector' name='Mobile Connector'/>
              <div className='flex justify-between w-[19rem]'><label htmlFor='Mobile Connector'>Mobile Connector</label>
              <span>$252</span></div>
              </div>
              <button className='bg-[#f4f2f2] w-[9.5rem] rounded-sm py-1 m-mainheaderm mt-4'>Learn More</button>
            </div>
          </div>
          <div className='mt-[7rem]'>
            <h1 className='font-bold text-xl text-[#2d2d2d] mb-8'>Accessories</h1>
            <div className='flex flex-col gap-y-4 mt-8'>
              <div className='flex gap-3'>
              <input className='w-[1.5rem] h-[1.5rem]' type='checkbox' id='Center Console Trays' name='Center Console Trays'/>
              <div className='flex justify-between w-[19rem]'><label htmlFor='Center Console Trays'>Center Console Trays</label>
              <span>$35</span></div>
              </div>
              <div className='flex gap-3'>
              <input className='w-[1.5rem] h-[1.5rem]' type='checkbox' id='All-Weather Interior Liners' name='All-Weather Interior Liners'/>
              <div className='flex justify-between w-[19rem]'><label htmlFor='All-Weather Interior Liners'>All-Weather Interior Liners</label>
              <span>$225</span></div>
              </div>
              <div className='flex gap-3'>
              <input className='w-[1.5rem] h-[1.5rem]' type='checkbox' id='Roof Rack' name='Roof Rack'/>
              <div className='flex justify-between w-[19rem]'><label htmlFor='Roof Rack'>Roof Rack</label>
              <span>$400</span></div>
              </div>
              <button className='bg-[#f4f2f2] w-[9.5rem] rounded-sm py-1 m-mainheaderm mt-4'>Learn More</button>
            </div>
          </div>
          <div className='mt-[7rem] flex flex-col'>
          <h1 className='font-bold text-xl text-[#2d2d2d] mb-4'>Order your Model 3</h1>
          <span className='m-mainheaderm mb-2 text-[14px]'>Est. Delivery: Aug – Sep 2024</span>
          <span className='m-mainheaderm w-[19rem] text-[16px] text-left mt-4'>Your design qualifies for a $7,500 federal tax credit for eligible buyers.</span>
          <button className='pl-[1rem] text-[16px] text-left'>See Details</button>
          <button className='bg-blue-600 w-[21rem] rounded-[5px] py-[0.5rem] text-white font-bold mt-5 ml-[0.5rem] mb-[16rem]'>Continue</button>
          </div>
      </div>
    </section>

  </div>
 
  </div> 
  
  : <><div className='flex flex-col items-center]'>
  <header className='absolute top-0 left-0 z-[1]'>
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
  
  <section className='mt-[5rem]'>
     <img className='w-[100%] h-auto' src={selectedTire === 'blackring' ? carImage1[selectedColor][0] : carImage1[selectedColor][1]}/>
     <section className='grid grid-cols-1 mt-[2rem]'>
       <div><h3 className='font-bold font-[cursive] text-[1.5rem] ml-[2rem]'>{myCar?.model}</h3></div>
       <div className='flex justify-evenly items-center mt-[1rem]'>
          <div className='flex flex-col items-center justify-center'>
              <span className='font-semibold'>{myCar?.carProperty?.range}</span>
              <p>Range {'('} EPA est.{')'}</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
              <span className='font-semibold'>{myCar?.carProperty?.topSpeed}</span>
              <p>Top Speed</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
              <span className='font-semibold'>{myCar?.carProperty?.mph}</span>
              <p>0-60 mph</p>
          </div>
       </div>
     </section>
  </section>
  <div className="flex justify-center w-[100%] gap-[4rem] mt-[2rem] ">
      <NavLink style={({isActive}) => {return isActive ? {color : 'blue' , borderBottom : '1px solid blue' , scale : '2' , transition : 'all 0.5s ease-in'} : {}}} className='border-b-[1px] border-b-[black] text-[#6a6868] font-bold font-[cursive]' to='cash'>Cash</NavLink>
      <NavLink style={({isActive}) => {return isActive ? {color : 'blue' , borderBottom : '1px solid blue' , scale : '2' , transition : 'all 0.5s ease-in'} : {}}} className='border-b-[1px] border-b-[black] text-[#6a6868] font-bold font-[cursive]' to='lease'>Lease</NavLink>
      <NavLink style={({isActive}) => {return isActive ? {color : 'blue' , borderBottom : '1px solid blue' , scale : '2' , transition : 'all 0.5s ease-in'} : {}}} className='border-b-[1px] border-b-[black] text-[#6a6868] font-bold font-[cursive]' to='finance'>Finance</NavLink>
      </div>
    <Outlet/>
    <button className='m-mainheaderm mt-5 w-[13rem] bg-[#eeeded] rounded-md py-[0.5rem] px-[2rem]'>
     <span> Feature Details</span>
    </button>
  
    <section className='flex flex-col mt-16'>
      <div><img className='w-[100%] h-auto' src={selectedTire === 'blackring' ? carImage[selectedColor][0] : carImage[selectedColor][1]}/></div>
      <div className='mt-8'>
        <span className='m-mainheaderm font-bold text-[1.5rem]'>Paint</span>
        <div className='flex items-center justify-center mt-8'>
          {['black' , 'white' , 'blue' , 'red' , 'StealthGrey'].map(color => (
  
           <div>
           <input type='radio' id={`color${color}`} name='paint' className='custom-radio' onChange={() => handleChangeColor(color)} checked={selectedColor === color}/>
           <label className='radio-label' htmlFor={`color${color}`}>
           <img className='w-[2.5rem] p-1' src={color === 'StealthGrey' ? 'https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/static_assets/MODEL3_/UI/Paint_StealthGrey.png?' : `https://digitalassets.tesla.com/co1n/image/upload/f_auto,q_auto/prod/static_assets/MODEL3/UI/Paint_${color.charAt(0).toUpperCase() + color.slice(1)}.png`} />
           </label>
           </div>
          ))}
        </div>
      </div>
    </section>
    <section className='mt-16'>
      <img className='w-[100%] h-auto' src={selectedTire === 'blackring' ? carImage2[selectedColor][0] : carImage2[selectedColor][1]}/>
      <span className='m-mainheaderm font-bold text-[1.5rem]'>Wheels</span>
      <div className='flex items-center justify-center gap-x-2 mt-8'>
       {['blackring' , 'whitering'].map(tire => ( 
      <div>
      <input className='custom-radio1' type='radio' name='ring' id={tire} onChange={() => handleChangeTire(tire)} checked={selectedTire === tire}/>
      <label className='radio-label1' htmlFor={tire}>
      <img className='p-1' src={carTireImage[tire]}/>
      </label>
      </div>
       ))}
      </div>
    </section>
    <section className='mt-16'>
      <img className='mb-8' src={InteriorImage[selectedInteriorImage]}/>
      <span className='m-mainheaderm font-bold text-[1.5rem]'>Interior</span>
      <div className='flex justify-center items-center mt-5'>
      {['blackin' , 'whitein'].map(inside => (
         <div>
         <input type='radio' id={inside} className='custom-radio2' name='Interior' onChange={() => handleChangeInside(inside)} checked={selectedInteriorImage === inside}/>
         <label className='radio-label2' htmlFor={inside}>
         <img className='p-1' src={Interior[inside]}/>
         </label>
        </div>
      ))}
      </div>
    </section>
    <button className='m-mainheaderm mt-5 w-[13rem] bg-[#eeeded] rounded-md py-[0.5rem] px-[2rem]'>
     <span> Feature Details</span>
    </button>
    <section>
      <video className='w-[100%] h-auto' src='https://digitalassets.tesla.com/co1n/video/upload/f_auto:video,q_auto:best/prod/static_assets/MODEL3_/UI/lane_change_m3.mp4' autoPlay playsInline loop/>
      <div className='flex flex-col px-[1.5rem] sm:flex sm:flex-col sm:items-center'>
        <h1 className='pt-5 font-bold text-xl text-[#535252]'>Full Self-Driving Capability</h1>
        <span className='mt-2'>$8000</span>
        <span className='text-left mt-4 text-[#706f6f] w-[21rem] text-[15px] sm:'>Receive a 30 day trial of Full Self-Driving Capability with a new vehicle purchase.</span>
        <span className='text-left mt-4 text-[#706f6f] w-[22rem] text-[15px] sm:'>Your car will be able to drive itself almost anywhere with minimal driver intervention and will continuously improve</span>
          <ul className='!list-disc w-[22rem] text-left mt-5 pl-[2rem] text-[#706f6f]'>
            <li>Navigate on Autopilot</li>
            <li>Auto Lane Change</li>
            <li>Autopark</li>
            <li>Summon</li>
            <li>Smart Summon</li>
            <li>Autosteer on city streets</li>
            <li>Traffic Light and Stop Sign Control</li>
          </ul>
          <div>
            <p className='text-left mt-4 text-[#000000] w-[21rem] text-[13px]'>The currently enabled features require active driver supervision and do not make the vehicle autonomous. The activation and use of these features are dependent on achieving reliability far in excess of human drivers as demonstrated by billions of miles of experience, as well as regulatory approval, which may take longer in some jurisdictions. As these self-driving features evolve, your car will be continuously upgraded through over-the-air software updates.</p>
            <div className='flex gap-x-3 justify-between items-center mt-7'>
            <button className='bg-blue-600 w-[9.5rem] rounded-sm py-1 text-white font-bold'>Add</button>
            <button className='bg-[#dfdfdf] w-[9.5rem] rounded-sm py-1'>Feature Details</button>
            </div>
          </div>
          <div className='mt-[7rem]'>
            <h1 className='font-bold text-xl text-[#2d2d2d] mb-8'>Charging</h1>
            <span>Home charging equipment is not included</span>
            <div className='flex flex-col gap-y-4 mt-8'>
              <div className='flex gap-3'>
              <input className='w-[1.5rem] h-[1.5rem]' type='checkbox' id='Wall Connector' name='Wall Connector'/>
              <div className='flex justify-between w-[19rem]'><label htmlFor='Wall Connector'>Wall Connector</label>
              <span>$450</span></div>
              </div>
              <div className='flex gap-3'>
              <input className='w-[1.5rem] h-[1.5rem]' type='checkbox' id='Mobile Connector' name='Mobile Connector'/>
              <div className='flex justify-between w-[19rem]'><label htmlFor='Mobile Connector'>Mobile Connector</label>
              <span>$252</span></div>
              </div>
              <button className='bg-[#f4f2f2] w-[9.5rem] rounded-sm py-1 m-mainheaderm mt-4'>Learn More</button>
            </div>
          </div>
          <div className='mt-[7rem]'>
            <h1 className='font-bold text-xl text-[#2d2d2d] mb-8'>Accessories</h1>
            <div className='flex flex-col gap-y-4 mt-8'>
              <div className='flex gap-3'>
              <input className='w-[1.5rem] h-[1.5rem]' type='checkbox' id='Center Console Trays' name='Center Console Trays'/>
              <div className='flex justify-between w-[19rem]'><label htmlFor='Center Console Trays'>Center Console Trays</label>
              <span>$35</span></div>
              </div>
              <div className='flex gap-3'>
              <input className='w-[1.5rem] h-[1.5rem]' type='checkbox' id='All-Weather Interior Liners' name='All-Weather Interior Liners'/>
              <div className='flex justify-between w-[19rem]'><label htmlFor='All-Weather Interior Liners'>All-Weather Interior Liners</label>
              <span>$225</span></div>
              </div>
              <div className='flex gap-3'>
              <input className='w-[1.5rem] h-[1.5rem]' type='checkbox' id='Roof Rack' name='Roof Rack'/>
              <div className='flex justify-between w-[19rem]'><label htmlFor='Roof Rack'>Roof Rack</label>
              <span>$400</span></div>
              </div>
              <button className='bg-[#f4f2f2] w-[9.5rem] rounded-sm py-1 m-mainheaderm mt-4'>Learn More</button>
            </div>
          </div>
          <div className='mt-[7rem] flex flex-col'>
          <h1 className='font-bold text-xl text-[#2d2d2d] mb-4'>Order your Model 3</h1>
          <span className='m-mainheaderm mb-2 text-[14px]'>Est. Delivery: Aug – Sep 2024</span>
          <span className='m-mainheaderm w-[19rem] text-[16px] text-left mt-4'>Your design qualifies for a $7,500 federal tax credit for eligible buyers.</span>
          <button className='pl-[1rem] text-[16px] text-left'>See Details</button>
          <button className='bg-blue-600 w-[21rem] rounded-[5px] py-[0.5rem] text-white font-bold mt-5 ml-[0.5rem] mb-[16rem]'>Continue</button>
          </div>
      </div>
    </section>
  </div></>
  )
}

export default OneCar





{/* <div className='w-[100%]'>
  <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><img className='w-[66%]  fixed right-[33rem] top-[15rem] h-auto' src={selectedTire === 'blackring' ? carImage1[selectedColor][0] : carImage1[selectedColor][1]}/></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
  </div> */}