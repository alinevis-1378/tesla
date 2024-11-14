import './OtherAccessory.css'
import { Link } from 'react-router-dom'

type Accessory1 = {
    id : number ,
    index : number
    images : string,
    oneTitr : string,
    twoTitr : string,
    }
    

function OtherAccessory({id ,images , oneTitr , twoTitr} : Accessory1) {

  return (
    <div className="flex flex-col justify-center items-end p-[1rem] h-auto"> 
    <picture className='w-[100%]'>
        <img className="w-[100%] h-[34rem] z-[1] object-cover" src={images}/>
    </picture> 
    <div className='flex flex-col justify-center items-center h-auto mt-[2rem] w-[100%]'>
      <span className="text-white  text-[2rem]">{oneTitr}</span>
      <span className="text-[#aeadad] text-[1.3rem]">{twoTitr}</span>
        <Link to={`/myshop/car/${id+3}`}><button className="w-[22rem] rounded-[5px] backdrop-blur-[25px] text-[#cbc9c9] font-semibold py-[0.5rem] border border-[#757373] mt-[1.5rem]">SHOP NOW</button></Link>
    </div>
    
</div>
  )
}

export default OtherAccessory