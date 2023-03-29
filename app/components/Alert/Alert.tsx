import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'

export type AlertType = {
  message: string | JSX.Element
  autoClose?: number
}

export function AlertSuccess(props: AlertType) {
  const { message, autoClose } = props
  const [hide, setHide] = useState(true)

  useEffect(() => {
    if (message) {
      setHide(false)
    }
  }, [message])

  useEffect(() => {
    if (!hide) {
      setTimeout(() => {
        setHide(true)
      }, autoClose || 4000)
    }
  }, [hide, autoClose])

  return (
    <div className={`rounded-md bg-green-50 p-4 ${hide ? 'hidden' : ''}`} data-cy="alertSuccess">
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0">
          <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
        </div>
        <p className="text-sm font-medium text-green-800">{message}</p>
      </div>
    </div>
  )
}

export function AlertError(props: AlertType) {
  const { message, autoClose } = props
  const [hide, setHide] = useState(true)

  useEffect(() => {
    if (message) {
      setHide(false)
    }
  }, [message])

  useEffect(() => {
    if (!hide) {
      setTimeout(() => {
        setHide(true)
      }, autoClose || 4000)
    }
  }, [hide, autoClose])

  return (
    <div className={`rounded-md bg-red-50 p-4 ${hide ? 'hidden' : ''}`} data-cy="alertError">
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0">
          <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <p className="text-sm font-medium text-red-700">{message}</p>
      </div>
    </div>
  )
}
