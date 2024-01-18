import { getServerSession } from 'next-auth';
import prisma from '../../prisma/client'
import { NextResponse } from 'next/server';
import { Stripe } from 'stripe';
import { authOptions } from '../auth/[...nextauth]/route';

const stripe = new Stripe("sk_test_51OOIuAF7RC2rD4L0ztLoVOWE38zlxWaG0TKnfyZ203tlJaziXXdL77wQtnNF3972PrEZwRsxZz4Ju57wYPGfQTLX007DWZ2eUY", {
  apiVersion: "2023-10-16",
});


export async function POST(req,res) {
  const event = await req.json();
  const session = await getServerSession(req,res,authOptions);
  console.log(session);
  switch (event?.type) {
    case 'payment_intent.succeeded':
      const course = event?.data?.object?.description.replace("1x ","");
      const courseID = await prisma.course.findFirst({
        where:{
            title: String(course),
        },
      })
      console.log(courseID?.courseId);
      // await prisma.purchases.create({
        // data:{
          // courseId: "",
          // userId: "H",
        // },
      // })
      console.log('PaymentIntent was successful!');
      break;
    case 'payment_method.attached':
      console.log('PaymentMethod was attached to a Customer!');
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }
  return NextResponse.json({ received: true });
}
