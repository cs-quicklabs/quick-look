import { PencilIcon, TrashIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import * as cropro from "cropro";
import { useRef } from 'react';
 
 export default function Portfolioimage({img}:any) {


const[show, setShow]=useState(false)
const imageref=useRef(null)
  const [url,setUrl]=useState('')

  
const handleMouseOver=()=>{
  setShow(true)
}

const handleMouseOut=()=>{
  setShow(false)
}

function showCropAreaSecondary() {
    if (imageref.current !== null) {
      // create a CropArea
      // @ts-ignore
      const cropArea = new cropro.CropArea(imageref?.current);
      cropArea.displayMode = "popup";
      // attach an event handler to assign cropped image back to our image element
      cropArea.addRenderEventListener(dataUrl => {
        if (imageref.current) {
      // @ts-ignore
          imageref.current.src = dataUrl;
      // @ts-ignore
          // setUrl(imageref.current.src)
        }
      });     
      // launch CROPRO
      cropArea.show();
    }
  }



   return (
     <li key={img.id}  className={`relative `} >
      <img crossOrigin={'anonymous'} onMouseEnter={handleMouseOver}  onMouseOut={handleMouseOut} ref={imageref} id={img.id} src={img.imageUrl} alt="" className=' z-0 h-[4rem] w-[8rem]' />
{show &&
<div className=''> 
  <TrashIcon onMouseOver={()=>setShow(true)} id={img.id} onMouseEnter={handleMouseOver}  className='h-4 rounded-l-md   bg-white opacity-60  text-red-600 absolute top-6 left-[1.3rem]' 
  /> 
<PencilIcon onMouseOver={()=>setShow(true)} id={img.id} onMouseEnter={handleMouseOver}  className='h-4  rounded-r-md bg-white opacity-60 text-indigo-600 absolute top-6 left-[2.3rem]' onClick={()=>{showCropAreaSecondary()}} />
</div>}
</li>
)
}