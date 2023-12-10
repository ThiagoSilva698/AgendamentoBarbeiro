import React from 'react';

const Servicos = () => {
  return (
    <>
      <section className='grid grid-cols-3 mr-96 mb-96 ml-28 -mt-40 bg-slate-300 rounded-3xl'>
        <div className='h-96 mb-32 flex items-center'>
          <div className='mt-32'>
            <h1 className='text-center ml-28 font-extrabold'>
              Serviços
            </h1>
            <h2 className='w-96 ml-28 text-center mt-12 font-extrabold'>
              Com mais de 10 anos na ativa, a Barbearia conquistou clientes em diversos cantos, oferecendo tratamentos exclusivos e totalmente voltados para o bem-estar masculino.
            </h2>
          </div>

          <div className='ml-10 mt-4 text-center'>
            <div className='flex items-center justify-between mt-20'>
              <h2 className='font-sans font-bold ml-40'>Cortes</h2>
            </div>
            <div className='flex w-96 items-center mt-6 justify-between font-extrabold'>
              <p>A DominicBarber, com mais de 10 anos de experiência, oferece tratamentos exclusivos para o bem-estar capilar masculino. Nossa equipe renomada realiza terapias capilares abrangentes, cortes diferenciados e clássicos, seguindo as últimas tendências. Utilizamos tratamentos naturais e veganos para promover a saúde dos fios. Agende conosco e experimente uma experiência única de cuidados capilares.</p>
            </div>
          </div>
          <div className='ml-14 mt-32'>
              <img className='max-w-xl max-h-96 rounded-3xl ' src="/images/3.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Servicos;