export default function CTA() {
  return (
    <div id="cta" className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
        <div className="max-w-xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-7">
          <h2 className="inline sm:block lg:inline xl:block">Impulsa tu productividad.</h2>{' '}
          <p className="inline sm:block lg:inline xl:block">Solicita una demo hoy.</p>
        </div>
        <form className="w-full max-w-md lg:col-span-5 lg:pt-2">
          <div className="flex gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              Correo electrónico
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Ingresa tu correo electrónico"
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-green-200 px-3.5 py-2.5 text-sm font-semibold text-blue shadow-sm hover:bg-green-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Solicitar demo
            </button>
          </div>
          <p className="mt-4 text-sm leading-6 text-gray-900">
            Protegemos tus datos. Lee nuestra{' '}
            <a href="#" className="font-semibold text-blue hover:text-indigo-500">
              política&nbsp;de&nbsp;privacidad
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  )
}
