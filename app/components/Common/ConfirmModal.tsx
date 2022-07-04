export default function Modal({ open, children, onClose }:any) {
  if (!open) return null

  return (
    <>   
      <div className="flex justify-center overflow-y-auto overflow-x-hidden fixed pt-48 z-50 md:inset-0 h-modal md:h-full">
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          <div className="relative rounded-lg shadow bg-white">
            <div className="p-6 text-center">
                <h3 className="mb-5 text-lg font-normal text-gray-500">
                  Are you sure you want to sign out?
                </h3>
                <button type="button" className="text-gray-500 bg-gray-200 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm inline-flex items-center px-3 py-1.5 text-center mr-2">
                  <a href='/login'>Yes</a>
                </button>
                <button type="button" className="text-white bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-3 py-1.5 hover:text-gray-900 focus:z-10 hover:bg-gray-600">
                  <a href='/dashboard'>No</a>
                </button>
                {children} 
            </div>
          </div>
        </div>
      </div>       
    </>
  )
}