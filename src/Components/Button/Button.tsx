

type btnProps = {
    btntext1 : string,
    btntext2: string,
    isBtnWhite : boolean,
    isBtnShop : boolean
}

function Button({btntext1 , btntext2 , isBtnWhite = false , isBtnShop = false} : btnProps) {
  return (
   <>
   {isBtnWhite ? <div className="flex flex-col items-center justify-center absolute top-[37rem] left-[1.5rem] gap-y-[1rem]">
      <button className="bg-white w-[21rem] py-[0.5rem] px-[4rem] rounded-md text-black font-sans z-[1]">{btntext1}</button>
      <button className="bg-black w-[21rem] py-[0.5rem] px-[4rem] rounded-md text-white font-sans mt-6">{btntext2}</button>
    </div> : <div className="flex flex-col items-center justify-center absolute top-[37rem] left-[1.5rem] gap-y-[1rem]">
      <button className="bg-white w-[21rem] py-[0.5rem] px-[4rem] rounded-md text-black font-sans">{btntext1}</button>
    </div>}
   </>
  )
}

export default Button