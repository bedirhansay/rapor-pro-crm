import ExpertiseRoute from '@/features/expertise'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Paketler',
}

export default async function Page() {
  return <ExpertiseRoute />
}
