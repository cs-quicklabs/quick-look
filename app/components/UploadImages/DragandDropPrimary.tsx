import { Form } from "@remix-run/react";
import { useEffect, useRef } from "react";
import { useDropzone } from "react-dropzone";
function DropzonePrimary({setImages1, onDrop, accept,images1 }:any) {
  const { getRootProps, getInputProps, acceptedFiles } =
    useDropzone({
      accept,
      onDrop,
    });
 

  const files = acceptedFiles.map((file:any) => (
    file.path
  ));

  const onSubmit = ()=>{
  setImages1(acceptedFiles[0]);
  }
  const ref = useRef(null);


  
  useEffect(() => {
    if (images1) {
      // @ts-ignore
      ref.current.click()
      setImages1('')
    }  
  }, [images1]);
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
        name="editPrimaryImage"
        type="text"
        value={images1}
        hidden
        />
       <button type="submit" hidden ref={ref}>upload</button>
        </Form>
    </div>
   );
}
export default DropzonePrimary;