import { classNames, stats } from './contant'

export const HomeStats = () => {
  return (
    <div className="rounded-lg border border-gray-900/10">
      <dl className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:px-2 xl:px-0">
        {stats.map((stat, statIdx) => (
          <div
            key={stat.name}
            className={classNames(
              statIdx % 2 === 1 ? 'sm:border-l' : statIdx === 2 ? 'lg:border-l' : '',
              'flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 border-gray-900/10 px-4 py-10 sm:px-6 xl:px-8'
            )}
          >
            <dt className="text-sm/6 font-medium text-gray-500">{stat.name}</dt>
            <dd
              className={classNames(
                stat.changeType === 'negative' ? 'text-rose-600' : 'text-gray-700',
                'text-xs font-medium'
              )}
            >
              {stat.change}
            </dd>
            <dd className="w-full flex-none text-3xl/10 font-medium tracking-tight text-gray-900">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
