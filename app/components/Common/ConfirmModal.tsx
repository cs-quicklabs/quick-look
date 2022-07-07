export default function Modal({ open, children, onClose }: any) {

  if (!open) return null
  return (
    <>
      <div className='flex justify-center overflow-y-auto overflow-x-hidden fixed pt-48 z-50 md:inset-0 h-modal md:h-full '>
        <div className='relative p-4 w-full max-w-md h-full md:h-auto '>
          <div className='relative rounded-lg shadow-2xl'>
            <button
              onClick={onClose}
              type='button'
              className='absolute top-3 right-0 mr-1  bg-transparent hover:bg-white hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center'
            >
              <svg
                className='w-5 h-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </button>
            <div className='p-6 text-center '>
              <h3 className='mb-5 text-lg font-normal '>
                Are you sure you want to sign out?
              </h3>
              <div className='flex gap-8 justify-center items-center'>
                <form method='POST' action='/logout'>
                  <button
                    type='submit'
                    className='text-gray-500 bg-white hover:bg-indigo-400 hover:text-gray-900  focus:outline-none  font-medium rounded-lg text-sm inline-flex items-center px-3 py-1.5 text-center mr-2'
                  >
                    Yes
                  </button>
                </form>
                <button
                  onClick={onClose}
                  type='button'
                  className='text-gray-500 bg-white focus:outline-none rounded-lg border hover:bg-indigo-400 border-gray-200 text-sm font-medium px-3 py-1.5 hover:text-gray-900 focus:z-10 '
                >
                  No
                </button>
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
