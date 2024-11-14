import { Link } from "react-router-dom"
type Accessory = {
id : number ,
images : string
oneTitr : string,
twoTitr : string,
}


function OneAccessory({id , images , oneTitr , twoTitr} : Accessory) {
  return (
    <div className="flex justify-center items-end">
        <div className="w-[100%]">
            <img className="w-[100%] h-[53rem] z-[1] object-cover" src={images}/>
        </div>
        <div className="flex flex-col items-center justify-center absolute pb-[11rem]">
          <span className="text-white  text-[2.2rem]">{oneTitr}</span>
          <span className="text-white text-[1.5rem]">{twoTitr}</span>
        </div>
        <div className="absolute pb-[7rem]">
            <Link to={`/myshop/car/${id-1}`}><button className="w-[21rem] rounded-[5px] backdrop-blur-[25px] text-[#cbc9c9] font-semibold py-[0.5rem] border border-[#757373]">SHOP NOW</button></Link>
        </div>
    </div>
  )
}

export default OneAccessory