import { Form } from "@remix-run/react";
import dayjs from "dayjs";


const TrialStatus = ({userData}:any) => {

  const currentDate = dayjs()
  const trialExpireAt = dayjs(new Date(new Date(userData?.createdAt).getTime()+(86400*1000*14)))
  const diff = trialExpireAt.diff(currentDate, "day", true)
  const daysLeft = Math.ceil(diff) + (diff > 1 ? " days left" : " day left")

  const returnNull = !userData || diff <= 0 || userData?.allowed_free_access || userData?.couponId || userData?.paymentStatus?.paymentStatus === "paid";

  if(returnNull)
  return null

  return (
    <div className={`mx-1 md:mx-3 lg:mx-5 flex items-center justify-center bg-yellow-100 py-0.5 px-3 rounded`}>
      <span className='text-sm font-medium text-[#92400E]'>
        You have {daysLeft} left in trial.{" "}
        <Form method="post" className="inline" action="/account/license">
          <button type="submit" className='font-semibold underline cursor-pointer'>Buy License today.</button>
        </Form>
      </span>
    </div>
  );
}

export default TrialStatus

