import { Form } from '@remix-run/react'
import { useEffect, useRef } from 'react'
import { useDropzone } from 'react-dropzone'
function DropzonePortfolio({
  setErrorDrag,
  setSecondaryImageError,
  setimage1,
  onDrop,
  accept,
  image1,
  setEdit,
  setDel,
  mode,
}: any) {
  const { getRootProps } = useDropzone({
    accept,
    onDrop,
  })
  const ref = useRef(null)

  useEffect(() => {
    if (image1?.includes('data:image/')) {
      // @ts-ignore
      ref.current.click()
      setDel(false)
      setDel(false)
      setimage1('')
    } else if (image1) {
      setErrorDrag('please Upload image only')
    } else {
      setErrorDrag('')
    }
  }, [image1])

  return (
    <div>
      <Form replace action="add/drop-portfolio-image" method="post">
        <div {...getRootProps({ className: 'dropzone' })}>
          <p className="text-xs font-semibold leading-4 tracking-wide">ADD IMAGES</p>
          <div className="text-center">
            <p
              className={`text-sm leading-4 tracking-wide ${mode === 'mobile' ? 'px-0 lg:px-[4rem] xl:px-0' : ''
                }`}
            >
              Drag and Drop an Image or click on button to upload
            </p>
          </div>
        </div>
        <input
          name="addPortfolioImage"
          type="text"
          value={image1}
          hidden
        />

        <button type="submit" hidden ref={ref}>
          upload
        </button>
      </Form>
    </div>
  )
}
export default DropzonePortfolio
