import React from 'react'
import Image from 'next/image'

function ImageComponent() {
  return <Image src="/google.svg" alt="Google" width={300} height={200} className='mb-4'/>
}

export default ImageComponent