'use client'

import { Avatar } from '@/components/ui/avatar'
import { Dropdown, DropdownButton } from '@/components/ui/dropdown'
import { Navbar, NavbarItem, NavbarSection, NavbarSpacer } from '@/components/ui/navbar'
import { userInfo } from './contant'
import { AccountDropdownMenu } from './dropdown-menu'

export function NavbarMenu() {
  return (
    <Navbar>
      <NavbarSpacer />
      <NavbarSection>
        <Dropdown>
          <DropdownButton as={NavbarItem}>
            <Avatar src={userInfo.avatar} square />
          </DropdownButton>
          <AccountDropdownMenu anchor="bottom end" />
        </Dropdown>
      </NavbarSection>
    </Navbar>
  )
}
