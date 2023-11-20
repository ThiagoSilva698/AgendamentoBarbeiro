import React from 'react';
import Header from '../app/components/header';

export default function Home() {
  return (
    <>
      <Header />
      <div className='bg-white text-black'>
        <main className='h-screen ml-28 flex items-center'>
          <h1 className='text-2xl font-extrabold break-all'>Saúde natural para os seus cabelos</h1>
          <h2>Um salão exclusivo em São Paulo, especializado em tratamentos naturais.</h2>
          <button className='rounded bg-green-300'>Agendar um horário</button>
          <img className='mr-40' src="https://www.countycouncilsnetwork.org.uk/wp-content/uploads/turbines-1-561x375.jpg" alt="" />
        </main>
        <section className='h-screen'>
          <h1>
            Sobre nós
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit commodi eum soluta vero sit consectetur vitae est minima dignissimos, a similique totam molestias beatae architecto perferendis voluptatem sint illo? Sapiente.</p>
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
