import { Form } from '@remix-run/react'
import { useEffect, useRef } from 'react'
import { useDropzone } from 'react-dropzone'

function DropzonePrimary({ setImages1, onDrop, accept, images1, setPrimaryImageError }: any) {
  const { getRootProps } = useDropzone({
    accept,
    onDrop,
  })
  const ref = useRef(null)

  useEffect(() => {
    if (images1.includes('data:image/')) {
      // @ts-ignore
      ref.current.click()
      setImages1('')
    } else if (images1) {
      setPrimaryImageError('please Upload image only')
    } else {
      setPrimaryImageError('')
    }
  }, [images1])
  return (
    <div>
      <Form replace action="update/crop-image" method="post">
        <div {...getRootProps({ className: 'dropzone' })}>
          <p className="text-xs leading-4 font-semibold tracking-wide">NO IMAGE ADDED YET</p>
          <div className="text-center">
            <p className="text-sm leading-4 tracking-wide">
              Drag and Drop an Image or click on button to upload
            </p>
          </div>
        </div>
        <input
          name="editPrimaryImage"
          type="text"
          value={images1}
          hidden
        />
        <button type="submit" hidden ref={ref}>
          upload
        </button>
      </Form>
    </div>
  )
}
export default DropzonePrimary
