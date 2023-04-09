import { Form } from '@remix-run/react'
import React, { useEffect, useRef } from 'react'
import { useDropzone } from 'react-dropzone'
function Dropzone({ setSecondaryImageError, setImages, onDrop, accept, images }: any) {
  const { getRootProps } = useDropzone({
    accept,
    onDrop,
  })

  // const files = acceptedFiles.map((file: any) => file.path)

  // const onSubmit = () => {
  //   setImages(acceptedFiles[0])
  // }
  const ref = useRef(null)

  useEffect(() => {
    if (images.includes('data:image/')) {
      // @ts-ignore
      ref.current.click()
      setImages('')
    } else if (!images.includes('data:image/') && images) {
      setSecondaryImageError('please Upload image only')
    } else {
      setSecondaryImageError('')
    }
  }, [images])
  return (
    <div>
      <Form replace action="update/crop-image" method="post">
        <div {...getRootProps({ className: 'dropzone' })}>
          <p className=" text-xs leading-4 font-semibold tracking-wide">NO IMAGE ADDED YET</p>
          <div className="text-center">
            <p className="text-sm leading-4 tracking-wide">
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
        <button type="submit" hidden ref={ref}>
          upload
        </button>
      </Form>
    </div>
  )
}
export default Dropzone
