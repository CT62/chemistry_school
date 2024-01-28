import { NextResponse } from 'next/server';
import prisma from '../../prisma/client';

export async function POST(req){
    const userSession = await req.json();
    console.log(userSession);
    let user = await prisma.user.findFirst({
	where:{
		email: userSession.userEmail
	}
    });
    console.log(user.id);
    return NextResponse.json({'userId':String(user.id)});
}
