import React from 'react';

const Header = () => {
  return (
    <>
      <div className='h-20 flex items-center justify-between bg-white'>
        <header className='bg-white text-2xl font-sans flex font-extrabold ml-28'>
          <h1 className='text-black'>Dominic</h1>
          <h1 className='text-green-300'>Barber</h1>

        </header>

        <nav className='text-black font-bold flex justify-between items-center font-sans space-x-8 pr-28'>
          <ul>
            <li>
              <a className='hover:opacity-30' href="">Inicio</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Sobre</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Servicos</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Cortes</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Contato</a>
            </li>
          </ul>
        </nav>
      </div>

    </>

  )
}

export default Header;