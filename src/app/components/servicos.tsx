import React from 'react';

const Servicos = () => {
  return (
    <>
      <section className='h-96 w-screen flex mr-96 mb-96  flex-col justify-center items-start ml-28 bg-slate-200 rounded-3xl'>
        <div>
          <h1>
            Serviços
          </h1>
          <h2 className='w-96 mt-96 justify-center'>
            Com mais de 10 anos no mercado, o Beautysalon já conquistou clientes de inúmeros países com seus tratamentos exclusivos e totalmente naturais
          </h2>

          <img className='max-w-xl max-h-96 rounded-3xl ml-52 mt-24 mr-10' src="/images/3.jpg" alt="" />

          <div className=''>
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
        </div>
      </section>
    </>
  )
}

export default Servicos;