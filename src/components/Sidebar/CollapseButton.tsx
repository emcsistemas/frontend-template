'use client'

import { useSideBar } from '@/contexts/sidebar.context'
import { ChevronsLeft, ChevronsRight } from 'lucide-react'

export function CollapseButton() {
  const { isCollapsed, toogleSideBar } = useSideBar()

  return (
    <button className="hidden lg:flex" onClick={toogleSideBar}>
      {isCollapsed ? <ChevronsRight className="h-6 w-6 ml-3 text-zinc-700 dark:text-zinc-300" /> : <ChevronsLeft className="h-6 w-6 text-zinc-700 dark:text-zinc-300" />}
    </button>
  )
}
