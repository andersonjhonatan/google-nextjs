import Link from 'next/link'
import React from 'react'
import { IoApps } from 'react-icons/io5'

function HeaderComponent() {
  return (
    <header>
      <div className="flex gap-4 items-center justify-end text-sm text-gray-700 p-2">
        <Link href="/">Gmail</Link>
        <Link href="/">Imagens</Link>
        <Link href="/">
          <IoApps />
        </Link>
        <Link href="/" className="border px-4 py-1 rounded-md  bg-blue-500 text-white">
          Sign in
        </Link>
      </div>
    </header>
  )
}

export default HeaderComponent
