import { Accounting } from '@/features/accounting/accounting'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Muhasebe',
}

export default async function Page() {
  return <Accounting />
}
