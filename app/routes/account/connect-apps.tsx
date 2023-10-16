import type { Prisma } from '@prisma/client'
import type { ActionFunction, LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { useState } from 'react'
import ConnectAppModal from '~/components/Common/ConnectAppForm'
import { CopyTooltip } from '~/components/Common/CopyTooltip'
import DashboardHeader from '~/components/Common/DashboardHeader'
import ProfileSetting from '~/components/Common/ProfileSetting'
import {
  decryptEncryptedKey,
  getUser,
  getUserId,
  requireUserId,
} from '~/services/auth.service.server'
import { createConnectAppAccount, registerNewApp } from '~/services/user.service.server'

export const action: ActionFunction = async ({ request }) => {
  const userId = await getUserId(request)
  if (!userId) throw json({ error: 'Unauthorized' }, { status: 401 })

  const formData = await request.formData()
  const appName = formData.get('appName') as string
  const template = formData.get('template') as string

  const errors = {
    appName: appName?.trim() ? null : 'App Name is Required',
    template: template ? null : 'Template selection is Required',
  }

  if (Object.values(errors).some(Boolean)) {
    return json(
      {
        errors,
        form: action,
      },
      { status: 400 }
    )
  }

  try {
    await registerNewApp({
      appName: appName.trim() as string,
      selectedTemplate: template as string,
      userId,
    })

    return json({ success: true })
  } catch (e) {
    return json(
      {
        error: `Internal Server Error`,
      },
      { status: 500 }
    )
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  const userId = await requireUserId(request)
  try {
    await createConnectAppAccount(userId)
    const user = await getUser(request, true)
    const decryptedSecretKey = decryptEncryptedKey(user?.connectAppAccount?.secretKey as string)

    return json({ ...user, secretKey: decryptedSecretKey })
  } catch (error) {
    return json({ error }, { status: 500 })
  }
}

export default function Profile() {
  const [openModal, setOpenModal] = useState(false)
  const loaderData = useLoaderData<
    Prisma.UserGetPayload<{
      include: {
        connectAppAccount: {
          include: {
            connectedApps: {
              include: {
                users: true
              }
            }
          }
        }
      }
    }> & { secretKey: string }
  >()

  console.log({ loaderData })

  return (
    <>
      <ConnectAppModal onClose={() => setOpenModal(false)} open={openModal} />

      <div>
        <DashboardHeader username={loaderData?.username} loaderData={loaderData} />
      </div>

      <div className="lg:grid lg:grid-cols-12 lg:gap-x-5 md:flex md:flex-wrap relative">
        <div className="w-[20%] lg:w-2/5">
          <ProfileSetting />
        </div>

        <div className="sm:px-6 md:w-3/5 lg:w-[99%] lg:px-0 lg:col-span-9 lg:ml-64 xl:ml-60 2xl:ml-44 mt-2 font-inter max-w-3xl py-6 px-4 sm:p-6">
          <div>
            {/* Header and description */}
            <div>
              <h3
                className="text-lg leading-6 font-medium text-gray-900"
                data-cy="connect-app-header"
              >
                Connect Your Apps
              </h3>

              <div
                className="text-sm leading-5 font-normal text-gray-500 pt-1"
                data-cy="connect-app-description"
              >
                Unlock the potential to seamlessly integrate your products, or applications, with{' '}
                <span className="font-bold text-gray-600">Quick Bio.</span> Our platform offers a
                dedicated API designed to empower your connected applications. By seamlessly
                integrating this API into your products, you can effortlessly facilitate the
                creation of user profiles on{' '}
                <span className="font-bold text-gray-600">Quick Bio,</span> enhancing your users'
                experience and expanding your product's functionality.
              </div>
            </div>

            {/* Connect App Button and Secret Key UI */}
            <div className="mt-6 flex items-center justify-between">
              <button
                data-cy="connect-app-btn"
                onClick={() => setOpenModal(true)}
                className="flex items-center justify-center bg-indigo-600 py-2 px-4 shadow-sm rounded-md text-sm leading-5 font-medium text-white hover:font-semibold"
              >
                Connect Your App
              </button>

              <div className="flex items-center justify-center font-medium text-gray-600 gap-3">
                <span className="font-semibold text-sm text-gray-700">Secret Key</span>

                <CopyTooltip content="••••••••••••" copyContent={loaderData?.secretKey} />
              </div>
            </div>

            {/* Connected Apps */}
            <div className="mt-8 flow-root">
              <div className="overflow-x-auto">
                <div className="inline-block min-w-full py-2 align-middle sm:px-2">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                        >
                          App Name
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          App ID (For API)
                        </th>
                        <th
                          scope="col"
                          className="text-center px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Users
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {loaderData?.connectAppAccount?.connectedApps?.map((data) => (
                        <tr key={data.id} className="border-b">
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3 capitalize">
                            {data.appName.toLowerCase()}
                          </td>

                          <td className="text-center whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <CopyTooltip
                              content={`${data.id.slice(0, 5)}...`}
                              copyContent={data.id}
                              position="right"
                            />
                          </td>

                          <td className="text-center whitespace-nowrap px-3 py-4 font-medium text-sm text-gray-700">
                            {data?.users?.length}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
