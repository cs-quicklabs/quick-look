import type { ActionFunction, LoaderFunction} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import DashboardHeader from "~/components/Common/DashboardHeader";
import ProfileSetting from "~/components/Common/ProfileSetting";
import { getUser } from "~/services/auth.service.server";
import Stripe from "stripe"
import dayjs from "dayjs";

export const action: ActionFunction = async ({ request }) => {
  
  try{
    const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY || "", {apiVersion:"2022-11-15"});
    const user  = await getUser(request);
    const metadata = {
      email : user?.email || "",
      userId : user?.id || "",
    }

    if(user?.paymentStatus?.paymentIntentId && user?.paymentStatus?.paymentStatus === "paid")
    throw("User has already purchased the license")

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID,
          quantity: 1,
        }
      ],
      metadata,
      customer : user?.paymentStatus?.customerId,
      success_url: `${process.env.REACT_APP_URL}/license?success=true`,
      cancel_url: `${process.env.REACT_APP_URL}/license?cancel=true`,
    });

    if(session.url)
    return redirect(session.url)

    else throw("Something went wrong, Please try again!")
    
  }
  catch(err){
    return json(
      { errors : err || "Something went wrong, Please try again!"},
      { status: 400 }
    )
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  try{
    const user = await getUser(request)
    return json({...user});

  }catch(error){
    return json(
      {error},
      {status: 400}
    )
  }
}

export default function License() {
  const loaderData = useLoaderData()

  const trialExpireAt =  dayjs(new Date(new Date(loaderData?.createdAt).getTime()+(86400*1000*14))).format('MMMM DD, YYYY');
  
  return (
    <>
      <div>
        <DashboardHeader username={loaderData?.username} loaderData={loaderData}/>
      </div>

      <div className='lg:grid lg:grid-cols-12 lg:gap-x-5 md:flex md:flex-wrap'>
        <div className='w-[20%] lg:w-2/5'>
          <ProfileSetting />
        </div>

        <div className="sm:px-6 md:w-3/5 lg:w-[90%] lg:px-0 lg:col-span-9 lg:ml-64 xl:ml-60 2xl:ml-44 mt-2 font-inter max-w-3xl py-6 px-4 sm:p-6">
          <div className="">
            <h3 className="text-lg leading-6 font-medium text-gray-900" data-cy="license-header">License</h3>
            
              <p className="text-sm leading-5 font-normal text-gray-500 pt-1" data-cy="license-text">
                {
                  loaderData?.couponId ? 
                    `You have signed up with coupon code ${loaderData?.coupon_code?.code} which allowed you free access and you can use the product without restriction. You will receive all future updates for free. For more queries please write us at admin@quicklook.me`
                  
                  :
                  loaderData?.allowed_free_access ?
                    "You have been given free access and you can use the product without restriction. You will receive all future updates for free. For more queries please write us at admin@quicklook.me"
                  
                  :
                  loaderData?.paymentStatus?.paymentStatus === "paid" ?
                    "You have purchased the license with one time payment and you can use the product without restriction. You will receive all future updates for free. For more queries please write us at admin@quicklook.me"
                  : 
                  <>
                    <>
                      Your account is under trial period which will expire on {trialExpireAt}. Please buy a license to keep using product.
                    </>

                    <Form replace={false} method='post' noValidate>
                      <button type="submit" className="mt-6 flex items-center justify-center bg-indigo-600 py-2 px-4 shadow-sm rounded-md text-sm leading-5 font-medium text-white hover:font-semibold">
                        Buy License for $19
                      </button>
                    </Form>
                  </>
                }
              </p>
          </div>
        </div>
      </div>
    </>
  )
}