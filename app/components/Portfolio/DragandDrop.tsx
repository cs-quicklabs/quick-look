import { Form } from "@remix-run/react";
import React, { useEffect, useRef } from "react";
import { useDropzone } from "react-dropzone";
function DropzonePortfolio({setSecondaryImageError,setImage1, onDrop, accept,image1 }:any) {

  const { getRootProps, getInputProps, acceptedFiles } =
    useDropzone({
      accept,
      onDrop,
    });
 
  const files = acceptedFiles.map((file:any) => (
    file.path
    ));

  const ref = useRef(null);



  useEffect(() => {
    if (image1) {
      // @ts-ignore
      ref.current.click()
      setImage1('')
    }
  }, [image1]);
  return (
  <div>
   <Form replace action='add/drop-portfolio-image'  method='post'>
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
        name='addPortfolioImage'
        type="text"
        value={image1}
        // hidden
        />
        {/* <input hidden  name='imageId'  value={img.id} type="text" /> */}
       <button type="submit" hidden ref={ref}>upload</button>
        </Form>
    </div>
   );
}
export default DropzonePortfolio;