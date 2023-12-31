import prisma from '../../prisma/client'
import { NextResponse } from 'next/server'
import bcrypt from 'bcrypt'


export async function POST(request){
    const body = await request.json();
    const { name,email, password } = body;
    console.log(name,email,password);
	

    if(!name || !body.email || !password) {
        return new NextResponse('Missing Fields', { status: 400 })
    }

    const exist = await prisma.user.findUnique({
        where: {
          email: email
        }
    });

    if(exist) {
        throw new Error('Email already exists')
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            name,
            email,
            hashedPassword
        }
    });

    return NextResponse.json(user)
}
