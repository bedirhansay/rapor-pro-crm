import { ClientProvider } from '@/lib/providers/provider'
import '@/styles/tailwind.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: 'Rapor Pro',
    default: 'Rapor Pro',
  },
  description: '',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className="text-zinc-950 antialiased scheme-light lg:bg-zinc-100 dark:bg-zinc-900 dark:text-white dark:lg:bg-zinc-950"
    >
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  )
}
