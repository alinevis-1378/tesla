import React from 'react'
import { CardCarAccesory } from '../CardCarAccesooryType/CardCarAccesory.type'


function CardCarAccesoory({image , titr , price} : CardCarAccesory) {
  return (
        <div>
          <img src={image}/>
            <span className='block w-[8rem] font-bold text-[16px] text-left text-[#d0cece]'>{titr}</span>
            <span className='block w-[8rem] font-bold text-[14px] text-left text-[#d0cece]'>${price}{'.00'}</span>
        </div>
 
  )
}

export default CardCarAccesoory