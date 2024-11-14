

type detailsCarProps = {
     titrcar : string ,
     titrdiv1 : string,
     pricediv1 : string,
     titrdiv2 : string,
     pricediv2 : string,
     titrdiv3 : string,
     pricediv3 : string,
     titrdiv4 : string,
     pricediv4 : string,

}

function DetailsCar({titrcar , titrdiv1 , pricediv1 , titrdiv2 , pricediv2 , titrdiv3 , pricediv3 , titrdiv4 , pricediv4} : detailsCarProps) {
  return (
    <div className="flex flex-col md:flex md:flex-col md:items-center sm:flex sm:flex-col sm:items-center">
     <section className="flex flex-col justify-evenly items-center mt-[1rem] ">
        <div className="flex items-center justify-around gap-[3rem] mt-4">
            <span className="w-[15rem] text-left">{titrcar}</span>
            <input type="checkbox" className="toggle toggle-info" defaultChecked />
        </div>
     </section>

     <section className="flex flex-col w-[100%] items-center mt-[2rem] gap-y-[1rem]">
        <div className="flex justify-between w-[22rem] h-[3rem] border-[1px] border-solid border-[#989393] rounded-md py-[0.8rem] px-[1rem]">
             <span>{titrdiv1}</span>
             <span>{pricediv1}</span>
        </div>
        <div className="flex justify-between w-[22rem] h-[3rem] border-[1px] border-solid border-[#989393] rounded-md py-[0.8rem] px-[1rem]">
             <span>{titrdiv2}</span>
             <span>{pricediv2}</span>
        </div>
        <div className="flex justify-between w-[22rem] h-[3rem] border-[1px] border-solid border-[#989393] rounded-md py-[0.8rem] px-[1rem]">
             <span>{titrdiv3}</span>
             <span>{pricediv3}</span>
        </div>
        <div className="flex justify-between w-[22rem] h-[3rem] border-[1px] border-solid border-[#989393] rounded-md py-[0.8rem] px-[1rem]">
             <span>{titrdiv4}</span>
             <span>{pricediv4}</span>
        </div>
     </section>
    </div>
  )
}

export default DetailsCar