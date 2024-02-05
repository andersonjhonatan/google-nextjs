'use client'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'

function HomeSearchComponent() {
  const [inputValue, setInputValue] = useState<string | undefined>('')
  const router = useRouter()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!inputValue) return

    const url = `/search/web?searchTerm=${inputValue}`;

    router.push(url)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default HomeSearchComponent
