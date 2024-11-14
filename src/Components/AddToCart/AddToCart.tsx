import { useContext, useEffect } from "react";
import { CartContext } from "../../Context/CartContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const AddToCart = ({ item, onClose } : any) => {
  if (!item) return null;

  const carContext = useContext(CartContext)
  const navigate = useNavigate()
  
  
  const addToBasketHandler = () => {
    Swal.fire({
    title: "Are you sure to add?",
    text: "You won't be able to revert this!",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "gray",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, add it!",
    background :'#222120',
    color: '#fff',
  }).then((result) => {
    if (result.isConfirmed) {
      carContext.addProduct(item.id)
      Swal.fire({
        title: "Added!",
        text: "Your file has been Added.",
        showCancelButton: true,
        cancelButtonText:'go to cart',
        confirmButtonColor: "gray",
        cancelButtonColor: "#d33",
        icon: "success",
        background :'#222120',
        color: '#fff',
      }).then((result) => {
        if(!result.isConfirmed){
          navigate('/myshop/basket')
        }
      })
    }
  });
    
}


return (
  <div className='fixed top-0 left-0 w-full h-full backdrop-blur-sm bg-opacity-75 flex justify-end items-center'>
      <div className='flex flex-col bg-[#161616] w-[100%] h-[100%] text-white sm:w-[65%] sm:left-[29rem] md:w-[45%] lg:w-[40%] xl:w-[32%] 2xl:w-[26%]'>
        <img src={item.image} alt={item.image} className='w-[100%] h-[50%] object-cover'/>
        <div className='flex flex-col text-left'>
        <h2 className='text-lg font-[500] text-left pt-8 pl-4 text-[26px]'>{item.titr}</h2>
        <span className='pl-4 pt-4'>${item.price}{'.00'}</span>
        <div className='flex flex-col px-3 mt-10'>
        <button onClick={addToBasketHandler} className='mt-4 bg-[#333] font-semibold px-4 py-2 text-[#949191]'>
          ADD TO CARD
        </button>
        <button onClick={onClose} className='mt-4 mb-10 bg-[#333] px-4 py-2 text-[#949191] font-semibold'>
          CLOSE
        </button> 
        </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;