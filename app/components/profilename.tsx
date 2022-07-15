export default function Profile(){
 return (
 <form className="pt-6 divide-gray-200 mx-auto ">
    <div className=" divide-gray-200 sm:space-y-5">
        <div>
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">Profile</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              This information will be displayed publicly so be careful what you share.
            </p>
          </div>
    
                <div className="flex flex-col gap-3 mt-4">
                <div className="">
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    First name
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="w-[32rem]  mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div className="col-span-1 sm:col-span-1">
                  <label htmlFor="first-name" className=" block text-sm font-medium text-gray-700">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    id="firstname"
                    autoComplete="given-name"
                    className="w-[32rem] mt-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
             
              <div>
                <label className='text-gray-700 w-36 h-5 mt-4 font-medium leading-5 text-sm'>
                  Choose your Profile ID
                </label>
               <div className="mt-2 sm:mt-0 sm:col-span-2 ">
                <div className="max-w-lg flex rounded-md ">
                  <span className={`inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm `}>
                    quicklook.me/
                  </span>
                  <input
                   type='text'
                    name='profileId'
                   
                    className={`flex-1 block focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300 border  `}
                  />
                </div>
              </div>
                
                  
                
                {/* <div className='text-red-600 text-sm '>
                  {actionData?.errors['username']}
                </div> */}
              </div>
              <div className='pl-[28rem] '>
              <button
                  className={`group relative w-[4rem] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white leading-5 bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                >
                  Save
                </button></div>
            </div>
            </div>
            </div>
            </form>
)}