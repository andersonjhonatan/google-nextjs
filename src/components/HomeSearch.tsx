'use client'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'

function HomeSearchComponent() {
  const [inputValue, setInputValue] = useState<string | undefined>('')
  const router = useRouter()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!inputValue) return

    const url = `/search/web?searchTerm=${inputValue}`

    router.push(url)
  }

  const randomChange = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const url = `https://random-word-api.herokuapp.com/word
    `
    const respponse = await fetch(url)

    if (!respponse.ok) return

    const [data] = await respponse.json()

    router.push(`/searchRandom/web?searchTerm=${data}`)
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <div className="flex gap-2">
        <button type="submit">Search</button>
        <button type="submit" onClick={randomChange}>
          I feeling lucky
        </button>
      </div>
    </form>
  )
}

export default HomeSearchComponent
