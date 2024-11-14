import { useEffect, useState } from "react"
import CardProduct from "../CardProduct/CardProduct"
import Index from "../../Pages/Index/Index"



const allProducts = [
    {id : 1, image1 : 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-SolarPanels-01-Mobile.jpg', image2 :'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-SolarPanels-01-Desktop', title : 'Solar Panels', titr1: 'Schedule a Virtual Consultation'},
    {id : 2, image1 : 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-SolarRoof-Mobile-US.png', image2 : 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-SolarRoof-Desktop-US.png', title : 'Solar Roof', titr1: 'Produce Clean Energy From Your Roof'},
    {id : 3, image1 : 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Powerwall-Mobile-US.png', image2 : 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Powerwall-Desktop-US.png', title : 'Powerwall', titr1: ''},
    {id : 4, image1 : 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Accessories-Mobile-US.png', image2 : 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Accessories-Desktop-US.png', title : 'Accessories', titr1: ''},    
]

function LastProduct() {

  
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
   {allProducts.map((Products , index) => (
      <CardProduct
       key={Products.id}
       image1={isLargScreen ? Products.image2 : Products.image1}
       title={Products.title}
       titr1={Products.titr1} 
       id= {Products.id}
       image={""} images={[]} video={""}
       isBtnShop={ index === allProducts.length - 1 }      />
   ))}
   </>
  )
}

export default LastProduct