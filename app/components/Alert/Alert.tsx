import { CheckCircleIcon } from '@heroicons/react/solid'

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
