import React from 'react'
import LockCountryComponent from './LockCountry'

function FooterComponent() {
  return (
    <footer className=" absolute bottom-0 w-screen bg-slate-100">
      <LockCountryComponent />
      <div className="flex justify-between text-sm text-black px-6 py-2 border-t border-gray-300">
        <ul className='flex gap-8'>
          <li>Sobre</li>
          <li>Publicidade</li>
          <li>Negócios</li>
          <li>Como funciona a Pesquisa</li>
        </ul>

        <ul className='flex gap-8'>
          <li>Privacidade</li>
          <li>Termos</li>
          <li>Configurações</li>
        </ul>
      </div>
    </footer>
  )
}

export default FooterComponent
