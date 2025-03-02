'use client'

import { AddNewReportButton } from '@/components/add-new-report'
import { Avatar } from '@/components/ui/avatar'
import {
  Dropdown,
  DropdownButton,
  DropdownDivider,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
} from '@/components/ui/dropdown'
import {
  Sidebar,
  SidebarBody,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarLabel,
  SidebarSection,
  SidebarSpacer,
} from '@/components/ui/sidebar'
import { getEvents } from '@/data'
import {
  ChevronDownIcon,
  ChevronUpIcon,
  Cog6ToothIcon,
  HomeIcon,
  PlusIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  Square2StackIcon,
  TicketIcon,
} from '@heroicons/react/20/solid'
import { usePathname } from 'next/navigation'
import { DarkModeSwitch } from '../dark-mode'
import { AccountDropdownMenu } from './dropdown-menu'
export function SidebarMenu({ events }: { events: Awaited<ReturnType<typeof getEvents>> }) {
  const pathname = usePathname()

  return (
    <Sidebar>
      <AddNewReportButton />

      <SidebarHeader>
        <Dropdown>
          <DropdownButton as={SidebarItem}>
            <Avatar src="/teams/Rapor Pro.svg" />
            <SidebarLabel>Rapor Pro</SidebarLabel>
            <ChevronDownIcon />
          </DropdownButton>
          <DropdownMenu className="min-w-80 lg:min-w-64" anchor="bottom start">
            <DropdownItem href="/settings">
              <Cog6ToothIcon />
              <DropdownLabel>Settings</DropdownLabel>
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem href="#">
              <Avatar slot="icon" src="/teams/Rapor Pro.svg" />
              <DropdownLabel>Rapor Pro</DropdownLabel>
            </DropdownItem>
            <DropdownItem href="#">
              <Avatar slot="icon" initials="BE" className="bg-purple-500 text-white" />
              <DropdownLabel>Big Events</DropdownLabel>
            </DropdownItem>
            <DropdownDivider />
            <DropdownItem href="#">
              <PlusIcon />
              <DropdownLabel>New team&hellip;</DropdownLabel>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </SidebarHeader>

      <SidebarBody>
        <SidebarSection>
          <SidebarItem href="/" current={pathname === '/'}>
            <HomeIcon />
            <SidebarLabel>Ana Sayfa</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/reports" current={pathname.startsWith('/reports')}>
            <Square2StackIcon />
            <SidebarLabel>Raporlar</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/users" current={pathname.startsWith('/users')}>
            <Square2StackIcon />
            <SidebarLabel>Kullanıcılar</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/orders" current={pathname.startsWith('/orders')}>
            <TicketIcon />
            <SidebarLabel>Siparişler</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="/settings" current={pathname.startsWith('/settings')}>
            <Cog6ToothIcon />
            <SidebarLabel>Ayarlar</SidebarLabel>
          </SidebarItem>
        </SidebarSection>

        {/* <SidebarSection className="max-lg:hidden">
          <SidebarHeading>Upcoming Events</SidebarHeading>
          {events.map((event) => (
            <SidebarItem key={event.id} href={event.url}>
              {event.name}
            </SidebarItem>
          ))}
        </SidebarSection> */}

        <SidebarSpacer />

        <SidebarSection>
          <SidebarItem href="#">
            <DarkModeSwitch />
            <SidebarLabel>Tema</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="#">
            <QuestionMarkCircleIcon />
            <SidebarLabel>Destek</SidebarLabel>
          </SidebarItem>
          <SidebarItem href="#">
            <SparklesIcon />
            <SidebarLabel>Değişlikler</SidebarLabel>
          </SidebarItem>
        </SidebarSection>
      </SidebarBody>
      <SidebarFooter className="max-lg:hidden">
        <Dropdown>
          <DropdownButton as={SidebarItem}>
            <span className="flex min-w-0 items-center gap-3">
              <Avatar src="/users/user.jpg" className="size-10" square alt="" />
              <span className="min-w-0">
                <span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">Bedirhan</span>
                <span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">
                  bedirhan@rapor.pro
                </span>
              </span>
            </span>
            <ChevronUpIcon />
          </DropdownButton>
          <AccountDropdownMenu anchor="top start" />
        </Dropdown>
      </SidebarFooter>
    </Sidebar>
  )
}
