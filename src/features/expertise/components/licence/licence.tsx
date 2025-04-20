import { cn } from '@/lib/utils/cn'
import { useState } from 'react'

import { steps } from '../../constant'
import LicenceQrReader from './licence-qr-reader'
import { LicenceManualEntry } from './manual-entry'

export const LicenceSection = ({ currentStep }: { currentStep: number }) => {
  const [entryMethod, setEntryMethod] = useState<'scan' | 'manual' | null>(null)

  return (
    <div className="mb-10 rounded-lg border p-5 shadow-md">
      <div className="mt-6 text-left">
        <h2 className="text-2xl font-semibold text-gray-800">{steps[currentStep]?.title || ''}</h2>
        <p className="mt-1 text-sm text-gray-500">{steps[currentStep]?.description || ''}</p>
      </div>
      <div className="mt-6 text-center">
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => setEntryMethod('scan')}
            className={cn(
              'rounded-lg border px-4 py-2 text-sm font-medium transition',
              entryMethod === 'scan'
                ? 'border-green-600 bg-green-50 text-green-700'
                : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-100'
            )}
          >
            Ruhsat Bilgilerini Tarat
          </button>

          <button
            onClick={() => setEntryMethod('manual')}
            className={cn(
              'rounded-lg border px-4 py-2 text-sm font-medium transition',
              entryMethod === 'manual'
                ? 'border-green-600 bg-green-50 text-green-700'
                : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-100'
            )}
          >
            Elle Bilgi Girişi
          </button>
        </div>

        {entryMethod === 'scan' && <LicenceQrReader />}
        {entryMethod === 'manual' && <LicenceManualEntry />}
      </div>
    </div>
  )
}
