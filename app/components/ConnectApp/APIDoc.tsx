import { REACT_APP_DOMAIN } from '~/utils/constants'
import { CopyTooltip } from '../Common/CopyTooltip'
import { DocumentDuplicateIcon } from '@heroicons/react/24/outline'

const dummyJSON = {
  basics: {
    email: 'joe@example.comv',
    firstName: 'Joe',
    lastName: 'Smith',
    userName: 'Joe009',
  },
} as const

export default function APIDoc() {
  return (
    <>
      <div className="p-3 bg-gray-200 text-sm space-y-6 my-5 rounded-md shadow">
        <div className="flex items-center p-2 rounded-md shadow bg-gray-800 text-white gap-2">
          <span className="p-2 border-r font-bold ">POST</span>

          <div className="font-semibold text-sm flex-grow">
            {REACT_APP_DOMAIN}/api/connect-app-signup
          </div>

          <CopyTooltip
            content={<DocumentDuplicateIcon className="h-6 text-white" />}
            copyContent={`${REACT_APP_DOMAIN}/api/connect-app-signup`}
            position="top"
            hideIcon={true}
          />
        </div>

        <div className="p-2 rounded-md shadow bg-gray-800 text-white">
          <div className="font-bold text-normal p-1 border-b-2">Headers</div>

          <div className="mt-4 text-sm font-semibold text-sm font-semibold">
            <div className="flex items-center gap-6">
              <div className="w-20 p-2">secret_key</div>
              <div className="p-2 mt-1">***********************</div>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-20 p-2">app_id</div>
              <div className="p-2 mt-1">***********************</div>
            </div>
          </div>
        </div>

        <div className="p-2 rounded-md shadow bg-gray-800 text-white">
          <div className="flex items-center gap-2 justify-between border-b-2 p-1">
            <div className="font-bold text-normal">Body (JSON)</div>

            <CopyTooltip
              content={<DocumentDuplicateIcon className="h-6 text-white" />}
              copyContent={JSON.stringify(dummyJSON, null, 4)}
              position="top"
              hideIcon={true}
            />
          </div>

          <pre className="font-semibold mt-2">{JSON.stringify(dummyJSON, null, 4)}</pre>
        </div>
      </div>
    </>
  )
}
