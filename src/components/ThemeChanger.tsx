'use client'

import { useSideBar } from '@/contexts/sidebar.context'
import * as Switch from '@radix-ui/react-switch'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeChanger() {
  const { isCollapsed } = useSideBar()
  const { theme, setTheme } = useTheme()

  function toogleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={isCollapsed ? 'hidden' : "flex items-center space-x-2 mr-5 lg:mr-0 text-zinc-700 dark:text-zinc-300"}>
      <div><Sun className="h-5 w-5" /></div>
      <Switch.Root checked={theme === 'dark'} onCheckedChange={toogleTheme} className="w-11 h-6 rounded-full relative bg-zinc-300 dark:bg-zinc-600" id="theme-mode">
        <Switch.Thumb className="block w-6 h-6 bg-zinc-600 dark:bg-white rounded-full shadow-md transition-transform transform translate-0.5 will-change-transform data-[state=checked]:translate-x-5" />
      </Switch.Root>
      <div><Moon className="h-5 w-5" /></div>
    </div>
  )
}