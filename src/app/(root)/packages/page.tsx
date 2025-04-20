import { Packages } from '@/features/packages/packages'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Paketler',
}

export default async function Page() {
  return <Packages />
}
