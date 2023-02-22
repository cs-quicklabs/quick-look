import { Form, useTransition } from "@remix-run/react";
import dayjs from "dayjs";
import { BeatLoader } from "react-spinners";


export default function TrialExpired({userData}:any) {
  const trialExpiredAt =  dayjs(new Date(new Date(userData?.createdAt).getTime()+(86400*1000*14))).format('MMMM DD, YYYY');
  const transition = useTransition()

  const loaderBuyBtn = transition?.submission?.action === "/account/license" && transition?.state !== "idle"
  const loaderDeleteBtn = transition?.submission?.action === "/account/settings/deleteAccount" && transition?.state !== "idle"
  
  
  return (
    <div className="flex items-center justify-center flex-col px-4 pb-4">
      <div className="text-2xl sm:text-3xl leading-9 font-bold text-gray-900 ">Trial period has expired</div>

      <div className="text-sm sm:text-lg leading-8 font-normal mt-3">
        Your 14 days trial period expired on {trialExpiredAt}. Please buy license for USD 19 to continue using quicklook.
      </div>

      <div className="text-sm sm:text-lg leading-8 font-normal">
        Your profile will remain unpublished meanwhile. 
      </div>

      <div className="mt-8 flex flex-wrap sm:flex-nowrap items-center justify-center gap-3">
        <Form action="/account/license" method="post">
          <button 
            className="relative shadow-sm bg-indigo-600 border border-indigo-600 rounded-md py-3 px-5 flex justify-center text-white text-base leading-6 font-medium"
            disabled={transition?.state !== "idle"}
          >
            {loaderBuyBtn &&
              <span className="absolute h-full w-full top-0 bg-indigo-600 flex items-center justify-center">
                <BeatLoader color="#ffffff"/>
              </span>
            }
            Buy License
          </button>
        </Form>

        <Form action="/account/settings/deleteAccount">
          <button 
            className="relative shadow-sm bg-red-600 border border-red-600 rounded-md py-3 px-5 flex justify-center text-white text-base leading-6 font-medium"
            onClick={()=>{console.log("Delete")}}
            disabled={transition?.state !== "idle"}
          >
            {loaderDeleteBtn &&
              <span className="absolute h-full w-full top-0 bg-red-600 flex items-center justify-center">
                <BeatLoader color="#ffffff"/>
              </span>
            }
            Delete My Profile
          </button>
        </Form>
      </div>

    </div>
  )
}

