'use client'

import { useState } from 'react'
import { HomeHeader } from './header'
import { HomeRecentClients } from './recent-clients'
import { HomeStats } from './stats'
import { HomeTable } from './table'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <main>
        <HomeHeader />
        <div className="relative isolate mt-10 overflow-hidden">
          <HomeStats />
        </div>

        <div className="space-y-16 py-16 xl:space-y-20">
          <HomeTable />
          <HomeRecentClients />
        </div>
      </main>
    </>
  )
}
