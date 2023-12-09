import React from 'react';

const Sobre = () => {
  return (
    <>
      <section className='h-screen mt-10'>
        <div className='items-center mr-36 ml-96 mb-16 grid grid-cols-2 bg-slate-200 rounded-3xl'>
          <div>
            <img className='max-w-xl max-h-96 rounded-3xl mr-52 mt-20 mb-20 ml-10' src="/images/1.jpg" alt="" />
          </div>
          <div>
            <h1 className='font-bold ml-36 text-lg'>
              Sobre nós
            </h1>
            <p className='w-96 text-center font-semibold mt-12'>Descubra a excelência em cuidados capilares na nossa barbearia, onde contamos com uma equipe de barbeiros altamente capacitados, acumulando mais de 2 anos de experiência. Nossos profissionais dedicam-se a proporcionar o melhor corte, combinando habilidade artística e know-how técnico para garantir resultados impecáveis. Venha desfrutar de um serviço de qualidade em um ambiente acolhedor e dedicado à arte do barbear.</p>
          </div>
        </div>

      </section>

    </>

  )
}

export default Sobre;