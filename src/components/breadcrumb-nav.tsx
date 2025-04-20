'use client'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { breadcrumbs } from '@/constants/breadcrumbs'
import Link from 'next/link'

interface BreadcrumbNavProps {
  pageName: keyof typeof breadcrumbs
  dynamicTitle?: string
}

export function BreadcrumbNav({ pageName, dynamicTitle }: BreadcrumbNavProps) {
  const items = breadcrumbs[pageName]

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          // If it's the last item and we have a dynamic title, use that instead
          const title = isLast && dynamicTitle ? dynamicTitle : item.title

          return (
            <>
              <BreadcrumbItem key={item.href}>
                {isLast ? (
                  <BreadcrumbPage>{title}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={item.href}>{title}</Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
