import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function ProductScreen() {
  const {state} = useLocation()
  const navigate = useNavigate()
  const[quantity,setQuantity]=useState(1) 
  console.log(state)
  return (
    <div className='flex justify-center items-center flex-col'>
      <button onClick={()=>navigate("/product")}>Back</button>

      <section className='flex justify-center items-start gap-10'>
        <div>
          <img src={state.image} alt="productImage" className='h-100 w-100' />
        </div>
        <div className='flex flex-col justify-start'>
          <p>{state.name}</p>
          <p>{state.description}</p>
          <p>Price:{state.price ?? 100}</p>
          <div className='flex gap-10'>
            <button className='border px-3' onClick={()=>setQuantity(prev=>prev-1)} disabled={quantity<=1}>-</button>
          <p>{quantity}</p>
          <button className='border px-3' onClick={()=>setQuantity(prev=>prev+1)} >+</button>
          </div>
        </div>
      </section>

    </div>
  )
}

export default ProductScreen
