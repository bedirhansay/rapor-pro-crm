'use client'

import { SidebarLayout } from '@/components/ui/sidebar-layout'
import { getEvents } from '@/data'
import { NavbarMenu } from './navbar'
import { SidebarMenu } from './sidebar-menu'

export function ApplicationLayout({
  events,
  children,
}: {
  events: Awaited<ReturnType<typeof getEvents>>
  children: React.ReactNode
}) {
  return (
    <SidebarLayout navbar={<NavbarMenu />} sidebar={<SidebarMenu events={events} />}>
      {children}
    </SidebarLayout>
  )
}
