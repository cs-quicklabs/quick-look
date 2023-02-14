import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/solid'

export function AlertSuccess(props: any) {
  const { message } = props
  return (
    <div className="rounded-md bg-green-50 p-4" data-cy="alertSuccess">
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0">
          <CheckCircleIcon
            className="h-5 w-5 text-green-800"
            aria-hidden="true"
          />
        </div>
        <p className="text-xs font-medium text-green-800">{message}</p>
      </div>
    </div>
  )
}

export function AlertError(props: any) {
  const { message } = props
  return (
    <div className="rounded-md bg-red-50 p-4" data-cy="alertError">
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0">
          <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <p className="text-xs font-medium text-red-700">{message}</p>
      </div>
    </div>
  )
}
