

export default function TrialExpired({userData}:any) {
  
  return (
    <div className="flex items-center justify-center flex-col px-4 pb-4">
      <div className="text-2xl sm:text-3xl leading-9 font-bold text-gray-900 ">Trial period has expired</div>

      <div className="text-sm sm:text-lg leading-8 font-normal mt-3">
        Your 14 days trial period expired on June 12, 2022. Please buy license for USD 19 to continue using quicklook.
      </div>

      <div className="text-sm sm:text-lg leading-8 font-normal">
        Your profile will remain unpublished meanwhile. 
      </div>

      <div className="mt-8 flex flex-wrap sm:flex-nowrap items-center justify-center gap-3">
        <button className="shadow-sm bg-indigo-600 border border-indigo-600 rounded-md py-3 px-5 flex justify-center text-white text-base leading-6 font-medium hover:border hover:border-3">
          Buy License
        </button>

        <button className="shadow-sm bg-red-600 border border-red-600 rounded-md py-3 px-5 flex justify-center text-white text-base leading-6 font-medium hover:border hover:border-3">
          Delete My Profile
        </button>
      </div>

    </div>
  )
}

