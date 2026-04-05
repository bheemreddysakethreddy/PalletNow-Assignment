import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function ProductScreen() {
  const {state} = useLocation()
  const navigate = useNavigate()
  const[quantity,setQuantity]=useState(1) 
  console.log(state)

  return (
    <div className='flex items-center flex-col p-4'>
      <div className="w-full max-w-5xl">
        <button onClick={()=>navigate("/product")} className=' mb-4 border rounded px-4 py-1 cursor-pointer'>
          Back
        </button>
      </div>

      <section className='flex justify-center items-start border rounded bg-gray-50 p-5 gap-10 w-full max-w-5xl flex-col md:flex-row'>
        <div className='flex justify-center items-center w-full'>
          <img src={state.image} alt="productImage" className='h-60 w-60 sm:h-80 sm:w-80  md:h-96 md:w-96 object-contain' />
        </div>
        <div className='flex flex-col justify-start w-full gap-6'>
          <h1 className='text-4xl md:text-5xl font-semibold'>{state.name}</h1>
          <div>
            <p className='underline'>Product Descrption :-</p>
            <p className='w-[90%] h-auto overflow-auto break-all'>sakethrjklsfnsffsdfdfdfd fdfdg glkdnsflk ngv{state.description}</p>
          </div>
          <div>
            <p><span className='text-xl'>Price : </span><span className='text-2xl font-bold'>{state.price}/-</span></p>
            <p>Category : {state.category}</p>
          </div>
          <div className='flex justify-start flex-wrap items-center gap-4'>
            <button className='border px-5 rounded cursor-pointer py-2 ' onClick={()=>setQuantity(prev=>prev-1)} disabled={quantity<=1}>-</button>
            <p>{quantity}</p>
            <button className='border px-5 rounded cursor-pointer py-2' onClick={()=>setQuantity(prev=>prev+1)} >+</button>
            <button className='border w-30 py-2 rounded-lg cursor-pointer bg-green-50 font-bold text-green-900'>Add to Cart</button>
          </div>
          
        </div>
      </section>

    </div>
  )
}

export default ProductScreen
