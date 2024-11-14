import Index from "../Pages/Index/Index"
import DetailsCar from "../Components/DetailsCar/DetailsCar"
import OneCar from "../Components/OneCar/OneCar"
import OneProduct from "../Components/OneProduct/OneProduct"
import MyShop from "../Pages/MyShop/MyShop"
import CarAccesory from "../Components/CarAccesory/CarAccesory"
import Basket from "../Pages/Basket/Basket"



const routes = [
    {path : '/' , element : <Index/>},
    {path : '/onecar/:id' , element : <OneCar/> , children : [
      {path : 'cash' , element : <DetailsCar titrcar="Include est. 5-year gas savings of $5,000. Customize" titrdiv1="Rear-Wheel Drive" pricediv1="$33,990" titrdiv2="Long Range Rear-Wheel Drive" pricediv2="$29,990" titrdiv3="Long Range All-Wheel Drive" pricediv3="$34,990" titrdiv4="Performance All-Wheel Drive" pricediv4="$42,990"/>},
      {path : 'lease' , element : <DetailsCar  titrcar="Include est. 5-year gas savings of $5,000. Customize" titrdiv1="Rear-Wheel Drive" pricediv1="$216/mo" titrdiv2="Long Range Rear-Wheel Drive" pricediv2="&366/mo" titrdiv3="Long Range All-Wheel Drive" pricediv3="$125/mo" titrdiv4="Performance All-Wheel Drive" pricediv4="$566/mo"/>},
      {path : 'finance' , element : <DetailsCar  titrcar="Include est. 5-year gas savings of $5,000. Customize" titrdiv1="Rear-Wheel Drive" pricediv1="$527/mo" titrdiv2="Long Range Rear-Wheel Drive" pricediv2="$481/mo" titrdiv3="Long Range All-Wheel Drive" pricediv3="$565/mo" titrdiv4="Performance All-Wheel Drive" pricediv4="$691/mo"/>},
       
]},
{path : '/oneproduct/:id', element : <OneProduct/>},
{path : '/myshop/*' , element : <MyShop/>},
{path : '/myshop/car/:id' , element : <CarAccesory/>},
{path : '/myshop/basket' , element : <Basket/>},

]



export default routes


//<DetailsCar titrcar="Include est. 5-year gas savings of $5,000. Customize" titrdiv1="Rear-Wheel Drive" pricediv1="$33,990" titrdiv2="Long Range Rear-Wheel Drive" pricediv2="$29,990" titrdiv3="Long Range All-Wheel Drive" pricediv3="$34,990" titrdiv4="Performance All-Wheel Drive" pricediv4="$42,990"/>}

//{path : 'lease' , element : <DetailsCar  titrcar="Include est. 5-year gas savings of $5,000. Customize" titrdiv1="Rear-Wheel Drive" pricediv1="$527/mo" titrdiv2="Long Range Rear-Wheel Drive" pricediv2="$481/mo" titrdiv3="Long Range All-Wheel Drive" pricediv3="$565/mo" titrdiv4="Performance All-Wheel Drive" pricediv4="$691/mo"/>},
//{path : 'finance' , element : <DetailsCar  titrcar="Include est. 5-year gas savings of $5,000. Customize" titrdiv1="Rear-Wheel Drive" pricediv1="$33,990" titrdiv2="Long Range Rear-Wheel Drive" pricediv2="$29,990" titrdiv3="Long Range All-Wheel Drive" pricediv3="$34,990" titrdiv4="Performance All-Wheel Drive" pricediv4="$42,990"/>},