import { PlusSmallIcon } from '@heroicons/react/20/solid'
import { secondaryNavigation } from './contant'

export const HomeHeader = () => {
  return (
    <header className="pb-4 sm:pb-6">
      <div className="mx-auto flex flex-wrap items-center gap-6 sm:flex-nowrap">
        <h1 className="text-base/7 font-semibold text-gray-900">Rapor Pro</h1>
        <div className="order-last flex w-full gap-x-8 text-sm/6 font-semibold sm:order-none sm:w-auto sm:border-l sm:border-gray-200 sm:pl-6 sm:text-sm/7">
          {secondaryNavigation.map((item) => (
            <a key={item.name} href={item.href} className={item.current ? 'text-indigo-600' : 'text-gray-700'}>
              {item.name}
            </a>
          ))}
        </div>
        <a
          href="#"
          className="ml-auto flex items-center gap-x-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <PlusSmallIcon aria-hidden="true" className="-ml-1.5 size-5" />
          Yeni fatura
        </a>
      </div>
    </header>
  )
}
