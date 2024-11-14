import { useEffect, useState } from "react"
import CardCars from "../CardCars/CardCars"



const allDetailCars = [

    {id : 1 ,
       image1 :'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Mobile-LHD-v2.jpg' ,
       image2 :'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-3-Desktop-US.png' ,
        image3 : '' ,
        image4 : '' ,
        model :'MODEL 3' ,
        oneTitr : '$7,500 Federal Tax Credit Available' ,
        twoTitr : 'From $29,990 After Est. Savings'},
    {id : 2 ,
       image1 :'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-Y-Mobile-US-v2.png' ,
       image2 :'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-Y-Desktop-US-v2.png',
       image3 : '' ,
       image4 : '' ,
       model :'MODEL Y' ,
       oneTitr : '1.99% APR Financing Ending August 31' ,
       twoTitr : 'From $31,490'},
    {id : 3 ,
       image1 :'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-S-Mobile-US.png' ,
        image2 :'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-S-Desktop-US.png',
        image3 : '' ,
        image4 : '' ,
        model :'MODEL S' ,
        oneTitr : 'From $65,990' ,
        twoTitr : 'After $14,000 Est. Savings' },
    {id : 4 ,
       image1 :'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-X-Mobile-US.png' ,
        image2 :'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-X-Desktop-US.png',
        image3 : '' ,
        image4 : '' ,
        model :'MODEL X' ,
        oneTitr : 'From $68,490' ,
        twoTitr : 'After $6,500 Est. Savings'},
    {id : 5 ,
       image1 :'https://digitalassets.tesla.com/discovery-tesla-com/image/upload/f_auto,q_auto/Homepage-Cybertruck-Mobile.jpg' ,
        image2 :'https://digitalassets.tesla.com/discovery-tesla-com/image/upload/f_auto,q_auto/Homepage-Cybertruck-Desktop.jpg',
        image3 : '' ,
        image4 : '' ,
        model :'' ,
        oneTitr : '' ,
        twoTitr : ''},
]



function LastCars() {

  const [isLargScreen , setIsLargScreen] = useState(window.innerWidth > 639)

  useEffect(() => {
 
    const handleResize = () => {
      setIsLargScreen(window.innerWidth > 639)
    }
    window.addEventListener('resize' , handleResize)
    return () => window.removeEventListener('resize' , handleResize)
  },[])


  return (
   <>
   {allDetailCars.map((CarsType : any) => (
    <CardCars 
       key={CarsType.id}
       image1={isLargScreen === true ? CarsType.image2 : CarsType.image1}
       model={CarsType.model}
       oneTitr={CarsType.oneTitr}
       twoTitr={CarsType.twoTitr} id={CarsType.id} images={[]} carProperty={{
         range: "",
         topSpeed: "",
         mph: ""
       }}/>
   ))}
   </>
  )
}

export default LastCars