// export default function Modal({ open, children, onClose }: any) {

//   if (!open) return null
//   return (
//     <>
//       <div className='flex justify-center overflow-y-auto overflow-x-hidden fixed pt-48 z-50 md:inset-0 h-modal md:h-full '>
//         <div className='relative p-4 w-full max-w-md h-full md:h-auto '>
//           <div className='relative rounded-lg shadow-2xl'>
//             <button
//               onClick={onClose}
//               type='button'
//               className='absolute top-3 right-0 mr-1  bg-transparent hover:bg-white hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center'
//             >
//               <svg
//                 className='w-5 h-5'
//                 fill='currentColor'
//                 viewBox='0 0 20 20'
//                 xmlns='http://www.w3.org/2000/svg'
//               >
//                 <path
//                   fill-rule='evenodd'
//                   d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
//                   clip-rule='evenodd'
//                 ></path>
//               </svg>
//             </button>
//             <div className='p-6 text-center '>
//               <h3 className='mb-5 text-lg font-normal '>
//                 Are you sure you want to sign out?
//               </h3>
//               <div className='flex gap-8 justify-center items-center'>
//                 <form method='POST' action='/logout'>
//                   <button
//                     type='submit'
//                     className='text-gray-500 bg-white hover:bg-indigo-600 hover:text-white  focus:outline-none  font-medium rounded-lg text-sm inline-flex items-center px-3 py-1.5 text-center mr-2'
//                   >
//                     Yes
//                   </button>
//                 </form>
//                 <button
//                   onClick={onClose}
//                   type='button'
//                   className='text-gray-500 bg-white focus:outline-none rounded-lg border hover:bg-indigo-600 hover:text-white border-gray-200 text-sm font-medium px-3 py-1.5  focus:z-10 '
//                 >
//                   No
//                 </button>
//               </div>
//               {children}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationIcon, XIcon } from '@heroicons/react/outline'

export default function Modal({ open, children, onClose }: any) {
  // const [open, setOpen] = useState(true)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10 font-inter" onClose={onClose}>
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

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6">
                <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
                  <button
                    type="button"
                    className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none "
                    onClick={onClose}
                  >
                    <span className="sr-only">Close</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
                    <ExclamationIcon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Are you sure, you want to Sign out?
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <form method='POST' action='/auth/logout'>
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={ open}
                  >
                    Sign out
                  </button></form>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm"
                    onClick={onClose}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}