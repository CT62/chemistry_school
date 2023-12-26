'use client'

import { useSession, signOut } from 'next-auth/react'

export default function Dashboard(){
  const { data:session } = useSession()
  console.log(session)
  console.log(session?.user)
  return (
    <div>
        <h1>Dashboard</h1>
        <p>Hi {session?.user?.name}</p>
        <button onClick={() => signOut()}>Sign Out</button>
    </div>
  )
}

