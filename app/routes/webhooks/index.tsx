import type { ActionFunction} from '@remix-run/node';
import { json } from '@remix-run/node'
import Stripe from "stripe"
import { updatePaymentStatus } from '~/services/user.service.serevr';

export const action: ActionFunction = async ({ request }) => {
  
  const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY || "", {apiVersion:"2022-11-15"});
  const signature = request.headers.get("stripe-signature") || "";
  const secret = process.env.STRIPE_SECRET || "";
  const payload = await request.text();
  let event;

  try{
    event = stripe.webhooks.constructEvent(payload, signature, secret)

    if(event?.type === "checkout.session.completed"){
      const data :any = event?.data?.object;
      const {
        metadata : {userId}, 
        customer : customerId, 
        payment_intent : paymentIntent, 
        payment_status : paymentStatus
      } = data;

      if(paymentStatus !== "paid")
      throw("Payment status is not updated!");

      await updatePaymentStatus({userId, customerId, paymentIntent, paymentStatus})
    }
  } catch(err){
    return json(err, { status: 400 })
  }
  return {}  
}