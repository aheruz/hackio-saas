export default function Testimonial() {
    return (
      <div id="testimonial" className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gray-900 px-6 py-20 shadow-xl sm:rounded-3xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
            <img
              className="absolute inset-0 h-full w-full object-cover brightness-150 saturate-0"
              src="pierre-x-hawkers.jpg"
              alt=""
            />
            <div className="absolute inset-0 bg-gray-900/90 mix-blend-multiply" />
            <div className="absolute -left-80 -top-56 transform-gpu blur-3xl" aria-hidden="true">
              <div
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#001F32] to-[#001F32] opacity-[0.45]"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
            <div
              className="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"
              aria-hidden="true"
            >
              <div
                className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#DAF7A6] to-[#E5FFB7] opacity-25"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
            <div className="relative mx-auto max-w-2xl lg:mx-0">
              <svg className="h-8 w-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 40"><path d="M199.9 10.3c-.2-1.2-.9-2.1-2.2-2.8-1-.5-2.2-.9-3.6-1-.9-.1-1.8-.2-2.7-.2h-.6c-.8-.1-1.5-.1-2.3-.2-.9-.1-1.9-.2-2.8-.2-.6-.1-1.3-.1-2-.5-.4-.2-.6-.4-.6-.7 0-.2.1-.4.6-.6.4-.2.8-.4 1.3-.5 1.3-.3 2.6-.4 4.2-.4 1 0 2.1.1 3.5.2s2.9.5 4.7 1.1c.4.1.7.3 1.1.4l.9.3V2.4c0-.3-.1-.5-.4-.7-2.3-1.1-4.8-1.7-8.1-1.8h-2.7c-1.7 0-3.2.2-4.6.6-1.3.3-2.4.8-3.3 1.5-.8.6-1.3 1.5-1.3 2.6-.1 1.1.3 2.1 1.1 2.8.7.6 1.5 1.1 2.6 1.4 1.2.4 2.4.5 3.5.6 1.8.1 3.8.3 5.8.5.9.1 1.8.2 2.6.3.5.1.8.3 1.1.6.1.1.2.2.2.4 0 .1-.1.2-.2.3-.2.1-.4.3-.6.4-.9.4-1.9.6-2.8.7-1.4.2-2.9.2-4.2.1h-.3c-.9-.1-1.9-.1-2.8-.2-1.8-.2-3.6-.8-5.7-1.7-.1 0-.1-.1-.2-.1l-.5-.2v1.9c0 1.3.1 1.4 1.3 2 1.9.9 3.9 1.2 5.8 1.4 1.1.1 2.2.2 3.5.2h1.2c1.4 0 3.1-.1 4.8-.6 1-.2 2.3-.6 3.4-1.5 1.1-1 1.6-2.2 1.3-3.6zm-30.7.4c1.3-1.1 2.1-2.5 2.2-4.1.1-1.5-.4-2.9-1.5-4.1-1.1-1.3-2.5-2.1-4.2-2.4h-16v15.6h3.9v-3.1h8.2c.1 0 .2.1.3.1.7.6 1.4 1.2 2.2 1.8.5.4.9.8 1.4 1.1h5.8l-4.6-3.6c.9-.3 1.7-.7 2.3-1.3zm-3-2.5c-.8.6-1.6.9-2.6.9h-9.9V3.4h10c1.1 0 2 .3 2.8 1 .6.5.9 1.2.9 1.9-.2.8-.6 1.4-1.2 1.9zM127 12.3V9.6h10.6V5.9H127V3.4h15.5V.1h-19.1v15.6h19.1v-3.4zM117.5.4l.2-.1V.1h-6.5c-3.2 1.8-6.3 3.5-9.5 5.3l-2.3 1.3V.1h-3.9v15.6h3.9v-4.5c1.4-.8 2.7-1.6 4.1-2.4l8.4 6.9h5.5L107 6.8 117.5.4zM49.2 15.3l-.8-1.4c-.6-1.1-1.2-2.2-1.9-3.3-.9-1.6-1.8-3.2-2.8-4.8L40.4.1h-4c-.1.1-.2.3-.2.4s-.1.1-.1.2l-8.5 14.5c0 .1-.1.1-.1.2l-.1.3H32s0-.1.1-.1c.3-.5.6-1.1.9-1.6.3-.5.5-1 .8-1.5H43c.5 1 1.1 2 1.7 3 0 0 0 .1.1.1h4.6l-.1-.2s0-.1-.1-.1zM36 9l2.6-4.4L41.1 9H36zM16.8.1v5.8H3.9V.1H0v15.6h3.9V9.9h12.9v5.8h3.9V.1h-3.9zm52.3 0h2.6v.1c1.5 2.6 3 5.1 4.4 7.7l2.2 3.7.6-1c2-3.5 4-6.9 6-10.4 0 0 0-.1.1-.1h4.5l-.1.2c0 .1-.1.1-.1.2l-2 3.5c-1.6 2.8-3.3 5.6-4.9 8.5l-1.2 2.4-.4.8-.1.1h-4.6c-.5-.8-1-1.7-1.5-2.5-.7-1.2-1.4-2.3-2-3.5l-1.5-2.7-.6-1.1c-.3.5-.6 1.1-.9 1.6l-2.7 4.8c-.5.8-.9 1.7-1.3 2.6-.1.3-.3.6-.4.9v.1h-4.6L53.7 4 51.9.8s-.1-.1-.1-.2l-.1-.2h4.5s0 .1.1.1c2 3.4 4 6.9 6 10.3l.6 1.1 3.6-6.2c.7-1.2 1.4-2.4 2-3.6l.6-2z" fill="#fff"/></svg>
              <figure>
                <blockquote className="mt-6 text-lg font-semibold text-white sm:text-xl sm:leading-8">
                  <p>
                    “Ontrend nos permite analizar con precisión las ventas, el consumo y las tendencias, lo cual ha optimizado nuestras decisiones de inventario y estrategias de marketing.”
                  </p>
                </blockquote>
                <figcaption className="mt-6 text-base text-white">
                  <div className="font-semibold">Nacho Puig</div>
                  <div className="mt-1">CEO de Hawkers</div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    )
  }
  