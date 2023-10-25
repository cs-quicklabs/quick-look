import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import BeatLoader from 'react-spinners/BeatLoader'
import { requiredCSVHeaders } from '~/utils/constants'
import { ArrowUpTrayIcon, ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import {
  CheckCircleIcon,
  DocumentDuplicateIcon,
  ExclamationTriangleIcon,
  XMarkIcon,
  XCircleIcon,
} from '@heroicons/react/24/solid'
import { useFetcher } from '@remix-run/react'

type csvUploadUserDataType = {
  'First Name': string
  'Last Name': string
  Email: string
  'User Name'?: string
  rowNumber: number
}

type stringArrT = string[]

const formatCSVDataForAPI = (csvJson: csvUploadUserDataType[]) =>
  csvJson.map((v) => ({
    rowNumber: v['rowNumber'],
    basics: {
      firstName: v['First Name'],
      lastName: v['Last Name'],
      email: v['Email'],
      userName: v['User Name'],
    },
  }))

const defaultState = {
  MISSING_COLUMN_NAMES: [] as stringArrT,
  MISSING_ROW_DATA: [] as stringArrT,
  ERROR: '',
}

export default function UploadCSVModal({
  open,
  appId,
  isBlocked,
  onClose,
}: {
  open: boolean
  appId: string
  isBlocked?: boolean
  onClose: () => void
}) {
  const fetcher = useFetcher()
  const [collapse, setCollapse] = useState(false)
  const [CSVUploadState, setCsvUploadState] = useState(defaultState)

  const convertCSVToJson = (args: { csvData: string; requiredColumns: stringArrT }) => {
    const { csvData, requiredColumns } = args
    const rowsData = csvData.split('\n')

    // Extract the column names from the first row
    const columnNames = (rowsData[0]?.split(',') || []).map((v) => v.trim().replace(/['"]+/g, ''))

    const missingColumns: stringArrT = [] // Store the names of missing required columns
    const missingRowsData: stringArrT = [] // Store the data of missing required columns across all rows
    const users: csvUploadUserDataType[] = [] // Store information about all users from the CSV

    // Check if all required columns are available or not
    for (const column of requiredColumns) {
      if (!columnNames?.includes(column)) missingColumns.push(column)
    }

    // Generate error if required columns are missing
    if (missingColumns.length)
      return setCsvUploadState({
        ...defaultState,
        MISSING_COLUMN_NAMES: missingColumns,
      })

    // Generate error if duplicate columns are detected
    if ([...new Set(columnNames.filter(Boolean))].length < columnNames.filter(Boolean).length)
      return setCsvUploadState({
        ...defaultState,
        ERROR: 'Uploaded CSV contains duplicate column names. Each column name should be unique.',
      })

    // Iterate through each row in the dataset and extract the data for each column
    for (let i = 1; i < rowsData.length; i++) {
      let userData = {} as csvUploadUserDataType

      // Skip the row if that is completely blank
      if (!rowsData[i]?.length) continue

      // Split the row data into an array of columns
      const currentRowData = (rowsData[i]?.split(',') || []).map((v) =>
        v.trim().replace(/['"]+/g, '')
      )

      let hasMissingData = false
      columnNames.forEach((columnName, index) => {
        // Skip if column is blank
        if (!columnName) return

        if (requiredColumns.includes(columnName) && !currentRowData[index]) {
          missingRowsData.push(`Row ${i + 1}: ${columnName} is missing`)
          hasMissingData = true
          return
        }

        userData = {
          ...userData,
          [columnName]: currentRowData[index],
          rowNumber: i + 1,
        }
      })

      if (!hasMissingData) users.push(userData)
    }

    if (missingRowsData.length)
      setCsvUploadState({ ...defaultState, MISSING_ROW_DATA: missingRowsData })

    if (!users.length)
      return setCsvUploadState({ ...defaultState, ERROR: 'Uploaded CSV has no records.' })

    return users
  }

  const handleCSVInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file)
      return setCsvUploadState({
        ...defaultState,
        ERROR: 'Something went wrong, Try again.',
      })

    if (!file.type.includes('csv'))
      return setCsvUploadState({
        ...defaultState,
        ERROR: `Only CSV file is allowed.`,
      })

    const reader = new FileReader()
    reader.onload = (e) => {
      const csvData = (e.target?.result || '') as string

      setCsvUploadState({
        ...defaultState,
      })
      setCollapse(true)

      const jsonData = convertCSVToJson({
        csvData,
        requiredColumns: requiredCSVHeaders,
      })

      if (jsonData?.length) {
        const data = formatCSVDataForAPI(jsonData)
        fetcher.submit({ csvData: JSON.stringify(data), appId }, { method: 'post' })
      }
    }

    reader.readAsText(file)
  }

  // @ts-ignore
  const failed = (fetcher?.data?.failed || []) as number[]
  // @ts-ignore
  const created = (fetcher?.data?.created || []) as number[]
  // @ts-ignore
  const invalid = (fetcher?.data?.invalid || []) as number[]
  // @ts-ignore
  const duplicate = (fetcher?.data?.duplicate || []) as number[]
  // @ts-ignore
  const error = fetcher?.data?.error
  const blockedMessage = isBlocked
    ? 'This app is blocked. Please contact support for assistance.'
    : ''

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => {}}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto font-inter mt-10">
          <div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all my-8 sm:max-w-2xl sm:w-full sm:p-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="text-center flex-grow font-semibold text-gray-800">
                      Upload CSV File
                    </div>

                    <span
                      className="rounded-full shadow hover:shadow bg-gray-100 p-2 cursor-pointer"
                      onClick={onClose}
                    >
                      <XMarkIcon className="h-5 text-black font-bold" />
                    </span>
                  </div>

                  <div
                    className="font-semibold cursor-pointer gap-2 text-gray-800 text-xs flex items-center bg-gray-100 rounded-lg shadow px-2 py-1"
                    onClick={() => setCollapse(!collapse)}
                  >
                    Constraints{' '}
                    {collapse ? (
                      <ChevronRightIcon className="h-5" />
                    ) : (
                      <ChevronDownIcon className="h-5" />
                    )}
                  </div>

                  {!collapse && (
                    <div className="font-medium text-sm text-white bg-gray-800 border shadow-md rounded-lg p-4">
                      <div>First Name (Required)</div>

                      <div className="ml-3 my-1 text-xs font-medium">
                        <li> Must consist of alphabetic characters only.</li>
                        <li>Can have up to 2 words separated by a single whitespace.</li>
                        <li>Should not exceed 25 characters in length.</li>
                      </div>

                      <div className="mt-3">Last Name (Required)</div>
                      <div className="ml-3 my-1 text-xs font-medium">
                        <li> Must consist of alphabetic characters only.</li>
                        <li>Can have only 1 word without any whitespace.</li>
                        <li>Should not exceed 25 characters in length.</li>
                      </div>

                      <div className="mt-3">Email (Required)</div>
                      <div className="ml-3 my-1 text-xs font-medium">
                        <li>Must be a valid email address format.</li>
                        <li>Should be unique for each row (user).</li>
                        <li>Should not exceed 50 characters in length.</li>
                      </div>

                      <div className="mt-3">User Name (Optional)</div>
                      <div className="ml-3 my-1 text-xs font-medium">
                        <li>Should be unique for each row (user).</li>
                        <li>
                          Must consist of alphabetic characters, numbers, and hyphens (-) only.
                        </li>
                        <li>No spaces or special characters are allowed.</li>
                        <li>Should not exceed 20 characters in length.</li>
                        <li>
                          If it fails to meet any constraints, we will generate a unique username.
                        </li>
                      </div>

                      <div className="mt-4 text-xs">
                        Note: If any of the constraints mentioned above fail for any row, the entire
                        row will be considered invalid and will not be processed and a user profile
                        will not be created for that row.
                      </div>
                    </div>
                  )}

                  {/* Errors and Messages */}
                  <div className="space-y-3">
                    {CSVUploadState.MISSING_COLUMN_NAMES.length ? (
                      <div className="bg-red-50 shadow rounded-md p-3 text-xs font-medium text-red-700">
                        <div className="flex items-center gap-3 pb-2">
                          <div className="flex-shrink-0">
                            <XCircleIcon className="h-5 text-red-400" />
                          </div>

                          <div className="font-semibold">These required columns are missing:</div>
                        </div>

                        <div className="pl-2">
                          {CSVUploadState.MISSING_COLUMN_NAMES.map((missingColumn, i) => (
                            <li key={missingColumn + i}>{missingColumn}</li>
                          ))}
                        </div>
                      </div>
                    ) : null}

                    {CSVUploadState.ERROR || error || blockedMessage ? (
                      <div className={`bg-red-50 shadow rounded-md p-3`}>
                        <div className="flex items-center gap-3">
                          <div className="flex-shrink-0">
                            <XCircleIcon className="h-5 text-red-400" />
                          </div>

                          <p className="text-xs font-semibold text-red-700">
                            {CSVUploadState.ERROR || error || blockedMessage}
                          </p>
                        </div>
                      </div>
                    ) : null}

                    {created?.length ? (
                      <div className="bg-green-50 shadow rounded-md p-3">
                        <div className="flex items-center gap-3">
                          <div className="flex-shrink-0">
                            <CheckCircleIcon className="h-5 text-green-400" />
                          </div>

                          <p className="text-xs font-semibold text-green-800">
                            {created.length} {`${created.length > 1 ? 'records' : 'record'}`}{' '}
                            created successfully.
                          </p>
                        </div>
                      </div>
                    ) : null}

                    {duplicate?.length ? (
                      <div className="bg-amber-100 shadow rounded-md p-3 text-xs font-medium text-amber-500">
                        <div className="flex items-center gap-3 pb-2">
                          <div className="flex-shrink-0">
                            <DocumentDuplicateIcon className="h-5" />
                          </div>

                          <div className="font-semibold text-amber-600">
                            The following records already exist:
                          </div>
                        </div>

                        <div className="pl-2">
                          {duplicate.map((rowNumber, i) => (
                            <li key={i}>Row No. {rowNumber}</li>
                          ))}
                        </div>
                      </div>
                    ) : null}

                    {invalid?.length ? (
                      <div className="bg-orange-50 shadow rounded-md p-3 text-xs font-medium text-orange-500">
                        <div className="flex items-center gap-3 pb-2">
                          <div className="flex-shrink-0">
                            <ExclamationTriangleIcon className="h-5" />
                          </div>

                          <div className="font-semibold text-orange-600">
                            The following rows contain invalid data:
                          </div>
                        </div>

                        <div className="pl-2">
                          {invalid.map((rowNumber, i) => (
                            <li key={i}>Row No. {rowNumber}</li>
                          ))}
                        </div>
                      </div>
                    ) : null}

                    {failed?.length ? (
                      <div className="bg-red-50 shadow rounded-md p-3 text-xs font-medium text-red-700">
                        <div className="flex items-center gap-3 pb-2">
                          <div className="flex-shrink-0">
                            <XCircleIcon className="h-5 text-red-400" />
                          </div>

                          <div className="font-semibold">
                            We encountered some errors while processing the following records.
                            Please review and try again:
                          </div>
                        </div>

                        <div className="pl-2">
                          {failed.map((rowNumber, i) => (
                            <li key={i}>Row No. {rowNumber}</li>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>

                  {/* Upload Button UI */}
                  {isBlocked ? null : (
                    <div className="flex justify-center">
                      <label
                        htmlFor="upload-csv"
                        data-cy="upload-csv-btn"
                        onClick={() => {}}
                        className="flex gap-0.5 cursor-pointer items-center justify-center bg-indigo-600 py-2 px-2 shadow-sm rounded-md text-xs leading-5 font-semibold text-white hover:font-semibold"
                      >
                        {fetcher.state != 'idle' ? (
                          <BeatLoader size={12} color="#ffffff" className="px-0 py-0.5" />
                        ) : (
                          <>
                            <ArrowUpTrayIcon className="h-4 font-bold text-white" />
                            <span>Upload CSV</span>
                          </>
                        )}
                      </label>

                      <input
                        value={''}
                        id="upload-csv"
                        className="hidden"
                        name="uploadCSV"
                        type="file"
                        accept=".csv"
                        onChange={handleCSVInputChange}
                        disabled={fetcher.state != 'idle'}
                      />
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
