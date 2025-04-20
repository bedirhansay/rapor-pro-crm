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
import { ChevronDown, ChevronUp, HelpCircle, Home, Layers, Plus, Settings, Sparkles, Ticket } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React from 'react'
import { footerMenuItems, sidebarMenuItems, teamDropdownMenuItems, teamInfo, userInfo } from './contant'
import { AccountDropdownMenu } from './dropdown-menu'

export function SidebarMenu({ events }: { events: Awaited<ReturnType<typeof getEvents>> }) {
  const pathname = usePathname()

  const iconMap: Record<string, React.ComponentType<any>> = {
    Home,
    Layers,
    Ticket,
    Settings,
    HelpCircle,
    Sparkles,
  }

  return (
    <Sidebar>
      <AddNewReportButton />

      <SidebarHeader>
        <Dropdown>
          <DropdownButton as={SidebarItem}>
            <Avatar src={teamInfo.avatar} />
            <SidebarLabel>{teamInfo.name}</SidebarLabel>
            <ChevronDown className="h-4 w-4" />
          </DropdownButton>
          <DropdownMenu className="min-w-80 lg:min-w-64" anchor="bottom start">
            {teamDropdownMenuItems.map((item, index) => {
              if (item.icon === 'Avatar') {
                return (
                  <React.Fragment key={index}>
                    {index === 1 && <DropdownDivider />}
                    <DropdownItem href={item.href}>
                      <Avatar
                        slot="icon"
                        src={item.avatar}
                        initials={typeof item.avatar === 'string' && item.avatar.length <= 2 ? item.avatar : undefined}
                        className={
                          item.avatarBg && item.avatarTextColor ? `${item.avatarBg} ${item.avatarTextColor}` : undefined
                        }
                      />
                      <DropdownLabel>{item.label}</DropdownLabel>
                    </DropdownItem>
                    {index === 2 && <DropdownDivider />}
                  </React.Fragment>
                )
              }

              const IconComponent = iconMap[item.icon] || Plus
              return (
                <React.Fragment key={index}>
                  {index === 1 && <DropdownDivider />}
                  <DropdownItem href={item.href}>
                    <IconComponent className="h-4 w-4" />
                    <DropdownLabel>{item.label}</DropdownLabel>
                  </DropdownItem>
                  {index === 2 && <DropdownDivider />}
                </React.Fragment>
              )
            })}
          </DropdownMenu>
        </Dropdown>
      </SidebarHeader>

      <SidebarBody>
        <SidebarSection>
          {sidebarMenuItems.map((item, index) => {
            const IconComponent = iconMap[item.icon]
            return (
              <SidebarItem
                key={index}
                href={item.href}
                current={pathname === item.href || pathname.startsWith(item.href + '/')}
              >
                <IconComponent className="h-4 w-4" />
                <SidebarLabel>{item.label}</SidebarLabel>
              </SidebarItem>
            )
          })}
        </SidebarSection>

        <SidebarSpacer />

        <SidebarSection>
          {footerMenuItems.map((item, index) => {
            const IconComponent = iconMap[item.icon]
            return (
              <SidebarItem key={index} href={item.href}>
                <IconComponent className="h-4 w-4" />
                <SidebarLabel>{item.label}</SidebarLabel>
              </SidebarItem>
            )
          })}
          {/* <SidebarItem href="#">
            <DarkModeSwitch />
          </SidebarItem> */}
        </SidebarSection>
      </SidebarBody>
      <SidebarFooter className="max-lg:hidden">
        <Dropdown>
          <DropdownButton as={SidebarItem}>
            <span className="flex min-w-0 items-center gap-3">
              <Avatar src={userInfo.avatar} className="size-10" square alt="" />
              <span className="min-w-0">
                <span className="block truncate text-sm/5 font-medium text-zinc-950 dark:text-white">
                  {userInfo.name}
                </span>
                <span className="block truncate text-xs/5 font-normal text-zinc-500 dark:text-zinc-400">
                  {userInfo.email}
                </span>
              </span>
            </span>
            <ChevronUp className="h-4 w-4" />
          </DropdownButton>
          <AccountDropdownMenu anchor="top start" />
        </Dropdown>
      </SidebarFooter>
    </Sidebar>
  )
}
