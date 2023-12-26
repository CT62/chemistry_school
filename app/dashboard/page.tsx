'use client'

import { useSession, signOut } from 'next-auth/react'

const dashboard = () => {
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

export default dashboard
