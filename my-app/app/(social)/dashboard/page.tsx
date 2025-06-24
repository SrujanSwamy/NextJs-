import React from 'react'
import Link from 'next/link'
const newpage = () => {
  return (
    <>
    <div>dashboard page</div>
    <Link href="/dashboard/users">Users</Link>
    <Link href="/dashboard/admin">Admin</Link>
    </>
  )
}

export default newpage