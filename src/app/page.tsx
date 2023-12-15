import React from 'react';
import Navbar from '../app/components/Navbar';
import Sobre from '../app/components/sobre';
import Servicos from '../app/components/servicos';
import Cortes from './components/Cortes';
import Footer from './components/footer';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='bg-bgbar text-black font-mono'>
        <main id='inicio' className='h-screen ml-4 md:ml-28 flex items-center'>
          <div className='mx-4 md:mx-auto grid grid-cols-1 md:grid-cols-2 mt-20 bg-slate-300 rounded-3xl'>
            <div className='md:mr-0'>
              <h1 className='text-lg md:text-2xl lg:text-3xl font-extrabold mt-8 md:mt-32 ml-4 md:ml-8 lg:ml-12'>Conheça a melhor barbearia da zona norte!</h1>
              <h2 className='ml-4 md:ml-8 lg:ml-12 text-sm md:text-lg lg:text-xl mb-8 md:mb-16 mt-1'>Um salão exclusivo em Recife, com barbeiros capacitados.</h2>
              <button className='rounded-3xl bg-blue-400 font-bold max-w-xs w-36 hover:translate-x-1 transition ml-4 md:ml-8 lg:ml-12 mb-12 md:mb-52'>Agendar um horário</button>
            </div>
            <div className='mt-8 md:mt-24 md:ml-8 lg:ml-16'>
              <Image
                className='rounded-3xl'
                src="/images/2.jpg"
                alt='Modelo Thiago'
                width={384}
                height={384}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </main>
        <Sobre />
        <Servicos />
        <Cortes />
        <Footer />
      </div>
    </>
  );
}
