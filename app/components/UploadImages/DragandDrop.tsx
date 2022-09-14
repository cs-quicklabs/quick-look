import { Form } from "@remix-run/react";
import React, { useEffect, useRef, useState } from "react";
import { useDropzone } from "React-dropzone";
function Dropzone({setImages, onDrop, accept,images }:any) {
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
    if (images) {
      // @ts-ignore
      ref.current.click()
      setImages('')
    }  
  }, [images]);
  return (
  <div>
   <Form replace action="update/crop-image" encType="multipart/form-data" method='post'>
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
        name="editSecondaryImage"
        type="text"
        value={images}
        hidden
        />
       <button type="submit" hidden ref={ref}>upload</button>
        </Form>
    </div>
   );
}
export default Dropzone;