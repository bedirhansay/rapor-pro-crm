'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import { Switch } from './ui/switch'

export function DarkModeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="flex w-full items-center justify-between gap-2 rounded-lg bg-gray-200 px-3 py-2 hover:bg-zinc-100 dark:bg-zinc-800 dark:hover:bg-zinc-800"
      aria-label="Toggle dark mode"
    >
      <Switch checked={theme === 'dark'} onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      {theme === 'dark' ? (
        <div className="flex items-center gap-2">
          <span className="text-sm">Koyu</span>
          <FiMoon className="h-5 w-5" />
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <span className="text-sm">Açık</span>
          <FiSun className="h-5 w-5" />
        </div>
      )}
    </button>
  )
}
