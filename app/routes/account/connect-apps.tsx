import { ArrowDownTrayIcon, ArrowUpTrayIcon, PlusIcon } from '@heroicons/react/24/outline'
import type { Prisma } from '@prisma/client'
import type { ActionFunction, LoaderFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { useState } from 'react'
import { CopyTooltip } from '~/components/Common/CopyTooltip'
import DashboardHeader from '~/components/Common/DashboardHeader'
import ProfileSetting from '~/components/Common/ProfileSetting'
import {
  decryptEncryptedKey,
  getUser,
  getUserId,
  requireUserId,
  validateConnectAppSignUpRequest as isInvalidRequest,
  isExistingUser,
  connectAppSignUp,
  type connectAppSignUpType,
} from '~/services/auth.service.server'
import { createConnectAppAccount, registerNewApp } from '~/services/user.service.server'
import { validateConnectAppName } from '~/utils/validator.server'
import { CSVHeaders } from '~/utils/constants'
import ConnectAppModal from '~/components/ConnectApp/ConnectAppForm'
import UploadCSVModal from '~/components/ConnectApp/UploadCSVModal'
import APIDoc from '~/components/ConnectApp/APIDoc'
import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid'

export const action: ActionFunction = async ({ request }) => {
  const userId = await getUserId(request)
  if (!userId) throw json({ error: 'Unauthorized' }, { status: 401 })

  const formData = await request.formData()
  const csvData = formData.get('csvData') as string
  const appId = formData.get('appId') as string

  if (csvData) {
    try {
      let csvJsonData = JSON.parse(csvData) as (connectAppSignUpType & { rowNumber: number })[]

      const created: number[] = []
      const duplicate: number[] = []
      const invalid: number[] = []
      const failed: number[] = []

      for (const user of csvJsonData) {
        const { rowNumber } = user

        if (await isExistingUser(user.basics.email)) duplicate.push(rowNumber)
        else if (await isInvalidRequest(user)) invalid.push(rowNumber)
        else
          await connectAppSignUp(user, appId)
            .then((res) => res && created.push(rowNumber))
            .catch((e) => {
              failed.push(rowNumber)
              return false
            })
      }

      return json({ success: true, invalid, failed, created, duplicate })
    } catch {
      return json(
        {
          error: `Something went wrong, Please try again.`,
        },
        { status: 500 }
      )
    }
  }

  const appName = formData.get('appName') as string
  const template = formData.get('template') as string

  const errors = {
    appName: validateConnectAppName(appName),
    template: template ? null : 'Default Profile Template is Required',
  }

  if (Object.values(errors).some(Boolean))
    return json(
      {
        errors,
        form: action,
      },
      { status: 400 }
    )

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
        error: `Something went wrong, Please try again.`,
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

const getCSVTemplate = () => {
  try {
    let csvContent = CSVHeaders.join() + '\n'
    csvContent = 'data:text/csv;charset=utf-8,' + csvContent
    const encodedURI = encodeURI(csvContent)
    window.open(encodedURI)
  } catch (error) {}
}

export default function Profile() {
  const [openConnectAppModal, setOpenConnectAppModal] = useState(false)
  const [csvModalAppId, setCsvModalAppId] = useState('')
  const [tab, setTab] = useState(1)
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
  const connectedApps = loaderData?.connectAppAccount?.connectedApps || []
  const isSelectedAppBlocked =
    loaderData?.connectAppAccount?.isBlocked ||
    connectedApps.find((v) => v.id === csvModalAppId)?.isBlocked

  return (
    <>
      <ConnectAppModal
        key={openConnectAppModal ? 1 : 0}
        onClose={() => setOpenConnectAppModal(false)}
        open={openConnectAppModal}
      />
      <UploadCSVModal
        key={csvModalAppId}
        onClose={() => setCsvModalAppId('')}
        open={Boolean(csvModalAppId)}
        appId={csvModalAppId}
        isBlocked={isSelectedAppBlocked}
      />

      <div>
        <DashboardHeader username={loaderData?.username} loaderData={loaderData} />
      </div>

      <div className="sm:flex">
        <ProfileSetting />

        <div className="ml-0 md:-ml-12 lg:ml-10 mt-8 font-inter px-2">
          <div className="max-w-3xl">
            {/* Header and description */}
            <div className="">
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
                Unlock the potential to seamlessly integrate your products or applications with{' '}
                <span className="font-bold text-gray-600">Quick Bio.</span> Our platform offers a
                dedicated API designed to empower your connected applications. By seamlessly
                integrating this API into your products, you can effortlessly facilitate the
                creation of user profiles on{' '}
                <span className="font-bold text-gray-600">Quick Bio,</span> enhancing your users'
                experience and expanding your product's functionality.
                <div className="mt-1">
                  For complete technical information and guidelines, please refer to our{' '}
                  <span
                    className="text-blue-500 font-semibold hover:underline cursor-pointer"
                    onClick={() => setTab(2)}
                  >
                    API Reference documentation.
                  </span>
                </div>
              </div>
            </div>

            {/* Connect App Button and Secret Key UI */}
            <div className="mt-6 flex flex-wrap items-center gap-2 justify-between">
              <div className="flex items-center justify-center font-medium text-gray-600 gap-2 bg-gray-100 p-1 shadow rounded">
                <div
                  className={`${
                    tab === 1 ? 'bg-white rounded-lg shadow' : 'hover:shadow-lg'
                  } text-black cursor-pointer p-1.5 text-sm text-center w-16`}
                  onClick={() => {
                    setTab(1)
                  }}
                >
                  Apps
                </div>
                <div
                  className={`${
                    tab === 2 ? 'bg-white rounded-lg shadow' : 'hover:shadow-lg'
                  } text-black cursor-pointer p-1.5 text-sm text-center w-16`}
                  onClick={() => {
                    setTab(2)
                  }}
                >
                  API
                </div>
              </div>

              <div className="flex items-center justify-center font-medium text-gray-600 gap-3">
                <span className="font-semibold text-sm text-gray-700">Secret Key</span>
                <span className="bg-white shadow-lg rounded-lg border border-gray-200 p-1.5">
                  <CopyTooltip content="••••••••••••" copyContent={loaderData?.secretKey} />
                </span>
              </div>
            </div>

            {/* Connected Apps List */}
            {tab === 1 ? (
              <div className="mt-8 flow-root">
                <div className="overflow-x-auto">
                  <div className="inline-block min-w-full py-2 align-middle sm:px-2 border border-gray-200 shadow-lg rounded-lg">
                    {/* <!-- Header --> */}
                    <div className="px-2 py-3 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200">
                      <div>
                        <h2 className="text-normal font-semibold text-gray-800">Connected Apps</h2>
                      </div>

                      <div>
                        <div className="inline-flex items-center gap-x-2">
                          <button
                            data-cy="csv-template-btn"
                            onClick={getCSVTemplate}
                            className="flex gap-1 items-center justify-center bg-indigo-600 py-2 px-2 shadow-sm rounded-md text-xs leading-5 font-semibold text-white hover:font-semibold"
                          >
                            <ArrowDownTrayIcon className="h-4 font-bold text-white" />
                            <span>CSV Template</span>
                          </button>

                          <button
                            data-cy="connect-app-btn"
                            onClick={() => setOpenConnectAppModal(true)}
                            className="flex gap-0.5 items-center justify-center bg-indigo-600 py-2 px-2 shadow-sm rounded-md text-xs leading-5 font-semibold text-white hover:font-semibold"
                          >
                            <PlusIcon className="h-4 font-bold text-white" />
                            <span>Connect App</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* <!-- End Header --> */}

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
                          <th
                            scope="col"
                            className="text-center px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Status
                          </th>
                          <th
                            scope="col"
                            className="text-center px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                          >
                            Upload CSV
                          </th>
                        </tr>
                      </thead>

                      {connectedApps.length ? (
                        <tbody className="bg-white">
                          {connectedApps.map((data) => (
                            <tr key={data.id} className="border-b">
                              <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3 capitalize">
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

                              <td className="text-center whitespace-nowrap px-3 py-4 font-medium text-sm text-gray-700">
                                <div className="px-6 py-3">
                                  {loaderData?.connectAppAccount?.isBlocked || data.isBlocked ? (
                                    <span className="w-20 inline-flex items-center justify-center gap-1.5 py-1 px-2 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                      <ExclamationTriangleIcon className="h-4 text-red-400" />
                                      Blocked
                                    </span>
                                  ) : (
                                    <span className="w-20 inline-flex items-center justify-center gap-1.5 py-1 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                      <CheckCircleIcon className="h-4 text-green-400" />
                                      Active
                                    </span>
                                  )}
                                </div>
                              </td>

                              <td className="text-center whitespace-nowrap px-3 py-4 font-medium text-sm text-gray-700">
                                <div className="flex justify-center">
                                  <button
                                    data-cy="upload-csv-btn"
                                    onClick={() => setCsvModalAppId(data.id)}
                                    className="flex gap-0.5 items-center justify-center bg-indigo-600 py-2 px-2 shadow-sm rounded-md text-xs leading-5 font-semibold text-white hover:font-semibold"
                                  >
                                    <ArrowUpTrayIcon className="h-4 font-bold text-white" />
                                    <span>Upload CSV</span>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      ) : null}
                    </table>

                    {!connectedApps.length ? (
                      <div className="italic text-center font-semibold text-xs text-gray-500 border-t py-2">
                        No App connected yet.
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            ) : null}

            {tab === 2 ? <APIDoc /> : null}
          </div>
        </div>
      </div>
    </>
  )
}
