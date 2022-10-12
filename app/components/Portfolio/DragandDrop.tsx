import { Form } from "@remix-run/react";
import React, { useEffect, useRef } from "react";
import { useDropzone } from "react-dropzone";
function DropzonePortfolio({setSecondaryImageError,setImages, onDrop, accept,images }:any) {
  const { getRootProps, getInputProps, acceptedFiles } =
    useDropzone({
      accept,
      onDrop,
    });
 

  const files = acceptedFiles.map((file:any) => (
    file.path
  ));
  
 
  const onSubmit = ()=>{
  setImages(acceptedFiles[0]);
  }
  const ref = useRef(null);


  
  useEffect(() => {
    if (images.includes('data:image/')) {
      // @ts-ignore
      ref.current.click()
      setImages('')
    } else if(!images.includes('data:image/') && images)
    {setSecondaryImageError('please Upload image only')}
    else{setSecondaryImageError('')}
  }, [images]);
  return (
  <div>
   <Form replace action='update/portfolioImage'  method='post'>
      <div {...getRootProps({ className: "dropzone" })}>
    
     
        <div className="text-center">
          
            <p>
             Drag and Drop an Image or click on button to upload
            </p>
        
          
        </div>
      </div>
    <input  
        // type='text'
        // className="hidden"
        name='updatePortfolioImage'
        type="text"
        value={images}
        hidden
        />
        {/* <input hidden  name='imageId'  value={img.id} type="text" /> */}
       <button type="submit" hidden ref={ref}>upload</button>
        </Form>
    </div>
   );
}
export default DropzonePortfolio;