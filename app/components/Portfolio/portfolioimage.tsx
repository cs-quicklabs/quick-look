 import { PencilIcon, TrashIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
 
 export default function Portfolioimage({img}:any) {

  const[show, setShow]=useState(false)
const handleMouseOver=()=>{
  setShow(true)
}
const handleMouseOut=()=>{
  setShow(false)
}
   return (
     <li key={img.id}  className=' mt-8'>
    {show && 
  <TrashIcon id={img.id} className='h-4 text-red-600 relative top-8 left-[3.5rem]'/>
   } 
  {show &&
<PencilIcon id={img.id} className='h-4 text-indigo-600 relative top-4 left-[2.5rem]'/>
}
    <img id={img.id} src={img.imageUrl} alt="" className=' h-[4rem] w-[6rem]' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/> 
</li>
   )
 }
 

 
 
 