import React from 'react';
import Header from '../app/components/header';
import Sobre from '../app/components/sobre';
import Servicos from '../app/components/servicos';
import Depoimentos from './components/depoimentos';
import Footer from './components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <div className='bg-bgbar text-black font-mono'>
        <main className='h-screen ml-28 flex items-center'>
          <div className='grid grid-cols-2 mt-20 bg-slate-200 rounded-3xl'>
            <div>
              <h1 className='text-2xl font-extrabold mt-32 ml-28 w-96'>Conheça a melhor barbearia da zona norte!</h1>
              <h2 className='ml-28 text-lg w-96 mb-16 mt-1'>Um salão exclusivo em Recife, com barbeiros capacitados.</h2>
              <button className='rounded-3xl bg-blue-400 font-bold max-w-xs w-36 hover:translate-x-1 transition ml-28 mb-52'>Agendar um horário</button>
            </div>
            <div>
              <img className='max-w-xl max-h-96 rounded-3xl ml-52 mt-24 mr-10' src="/images/2.jpg" alt="" />
            </div>
          </div>
        </main>
        <Sobre />
        <Servicos />
        <Depoimentos />
        <Footer />
      </div>
    </>
  );
}
