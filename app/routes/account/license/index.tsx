import type { LoaderFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import DashboardHeader from '~/components/Common/DashboardHeader'
import ProfileSetting from '~/components/Common/ProfileSetting'
import { getUser, requireUserId } from '~/services/auth.service.server'

export const loader: LoaderFunction = async ({ request, params }) => {
  await requireUserId(request)
  const user = await getUser(request)

  return user
}

export default function License() {
  const loaderData = useLoaderData()

  return (
    <>
      <div>
        <DashboardHeader username={loaderData?.username} loaderData={loaderData} />
      </div>

      <div className="lg:grid lg:grid-cols-12 lg:gap-x-5 md:flex md:flex-wrap">
        <div className="w-[20%] lg:w-2/5">
          <ProfileSetting />
        </div>

        <div className="sm:px-6 md:w-3/5 lg:w-[90%] lg:px-0 lg:col-span-9 lg:ml-64 xl:ml-60 2xl:ml-44 mt-2 font-inter max-w-3xl py-6 px-4 sm:p-6">
          <div className="">
            <h3 className="text-lg leading-6 font-medium text-gray-900" data-cy="license-header">
              License
            </h3>

            {(loaderData?.couponId || loaderData?.allowed_free_access) && (
              <p className="text-sm text-gray-500 mt-2" data-cy="license-text">
                {loaderData?.couponId
                  ? `You have signed up with coupon code ${loaderData?.coupon_code?.code} which allowed you free access and you can use the product without restriction. You will receive all future updates for free. For more queries please write us at admin@quicklook.me`
                  : 'You have been given free access and you can use the product without restriction. You will receive all future updates for free. For more queries please write us at admin@quicklook.me'}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
