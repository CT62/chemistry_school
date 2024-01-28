import {NextResponse} from 'next/server';
import prisma from '../../prisma/client';

export async function POST(req){
	const request = await req.json();
	const userEmail = request.userEmail;
	console.log(userEmail)
	const user = await prisma.user.findUnique({
		where:{
			email: request.userEmail
		}
	});
	console.log(user.id);
	return NextResponse.json({'userId':user.id});
}
