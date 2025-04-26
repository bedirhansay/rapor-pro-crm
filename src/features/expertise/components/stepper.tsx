import { cn } from '@/lib/utils/cn'
import { steps } from '../constant'

export const Stepper = ({ currentStep }: { currentStep: number }) => {
  return (
    <div className="mb-10 overflow-x-auto">
      <div className="relative flex w-max min-w-full items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white px-4 py-6 shadow-sm">
        {steps.map((step, index) => {
          const isActive = index === currentStep
          const isCompleted = index < currentStep

          return (
            <div key={step.id} className="relative flex min-w-[80px] flex-col items-center text-center">
              <div
                className={cn(
                  'flex size-10 items-center justify-center rounded-full border-2 text-sm font-medium transition-all',
                  isCompleted && 'border-green-600 bg-green-600 text-white',
                  isActive && !isCompleted && 'border-primary bg-primary text-white',
                  !isActive && !isCompleted && 'border-gray-300 bg-white text-gray-500'
                )}
              >
                {isCompleted ? '✓' : index + 1}
              </div>
              <div className="mt-2 text-xs font-medium text-gray-700">{step.title}</div>
              {index < steps.length - 1 && (
                <div className="absolute top-5 right-[-50%] z-[-1] h-1 w-full">
                  <div className={cn('h-1 w-full', isCompleted ? 'bg-green-600' : 'bg-gray-300')} />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
