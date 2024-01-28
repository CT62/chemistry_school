import { NextResponse } from 'next/server';
import prisma from '../../prisma/client';

export async function POST(req) {
    const userSession = await req.json();
    const user = await prisma.purchase.findUnique({
        where: {
            courseId: userSession.CourseID,
            userEmail: userSession.userEmail,
        }
    });
    console.log(user)

    if(user){
    	return NextResponse.json({ 'isPurchased': true });
    }else{
	return NextResponse.json({'isPurchased': false });
    }
}
