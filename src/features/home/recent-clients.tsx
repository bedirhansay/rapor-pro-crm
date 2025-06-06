import { classNames, statuses } from './contant'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { EllipsisHorizontalIcon } from '@heroicons/react/16/solid'
import { clients } from './contant'

export const HomeRecentClients = () => {
  return (
    <div className="mx-auto">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <div className="flex items-center justify-between">
          <h2 className="text-base/7 font-semibold text-gray-900">Son müşteriler</h2>
          <a href="#" className="text-sm/6 font-semibold text-indigo-600 hover:text-indigo-500">
            Tümünü görüntüle<span className="sr-only">, müşteriler</span>
          </a>
        </div>
        <ul role="list" className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
          {clients.map((client) => (
            <li key={client.id} className="overflow-hidden rounded-xl border border-gray-200">
              <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                <img
                  alt={client.name}
                  src={client.imageUrl}
                  className="size-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
                />
                <div className="text-sm/6 font-medium text-gray-900">{client.name}</div>
                <Menu as="div" className="relative ml-auto">
                  <MenuButton className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Seçenekleri aç</span>
                    <EllipsisHorizontalIcon aria-hidden="true" className="size-5" />
                  </MenuButton>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                  >
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden"
                      >
                        Görüntüle<span className="sr-only">, {client.name}</span>
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden"
                      >
                        Düzenle<span className="sr-only">, {client.name}</span>
                      </a>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
              <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm/6">
                <div className="flex justify-between gap-x-4 py-3">
                  <dt className="text-gray-500">Son fatura</dt>
                  <dd className="text-gray-700">
                    <time dateTime={client.lastInvoice.dateTime}>{client.lastInvoice.date}</time>
                  </dd>
                </div>
                <div className="flex justify-between gap-x-4 py-3">
                  <dt className="text-gray-500">Tutar</dt>
                  <dd className="flex items-start gap-x-2">
                    <div className="font-medium text-gray-900">{client.lastInvoice.amount}</div>
                    <div
                      className={classNames(
                        statuses[client.lastInvoice.status as keyof typeof statuses],
                        'rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset'
                      )}
                    >
                      {client.lastInvoice.status}
                    </div>
                  </dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
