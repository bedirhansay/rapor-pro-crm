import { Branches } from '@/features/branches/branches'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Şubeler',
}

export default async function Page() {
  return <Branches />
}
