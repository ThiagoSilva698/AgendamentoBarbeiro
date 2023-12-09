import React from 'react';

const Servicos = () => {
  return (
    <>
      <section className='grid grid-cols-3 mr-96 mb-96 ml-28 -mt-40 bg-slate-200 rounded-3xl'>
        <div className='h-96 mb-32 flex items-center'>
          <div className='mt-32'>
            <h1 className='text-center ml-28 font-extrabold'>
              Serviços
            </h1>
            <h2 className='w-96 ml-28 text-center'>
              Com mais de 10 anos na ativa, a Barbearia conquistou clientes em diversos cantos, oferecendo tratamentos exclusivos e totalmente voltados para o bem-estar masculino.
            </h2>
          </div>

          <div className='w-96 ml-4'>
            <div className='flex items-center justify-around mt-20'>
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
          <div className='ml-40 mt-32'>
              <img className='max-w-xl max-h-96 rounded-3xl ' src="/images/3.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Servicos;