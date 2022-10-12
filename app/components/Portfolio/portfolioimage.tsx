import { PencilIcon, TrashIcon } from '@heroicons/react/outline'
import React, { useEffect, useState } from 'react'
import * as cropro from "cropro";
import { useRef } from 'react';
import { Form, useTransition } from '@remix-run/react';
import BeatLoader from 'react-spinners/BeatLoader';
import DeletePortfolioImage from './deletePortfolioimage';

 export default function Portfolioimage({img,setUpload,setEdit,
setDel,del,edit}:any) {





const[show, setShow]=useState(false)
const imageref=useRef(null)
const btnref=useRef(null)
const transition = useTransition()
  const [url,setUrl]=useState('')
useEffect(() => {
  transition.state =='loading' &&  setShow(false)
  
}, [transition,del])
  useEffect(() => {
    if(url){
      //@ts-ignore
      btnref?.current?.click()
    }
  }, [url])

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
          setUrl(imageref.current.src)
        }
      });     
      // launch CROPRO
      cropArea.show();
      
    }
  }
const[open,setOpen]=useState(false)


   return (
    
     <li key={img.id}  className={`relative `} >
      {/* {transition.state != 'idle' && show && edit || transition.state != 'idle' && show && del ?  */}
{/* <BeatLoader color="#184fad" /> : */}
      <img loading="lazy" crossOrigin={'anonymous'} onMouseEnter={handleMouseOver}  onMouseOut={handleMouseOut} ref={imageref} id={img.id} src={img.imageUrl} alt="" className=' z-0 h-[4rem] w-[8rem]'/>
       {/* } */}
<div className=''> 

  <button type='submit' onClick={()=>{setUpload(false) ; setDel(true) ;setEdit(false);setOpen(true)}}>
{show &&
  <TrashIcon  onMouseOver={()=>setShow(true)} id={img.id} onMouseEnter={handleMouseOver}  className='h-5 rounded-l-md   bg-white opacity-60  text-red-600 absolute top-6 left-[1rem]'></TrashIcon>}
  </button>
   
{show &&
<PencilIcon  onMouseOver={()=>setShow(true)} id={img.id} onMouseEnter={handleMouseOver}  className='h-5  rounded-r-md bg-white cursor-pointer opacity-60 text-indigo-600 absolute top-6 left-[2.3rem]' 
onClick={()=>{showCropAreaSecondary() ; setUpload(false); setDel(false) ;setEdit(true)}} />}
</div>
 
<Form replace={true} action='update/portfolioImage' method='post'>
  <input hidden  name='updatePortfolioImage'  value={url} type="text" />
  <input hidden  name='imageId'  value={img.id} type="text" />
<button  hidden ref={btnref} type='submit' >ClickMe</button>
</Form>

<DeletePortfolioImage setShow={setShow} open={open} del={del} onClose={()=>setOpen(false) } id={img.id}/>
</li>

)
}