interface BreadcrumbItem {
  title: string
  href: string
}

interface BreadcrumbConfig {
  [key: string]: BreadcrumbItem[]
}

export const breadcrumbs: BreadcrumbConfig = {
  home: [{ title: 'Ana Sayfa', href: '/' }],
  reports: [
    { title: 'Ana Sayfa', href: '/' },
    { title: 'Raporlar', href: '/reports' },
  ],
  singleReport: [
    { title: 'Ana Sayfa', href: '/' },
    { title: 'Raporlar', href: '/reports' },
    { title: 'Rapor Detayı', href: '' },
  ],
  packages: [
    { title: 'Ana Sayfa', href: '/' },
    { title: 'Paketler', href: '/packages' },
  ],
  expertise: [
    { title: 'Ana Sayfa', href: '/' },
    { title: 'Ekspertiz', href: '/expertise' },
  ],
  customers: [
    { title: 'Ana Sayfa', href: '/' },
    { title: 'Müşteriler', href: '/customers' },
  ],
  branches: [
    { title: 'Ana Sayfa', href: '/' },
    { title: 'Şubeler', href: '/branches' },
  ],
  accounting: [
    { title: 'Ana Sayfa', href: '/' },
    { title: 'Muhasebe', href: '/accounting' },
  ],
  users: [
    { title: 'Ana Sayfa', href: '/' },
    { title: 'Kullanıcılar', href: '/users' },
  ],
  auth: [
    { title: 'Ana Sayfa', href: '/' },
    { title: 'Kimlik Doğrulama', href: '/auth' },
  ],
}
