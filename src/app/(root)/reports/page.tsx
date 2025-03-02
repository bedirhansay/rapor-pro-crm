import Reports from '@/routes/reports/reports'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Raporlar',
}

export default async function Page() {
  return <Reports />
}
