'use client'
import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'
import { AiOutlineLoading } from 'react-icons/ai'
import ImageComponent from './Image'
import { FaMicrophone } from 'react-icons/fa'
import { CiSearch } from 'react-icons/ci'

function HomeSearchComponent() {
  const [inputValue, setInputValue] = useState<string | undefined>('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!inputValue) return

    const url = `/search/web?searchTerm=${inputValue}`

    router.push(url)
  }

  const randomChange = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setLoading(true)
    const url = `https://random-word-api.herokuapp.com/word
    `
    const respponse = await fetch(url)

    if (!respponse.ok) return

    const [data] = await respponse.json()

    router.push(`/searchRandom/web?searchTerm=${data}`)
    setLoading(false)
  }

  return (
    <div className="items-center flex flex-col justify-center  h-[calc(100vh-4rem)]">
      <ImageComponent />
      <form onSubmit={handleSubmit} className="flex gap-2 flex-col w-full">
        <div className="relative flex items-center justify-center w-7/12 mx-auto max-sm:w-11/12">
          <CiSearch className="absolute top-3 left-2" />
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            className="w-full p-2 placeholder:pl-6 focus:pl-8 focus:outline-none border border-gray-400 rounded-full "
          />
          <FaMicrophone className="absolute top-3 right-2" />
        </div>
        <div className="flex gap-6 justify-center mt-4">
          <button type="submit" className="bg-[#d8d8d8]  rounded-md p-2">
            Search
          </button>
          <button
            type="submit"
            onClick={randomChange}
            disabled={loading}
            className=" bg-[#d8d8d8] hover:bg-gray-300 rounded-md p-2 "
          >
            {loading ? <AiOutlineLoading className='animate-spin  ' /> : 'I am feeling lucky'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default HomeSearchComponent
