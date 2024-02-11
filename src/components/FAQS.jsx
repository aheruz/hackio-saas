const faqs = [
    {
      question: '¿Cómo puede personalizar su experiencia con el servicio?',
      answer:
        'Todos nuestros servicios son personalizados, nuestra metodología se basa en el trabajo por proyecto para poder adaptarnos lo máximo posible a sus necesidades de producto.',
    },
    {
        question: '¿Cuáles son los planes de precios disponibles?',
        answer:
        'Ofrecemos varios planes de precios que se adaptan a diferentes necesidades. Puedes consultar nuestra página de Precios para obtener información detallada sobre cada plan, incluyendo costos y beneficios.',
    },
    {
        question: '¿Cómo puedo actualizar o cambiar mi plan de suscripción?',
        answer:
        'Para actualizar tu plan de suscripción, inicia sesión en tu cuenta, ve a la sección "Configuración" y selecciona "Actualizar Plan". Sigue los pasos proporcionados para seleccionar el nuevo plan que se ajuste a tus necesidades.',
    },
    {
        question: '¿Cómo puedo obtener soporte técnico?',
        answer:
        'Si necesita ayuda, pondremos a su disposición a uno de nuestros especialistas que estará encantado de solventar cualquier duda o necesidad que le pueda surgir durante el proceso. También puede contactarnos directamente a través de customerservice@ontrend.com',
    },
  ]
  
  export default function FAQS() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Preguntas frecuentes</h2>
              <p className="mt-4 text-base leading-7 text-gray-600">
                No encuentras tu pregunta? Contacta con nuestro equipo de{' '}
                <a href="#cta" className="font-semibold text-blue">
                  soporte al cliente
                </a>{' '}.
              </p>
            </div>
            <div className="mt-10 lg:col-span-7 lg:mt-0">
              <dl className="space-y-10">
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <dt className="text-base font-semibold leading-7 text-gray-900">{faq.question}</dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    )
  }
  