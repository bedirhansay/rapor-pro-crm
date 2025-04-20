import { Fragment } from 'react'
import { classNames, days, statuses } from './contant'

export const HomeTable = () => {
  return (
    <div>
      <div className="mx-auto">
        <h2 className="mx-auto max-w-2xl text-base font-semibold text-gray-900 lg:mx-0 lg:max-w-none">
          Son aktiviteler
        </h2>
      </div>
      <div className="mt-6 overflow-hidden rounded-lg border border-gray-900/10">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <table className="w-full text-left">
              <thead className="sr-only">
                <tr>
                  <th>Tutar</th>
                  <th className="hidden sm:table-cell">Müşteri</th>
                  <th>Daha fazla detay</th>
                </tr>
              </thead>
              <tbody>
                {days.map((day) => (
                  <Fragment key={day.dateTime}>
                    <tr className="text-sm/6 text-gray-900">
                      <th scope="colgroup" colSpan={3} className="relative isolate py-2 font-semibold">
                        <time dateTime={day.dateTime}>{day.date}</time>
                        <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-50" />
                        <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-50" />
                      </th>
                    </tr>
                    {day.transactions.map((transaction) => (
                      <tr key={transaction.id}>
                        <td className="relative py-5 pr-6">
                          <div className="flex gap-x-6">
                            <transaction.icon
                              aria-hidden="true"
                              className="hidden h-6 w-5 flex-none text-gray-400 sm:block"
                            />
                            <div className="flex-auto">
                              <div className="flex items-start gap-x-3">
                                <div className="text-sm/6 font-medium text-gray-900">{transaction.amount}</div>
                                <div
                                  className={classNames(
                                    statuses[transaction.status as keyof typeof statuses],
                                    'rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset'
                                  )}
                                >
                                  {transaction.status}
                                </div>
                              </div>
                              {transaction.tax ? (
                                <div className="mt-1 text-xs/5 text-gray-500">{transaction.tax} vergi</div>
                              ) : null}
                            </div>
                          </div>
                          <div className="absolute right-full bottom-0 h-px w-screen bg-gray-100" />
                          <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
                        </td>
                        <td className="hidden py-5 pr-6 sm:table-cell">
                          <div className="text-sm/6 text-gray-900">{transaction.client}</div>
                          <div className="mt-1 text-xs/5 text-gray-500">{transaction.description}</div>
                        </td>
                        <td className="py-5 text-right">
                          <div className="flex justify-end">
                            <a
                              href={transaction.href}
                              className="text-sm/6 font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Görüntüle<span className="hidden sm:inline"> işlem</span>
                              <span className="sr-only">
                                , fatura #{transaction.invoiceNumber}, {transaction.client}
                              </span>
                            </a>
                          </div>
                          <div className="mt-1 text-xs/5 text-gray-500">
                            Fatura <span className="text-gray-900">#{transaction.invoiceNumber}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
