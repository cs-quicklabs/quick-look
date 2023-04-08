import React from 'react'
import { useEffect, useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { Form, useNavigation } from '@remix-run/react'
import { BeatLoader } from 'react-spinners'

export default function EditSpotlight({
  setShowEditAdditional,
  clickedAdditionalSpotlight,
  mode,
  setmode,
  loaderData,
}: any) {
  const colors = [
    { name: 'Red', bgColor: 'bg-red-600', selectedColor: 'ring-red-600' },
    {
      name: 'Yellow',
      bgColor: 'bg-yellow-300',
      selectedColor: 'ring-yellow-300',
    },
    {
      name: 'Orange',
      bgColor: 'bg-orange-500',
      selectedColor: 'ring-orange-500',
    },
    { name: 'Green', bgColor: 'bg-green-500', selectedColor: 'ring-green-500' },
    { name: 'Blue', bgColor: 'bg-blue-500', selectedColor: 'ring-blue-500' },
    { name: 'Gray', bgColor: 'bg-gray-600', selectedColor: 'ring-gray-600' },
  ]

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
  const navigation = useNavigation()

  const [val, setVal] = useState({
    linkText: clickedAdditionalSpotlight?.linkText,
    linkUrl: clickedAdditionalSpotlight?.linkUrl,
  })
  const [click, setClicked] = useState(false)
  const [errorLinkText, setErrorLinktext] = useState('')
  const [errorUrl, setErrorUrl] = useState('')
  const [selectedColor, setSelectedColor] = useState(
    loaderData?.profile?.additionalLinksColor || ''
  )
  const [errorColor, setErrorColor] = useState('')
  const [errorNoColor, setErrorNoColor] = useState('')
  const [errorHex, setErrorHex] = useState('')
  const [input, setInput] = useState({
    linkHex: loaderData?.profile?.additionalLinksHexCode || '',
    linkText: '',
    linkUrl: '',
  })
  useEffect(() => {
    if (navigation.state === 'loading') {
      setClicked(false)
      setShowEditAdditional(false)
    }
  }, [navigation])

  useEffect(() => {
    if (val?.linkText?.length === 0) {
      setErrorLinktext('Required')
    } else {
      setErrorLinktext('')
    }
  }, [val])

  const validRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/

  useEffect(() => {
    if (input?.linkHex?.length && !validRegex.test(input.linkHex)) {
      setErrorHex('Invalid Hexcode')
    } else if (!input.linkHex && selectedColor) {
      setErrorHex('')
    } else {
      setErrorHex('')
    }
  }, [input.linkHex, selectedColor])

  useEffect(() => {
    if (val?.linkText?.length === 0) {
      setErrorUrl('Required')
    } else {
      setErrorUrl('')
    }
  }, [val])
  useEffect(() => {
    if (!selectedColor && !input.linkHex) {
      setErrorNoColor('Please select color or hexcode.')
    } else {
      setErrorNoColor('')
    }
  }, [input, selectedColor])

  useEffect(() => {
    if (selectedColor && input.linkHex) {
      setErrorColor('Hexcode will be given priority')
    } else {
      setErrorColor('')
    }
  }, [input, selectedColor])
  return (
    <Form replace action="update/additionalLink" method="post">
      <div
        className={`font-inter ml-[-1rem] flex flex-col divide-y divide-gray-200 ${
          mode === 'mobile'
            ? 'w-[16rem] lg:ml-[-1rem] lg:w-max xl:w-96'
            : 'md:w-[20rem] lg:w-[23rem] xl:w-[24rem]'
        } `}
      >
        <div className="flex flex-1 flex-col justify-between">
          <div className="divide-y divide-gray-200 px-4 sm:px-6">
            <div className="space-y-6 border-b border-gray-200 pt-2 pb-1">
              <div className="">
                <label htmlFor="project-name" className="block text-sm font-medium text-gray-700">
                  {' '}
                  Edit Link Text{' '}
                </label>
                <div className="mt-1">
                  <input
                    data-cy="linkEditText"
                    type="text"
                    value={val?.linkText}
                    name="linkText"
                    id="linkText"
                    onChange={(event) => {
                      setVal({
                        ...val,
                        [event.target.name]: event.target.value,
                      })
                    }}
                    className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                      click && errorLinkText
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                        : 'focus:border-indigo-500 focus:ring-indigo-500'
                    }`}
                  />
                  {click && <div className="text-sm text-red-500">{errorLinkText}</div>}
                </div>
              </div>

              <div>
                <label htmlFor="project-name" className="block text-sm font-medium text-gray-700">
                  {' '}
                  Edit Link URL{' '}
                </label>
                <div className="mt-1">
                  <input
                    data-cy="linkEditUrl"
                    type="url"
                    value={val?.linkUrl}
                    name="linkUrl"
                    id="linkUrl"
                    onChange={(event) => {
                      setVal({
                        ...val,
                        [event.target.name]: event.target.value,
                      })
                    }}
                    className={`block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
                      click && errorUrl
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                        : 'focus:border-indigo-500 focus:ring-indigo-500'
                    }`}
                  />
                  {click && <div className="text-sm text-red-500">{errorUrl}</div>}
                </div>
              </div>
              <div className="flex flex-col">
                <div
                  className={`flex ${
                    mode === 'mobile'
                      ? 'flex-col xl:flex-row xl:justify-between'
                      : 'flex-col lg:flex-row lg:justify-between'
                  }`}
                >
                  <div className="">
                    <RadioGroup name="linkColor" value={selectedColor} onChange={setSelectedColor}>
                      <RadioGroup.Label className="block text-sm font-medium text-gray-700">
                        Select Color For Button
                      </RadioGroup.Label>
                      <div className="mt-4 flex items-center space-x-2">
                        {colors.map((color) => (
                          <RadioGroup.Option
                            key={color.name}
                            value={color.bgColor}
                            className={({ active, checked }) =>
                              classNames(
                                color.selectedColor,
                                active && checked ? 'ring ring-offset-1' : '',
                                !active && checked ? 'ring ring-offset-1' : '',
                                'relative -m-0.5  flex cursor-pointer items-center justify-center rounded-full focus:outline-none'
                              )
                            }
                          >
                            <RadioGroup.Label as="span" className="sr-only">
                              {color.name}
                            </RadioGroup.Label>
                            <span
                              data-cy={color.bgColor}
                              aria-hidden="true"
                              className={classNames(
                                color.bgColor,
                                'h-5 w-5 rounded-full border border-black border-opacity-10'
                              )}
                            />
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>

                  <div
                    className={`w-[7.813rem] ${
                      mode === 'mobile' ? 'mt-6 xl:mt-auto' : 'mt-6 lg:mt-auto'
                    }`}
                  >
                    <label
                      htmlFor="project-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      {' '}
                      Or enter Hex Code{' '}
                    </label>
                    <div className="mt-1 p-1">
                      <input
                        data-cy="linkHex"
                        type="text"
                        name="linkHex"
                        value={input.linkHex}
                        onChange={(event) => {
                          setInput({
                            ...input,
                            [event.target.name]: event.target.value,
                          })
                        }}
                        id="linkHex"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                      {selectedColor && !errorHex && (
                        <div className="text-[12px] text-indigo-500">{errorColor}</div>
                      )}
                      {click && <div className="text-[12px] text-red-500">{errorHex}</div>}
                    </div>
                  </div>
                </div>
                <div>
                  {click && !errorHex && <div className="text-sm text-red-500">{errorNoColor}</div>}
                </div>
              </div>
              <div className="mt-7 flex flex-shrink-0 justify-end">
                <input
                  value={clickedAdditionalSpotlight.id}
                  name="editAdditionalSpotlight"
                  hidden
                />

                <div className="mt-7 flex flex-shrink-0 justify-end pl-4 pb-2">
                  <span>
                    <button
                      type="button"
                      className="mb-4 rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium leading-5 text-gray-700 shadow-sm hover:bg-gray-50 disabled:cursor-pointer"
                      onClick={() => {
                        setShowEditAdditional(false)
                      }}
                      disabled={navigation.state != 'idle'}
                    >
                      Cancel
                    </button>
                  </span>
                  <button
                    data-cy="editLinkButton"
                    id="editLinkButton"
                    type="submit"
                    className="ml-4 mb-4 inline-flex justify-center items-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium leading-5 text-white shadow-sm hover:bg-indigo-700 disabled:cursor-pointer"
                    onClick={(e: any) => {
                      setClicked(true)
                      if (
                        val.linkText === '' ||
                        val.linkUrl === '' ||
                        errorUrl ||
                        errorLinkText ||
                        errorHex ||
                        errorNoColor
                      )
                        e.preventDefault()
                    }}
                    disabled={navigation.state != 'idle' ? true : false}
                  >
                    {navigation.formAction === '/account/update/additionalLink' &&
                    !errorUrl &&
                    !errorLinkText ? (
                      <BeatLoader color="#ffffff" size={12} />
                    ) : (
                      'Edit Link'
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Form>
  )
}
