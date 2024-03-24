import React from 'react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div>
        <h2>Page not found</h2>
        <Link href="/homepage">Return Home</Link>
    </div>
  )
}

export default NotFound