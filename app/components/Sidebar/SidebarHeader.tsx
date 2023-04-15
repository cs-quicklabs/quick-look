import DefaultProfileIcon from '../../../assets/images/profile.png'
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid'

export default function SidebarHeader({ loaderData, setShowModal }: any) {
  const { isPublished } = loaderData?.profile
  let PublishIcon = isPublished ? CheckCircleIcon : ExclamationCircleIcon

  return (
    <div className="flex flex-shrink-0 px-6 pt-3 pb-2">
      <div className="group block w-full flex-shrink-0">
        <div className="flex items-center">
          <div>
            <img
              data-cy="profileImage"
              className="inline-block h-9 w-9 rounded-full"
              src={
                loaderData?.profileImage?.secondaryImage
                  ? loaderData?.profileImage?.secondaryImage
                  : DefaultProfileIcon
              }
              alt=""
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium leading-5 text-gray-700 group-hover:text-gray-900">
              {loaderData?.firstname} {loaderData?.lastname}
            </p>
            <a
              href={`/${loaderData?.username}`}
              target="_blank"
              className="text-xs font-medium leading-4 text-gray-500 group-hover:text-gray-700"
              rel="noreferrer"
            >
              View profile
            </a>
          </div>
        </div>
        <div
          className={`w-full inline-flex rounded-md ${
            isPublished ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
          } text-sm mt-3 py-1 px-2`}
        >
          <PublishIcon
            className={`mt-1 mr-2 h-4 w-4 ${isPublished ? 'text-green-400' : 'text-yellow-400'}`}
          />
          <span className="flex-1">
            {isPublished ? 'Your profile is live' : 'Your profile needs publishing'}
          </span>
          <span className="ml-2 cursor-pointer font-medium" onClick={() => setShowModal(true)}>
            {isPublished ? `Unpublish ->` : 'Publish ->'}
          </span>
        </div>
      </div>
    </div>
  )
}
