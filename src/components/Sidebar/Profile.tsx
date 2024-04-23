'use client'

import { LogOut } from 'lucide-react'
import { Button } from '../Button'
import { useSideBar } from '@/contexts/sidebar.context'

export interface ProfileProps {}

export function Profile() {
  const { isCollapsed } = useSideBar()

  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/leofernandesbh.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />
      <div className={isCollapsed ? 'hidden' : "flex flex-col"}>
        <span className="block text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Léo Fernandes
        </span>
        <span className="block text-sm text-zinc-500 dark:text-zinc-400">
          leandroleobh@gmail.com
        </span>
      </div>
      <Button variant="ghost" className={isCollapsed ? 'hidden' : "ml-auto"}>
        <LogOut className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
      </Button>
    </div>
  )
}
