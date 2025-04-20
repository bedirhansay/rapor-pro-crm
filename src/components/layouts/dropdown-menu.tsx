'use client'

import { DropdownDivider, DropdownItem, DropdownLabel, DropdownMenu } from '@/components/ui/dropdown'
import { Lightbulb, LogOut, Shield, UserCircle } from 'lucide-react'
import React from 'react'
import { accountDropdownMenuItems } from './contant'

export function AccountDropdownMenu({ anchor }: { anchor: 'top start' | 'bottom end' }) {
  // Map icon names to components
  const iconMap: Record<string, React.ComponentType<any>> = {
    UserCircle,
    Shield,
    Lightbulb,
    LogOut,
  }

  return (
    <DropdownMenu className="min-w-64" anchor={anchor}>
      {accountDropdownMenuItems.map((item, index) => {
        const IconComponent = iconMap[item.icon]
        return (
          <React.Fragment key={index}>
            {index === 1 && <DropdownDivider />}
            {index === 3 && <DropdownDivider />}
            <DropdownItem href={item.href}>
              <IconComponent className="h-4 w-4" />
              <DropdownLabel>{item.label}</DropdownLabel>
            </DropdownItem>
          </React.Fragment>
        )
      })}
    </DropdownMenu>
  )
}
