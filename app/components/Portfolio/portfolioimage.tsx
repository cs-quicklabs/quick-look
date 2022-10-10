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
     <li key={img.id}  className={`relative mt-8 `}>
    {show && 
  <TrashIcon id={img.id} className='h-4 text-red-600 absolute top-1 left-[3.5rem]' 
  />
   } 
  {show &&
<PencilIcon id={img.id} className='h-4 text-indigo-600 absolute top-1 left-[2.5rem]' onClick={()=>{console.log('e')}} />
}
<div onMouseOver={handleMouseOver}>
  <img id={img.id} src={img.imageUrl} alt="" className=' h-[5rem] w-[7rem]'  onMouseOut={handleMouseOut}/> 
</div>
  
</li>
   )
 }
 

 
 
 