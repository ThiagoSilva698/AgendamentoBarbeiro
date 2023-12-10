import React from 'react';
import Image from 'next/image';


const Servicos = () => {
  return (
    <>
      <section className='grid grid-cols-2 mr-96 mb-96 ml-28 -mt-40 bg-slate-300 rounded-3xl'>
        <div className='h-96 mb-32'>
          <div className='mt-4 ml-24 text-center'>
            <div className='mt-20'>
              <h2 className='font-sans font-bold ml-40'>Serviços</h2>
            </div>
            <div className='w-96 mt-6 font-extrabold'>
              <p>A DominicBarber, com mais de 10 anos de experiência, oferece tratamentos exclusivos
                 para o bem-estar capilar masculino. Nossa equipe renomada realiza terapias capilares abrangentes, cortes diferenciados e clássicos, seguindo as últimas tendências.
                  Utilizamos tratamentos naturais e veganos para promover a saúde dos fios. Agende conosco e experimente uma experiência única de cuidados capilares.</p>
            </div>
            <Image className='rounded-3xl'
              src="/images/3.jpg"
              alt='Modelo Paulinho'
              width={384}
              height={384}
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Servicos;