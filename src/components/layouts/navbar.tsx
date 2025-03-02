'use client'

import { Avatar } from '@/components/ui/avatar'
import { Dropdown, DropdownButton } from '@/components/ui/dropdown'
import { Navbar, NavbarItem, NavbarSection, NavbarSpacer } from '@/components/ui/navbar'
import { AccountDropdownMenu } from './dropdown-menu'

export function NavbarMenu() {
  return (
    <Navbar>
      <NavbarSpacer />
      <NavbarSection>
        <Dropdown>
          <DropdownButton as={NavbarItem}>
            <Avatar src="/users/user.jpg" square />
          </DropdownButton>
          <AccountDropdownMenu anchor="bottom end" />
        </Dropdown>
      </NavbarSection>
    </Navbar>
  )
}
