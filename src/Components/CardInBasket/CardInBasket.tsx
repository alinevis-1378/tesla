
import { CardCarAccesory } from '../CardCarAccesooryType/CardCarAccesory.type'
import { CartContext } from '../../Context/CartContext'
import { useContext } from 'react'
import Swal from 'sweetalert2'

function CardInBasket({image , titr , price , id} : CardCarAccesory) {

    const carContext = useContext(CartContext)
    const removeBasketHandler = () => {
      Swal.fire({
        title: "Are you sure to Delete?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "gray",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        background :'#222120',
        color: '#fff',
      }).then((result) => {
        if (result.isConfirmed) {
          carContext.removeProduct(id)
          localStorage.removeItem('cartItems')
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            confirmButtonColor: "gray",
            icon: "success",
            background :'#222120',
           color: '#fff',
          });
        }
      });
    }
  return (
    <div className='flex mt-[1rem] mb-[1rem]'>
    <div><img className='w-[5rem] h-auto' src={image}/></div>
    <div className='flex flex-col gap-y-5 mb-[2rem]'>
      <div className='flex justify-between w-[17rem] pl-5'>
      <span className='text-white'>{titr}</span>
      <span className='text-white'>${price}</span>
      </div>
      <div className='w-[17rem] text-left pl-5'>
         <button onClick={removeBasketHandler} className='text-[#b7b5b5] text-left border-b-[1px]'>REMOVE</button>
      </div>
    </div>
    </div>
  )
}

export default CardInBasket