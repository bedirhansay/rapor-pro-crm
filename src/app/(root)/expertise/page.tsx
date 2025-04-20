import Expertise from '@/features/expertise/expertise'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Paketler',
}

export default async function Page() {
  return <Expertise />
}
