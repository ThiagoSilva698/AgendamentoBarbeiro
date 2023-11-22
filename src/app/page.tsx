import React from 'react';
import Header from '../app/components/header';

export default function Home() {
  return (
    <>
      <Header />
      <div className='bg-white text-black font-mono'>
        <main className='h-screen ml-28 flex items-center'>
          <div className='grid grid-cols-2 bg-slate-200 rounded-3xl'>
            <div className=''>
              <h1 className='text-2xl font-extrabold break-all mt-32 ml-28 w-96 mb-'>Conheça a melhor barbearia da zona norte!</h1>
              <h2 className='ml-28 w-96 mb-16 mt-1'>Um salão exclusivo em Recife, com barbeiros capacitados.</h2>
              <button className='rounded bg-blue-400 font-bold max-w-xs w-36 hover:translate-x-1 transition ml-28 mb-52'>Agendar um horário</button>
            </div>
            <div>
              <img className='max-w-xl max-h-96 rounded-3xl ml-52 mt-24 mr-10' src="/images/2.jpg" alt="" />
            </div>
          </div>
        </main>
        <section className='h-screen ml-28 mb-16 grid grid-cols-2 bg-slate-200 rounded-3xl'>
          <div className='flex items-center justify-end'>
            <h1 className='font-bold'>
              Sobre nós
            </h1>
            <p className='w-96 text-center font-semibold'>Descubra a excelência em cuidados capilares na nossa barbearia, onde contamos com uma equipe de barbeiros altamente capacitados, acumulando mais de 2 anos de experiência. Nossos profissionais dedicam-se a proporcionar o melhor corte, combinando habilidade artística e know-how técnico para garantir resultados impecáveis. Venha desfrutar de um serviço de qualidade em um ambiente acolhedor e dedicado à arte do barbear.</p>
          </div>
          <div>
            <img className='max-w-xl max-h-96 rounded-3xl ml-52 mt-24 mr-10' src="/images/1.jpg" alt="" />
          </div>
        </section>
        <section className='h-screen'>
          <h1>
            Serviços
          </h1>
          <h2>
            Com mais de 10 anos no mercado, o Beautysalon já conquistou clientes de inúmeros países com seus tratamentos exclusivos e totalmente naturais
          </h2>

          <div className=''>
            <div className='flex items-center justify-between'>
              <h2 className='font-sans font-bold'>Terapia Capilar</h2>
              <h2 className='font-sans font-bold'>Cortes</h2>
              <h2 className='font-sans font-bold'>Tratamentos</h2>
            </div>
            <div className='flex items-center justify-between'>
              <p>Terapia completa para couro cabeludo e fios, protegendo todos os tipos de cabelos, inclusive os longos e finos.</p>
              <p>A nossa equipe é repleta de profissionais renomados, famosos por lançarem tendências com cortes diferenciados e clássicos.</p>
              <p>O beautysalon conta com diversos tratamentos naturais e totalmente veganos, para qualquer tipo de cabelo.</p>
            </div>

          </div>
        </section>
        <section className='h-screen'>
          <h1>Depoimentos de quem já passou por aqui</h1>
          <h2>      Eu sou cliente do Beautysalon há 5 anos e não troco por nada! Certamente meu cabelo mudou muito depois que comecei a tratar somente com produtos naturais e veganos. São profissionais incríveis e qualificados.</h2>
        </section>
        <section className=''>
          <h1>Entre em contato com a gente!</h1>
          <h2>Entre em contato com a Beautysalon, queremos tirar suas dúvidas, ouvir suas críticas e sugestões.</h2>
          <button>Entrar em contato</button>
        </section>
      </div>
    </>
  );
}
