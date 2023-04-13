import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import * as cropro from 'cropro'
import { useRef } from 'react'
import { Form, useNavigation } from '@remix-run/react'
import DeletePortfolioImage from './DeletePortfolioImageModal'

export default function Portfolioimage({ img, setUpload, setEdit, setDel, del, edit }: any) {
  const [show, setShow] = useState(false)
  const imageref = useRef(null)
  const btnref = useRef(null)
  const navigation = useNavigation()
  const [url, setUrl] = useState('')
  useEffect(() => {
    navigation.state == 'loading' && setShow(false)
  }, [navigation, del])
  useEffect(() => {
    if (url) {
      //@ts-ignore
      btnref?.current?.click()
    }
  }, [url])

  const handleMouseOver = () => {
    setShow(true)
  }

  const handleMouseOut = () => {
    setShow(false)
  }

  function showCropAreaSecondary() {
    if (imageref.current !== null) {
      // create a CropArea
      // @ts-ignore
      const cropArea = new cropro.CropArea(imageref?.current)

      cropArea.displayMode = 'popup'
      // attach an event handler to assign cropped image back to our image element
      cropArea.addRenderEventListener((dataUrl) => {
        if (imageref.current) {
          // @ts-ignore
          imageref.current.src = dataUrl
          // @ts-ignore
          setUrl(imageref.current.src)
        }
      })
      // launch CROPRO
      cropArea.show()
    }
  }
  const [open, setOpen] = useState(false)

  return (
    <li key={img.id} className={`relative `}>
      {/* {navigation.state != 'idle' && show && edit || navigation.state != 'idle' && show && del ?  */}
      {/* <BeatLoader color="#184fad" /> : */}
      <img
        draggable={false}
        data-cy="Image"
        loading="lazy"
        crossOrigin={'anonymous'}
        onMouseEnter={handleMouseOver}
        onMouseOut={handleMouseOut}
        ref={imageref}
        id={img.id}
        src={img.imageUrl}
        alt=""
        className=" z-0 h-[4rem] w-[8rem]"
      />
      {/* } */}
      <div className="">
        <button
          type="submit"
          onClick={() => {
            setUpload(false)
            setDel(true)
            setEdit(false)
            setOpen(true)
          }}
        >
          {show && (
            <TrashIcon
              data-cy="Delete"
              onMouseOver={() => setShow(true)}
              id={img.id}
              onMouseEnter={handleMouseOver}
              className="absolute top-6   left-[1rem] h-5  rounded-l-md bg-white text-red-600 opacity-60"
            ></TrashIcon>
          )}
        </button>

        {show && (
          <PencilIcon
            onMouseOver={() => setShow(true)}
            id={img.id}
            onMouseEnter={handleMouseOver}
            className="absolute  top-6 left-[2.3rem] h-5 cursor-pointer rounded-r-md bg-white text-indigo-600 opacity-60"
            onClick={() => {
              showCropAreaSecondary()
              setUpload(false)
              setDel(false)
              setEdit(true)
            }}
          />
        )}
      </div>

      <Form replace={true} action="update/portfolioImage" method="post">
        <input hidden name="updatePortfolioImage" value={url} type="text" />
        <input hidden name="imageId" value={img.id} type="text" />
        <button hidden ref={btnref} type="submit">
          ClickMe
        </button>
      </Form>

      <DeletePortfolioImage
        setShow={setShow}
        open={open}
        del={del}
        onClose={() => setOpen(false)}
        id={img.id}
      />
    </li>
  )
}
