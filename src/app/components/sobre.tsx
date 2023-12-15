import React from 'react';
import Image from 'next/image';


const Sobre = () => {
  return (
    <>
      <section id='sobre' className='h-screen mt-10'>
        <div className='mx-4 md:mx-auto grid grid-cols-1 md:grid-cols-2 bg-slate-300 rounded-3xl'>
          <div className='mt-8 mr-8 md:mt-0'>
            <Image
              className='rounded-3xl md:mt-20 sm:ml-28z ml-4 md:ml-12 mb-8 md:mb-20'
              src="/images/1.jpg"
              alt='Modelo Ed'
              width={384}
              height={384}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
          <div className='md:ml-8 lg:ml-12 flex flex-col justify-center'>
            <h1 className='font-bold text-center text-xl md:text-2xl lg:text-3xl mb-4 md:mb-8'>
              Sobre nós
            </h1>
            <p className='text-center text-sm md:text-base lg:text-lg mb-8 md:mb-12'>
              Descubra a excelência em cuidados capilares na nossa barbearia, onde contamos com uma equipe de barbeiros altamente capacitados, acumulando mais de 2 anos de experiência.
              Nossos profissionais dedicam-se a proporcionar o melhor corte, combinando habilidade artística e know-how técnico para garantir resultados impecáveis.
            </p>
          </div>
        </div>
      </section>
    </>

  )
}

export default Sobre;