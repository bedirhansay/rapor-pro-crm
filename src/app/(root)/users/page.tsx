import Users from '@/features/users/users'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kullanıcılar',
}

export default async function Page() {
  return <Users />
}
