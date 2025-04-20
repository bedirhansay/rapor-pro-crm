import Customers from '@/features/customers/customers'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Müşteriler',
}

export default async function Page() {
  return <Customers />
}
