import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Basado en datos',
    description:
      'Vitaminamos tus datos con estudios de tendencia de tu mercado objetivo.',
    href: '#cta',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Cumplimiento con GDPR y SOC2',
    description:
      'Todos tus análisis de datos se procesan en entornos seguros y siguiendo SOC2',
    href: '#cta',
    icon: LockClosedIcon,
  },
  {
    name: 'Optimiza tu margen operativo',
    description:
      'Itera sobre tus estrategias de venta y expansión de mercados basándote en datos concretos.',
    href: '#cta',
    icon: ArrowPathIcon,
  },
]

export default function Features() {
  return (
    <div id="features" className="bg-white py-20 sm:py-30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue">Optimizamos tu margen operativo</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Descubre tendencias en tu data
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Analizamos tus canales de venta actuales y los comparamos con trends.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-green-300" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} className="text-sm font-semibold leading-6 text-green-300">
                      Ver más <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
