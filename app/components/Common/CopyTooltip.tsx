import { useEffect, useState } from 'react'
import { DocumentDuplicateIcon } from '@heroicons/react/24/outline'
import { CheckCircleIcon, ClipboardIcon } from '@heroicons/react/24/solid'

export const CopyTooltip = (props: {
  content: string
  copyContent: string
  position?: 'top' | 'right'
}) => {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (copied) setTimeout(() => setCopied(false), 2000)
  }, [copied])

  const copySecretKey = () => {
    navigator.clipboard.writeText(props.copyContent).then(() => {
      setCopied(true)
    })
  }

  const positionCSS =
    props.position === 'right' ? 'left-[180%] bottom-[1%]' : `bottom-[140%] left-1/2`

  return (
    <button
      className="relative group flex items-center justify-center font-medium text-gray-600 gap-2"
      onClick={copySecretKey}
    >
      <span>{props.content}</span>
      <DocumentDuplicateIcon className="h-5 font-bold" />
      <div
        className={`w-full min-w-[120px] hidden bg-black text-white text-xs font-medium rounded-md py-3 px-2 absolute z-10 group-hover:block ${positionCSS} transform -translate-x-1/2 translate-y-2 transition-all duration-300 ease-in-out`}
      >
        {copied ? (
          <>
            Copied <CheckCircleIcon className="text-green-400 h-5 inline" />
          </>
        ) : (
          <>
            Click To Copy <ClipboardIcon className="h-5 font-bold inline" />
          </>
        )}
      </div>
    </button>
  )
}
