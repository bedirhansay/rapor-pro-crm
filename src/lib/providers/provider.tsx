'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'react-hot-toast'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 5 * 60 * 1000,
      staleTime: 5 * 60 * 1000,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      refetchOnMount: false,
      retry: false,
    },
    mutations: {
      retry: 1,
    },
  },
})

export function ClientProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <QueryClientProvider client={queryClient}>
        <Toaster />
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  )
}
