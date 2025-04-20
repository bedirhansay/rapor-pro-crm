'use client'

import { BreadcrumbNav } from '@/components/breadcrumb-nav'
import { useState } from 'react'
import { PackageCard } from './components/package-card'
import { PackageHeader } from './components/package-header'
import { PackageTable } from './components/package-table'
import { packages } from './constant'

export function Packages() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  return (
    <div className="space-y-6">
      <BreadcrumbNav pageName="packages" />

      <PackageHeader viewMode={viewMode} setViewMode={setViewMode} />

      <div>
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} {...pkg} />
            ))}
          </div>
        ) : (
          <PackageTable packages={packages} />
        )}
      </div>
    </div>
  )
}
