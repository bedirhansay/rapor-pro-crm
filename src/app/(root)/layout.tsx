import { ApplicationLayout } from '@/components/layouts/application-layout'
import { getEvents } from '@/data'
import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import type React from 'react'

export const metadata: Metadata = {
  title: {
    template: '%s - Rapor Pro',
    default: 'Rapor Pro',
  },
  description: '',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  let events = await getEvents()

  return <ApplicationLayout events={events}>{children}</ApplicationLayout>
}
