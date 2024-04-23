'use client'

import { Search, LifeBuoy, Cog, Menu } from 'lucide-react'
import * as Input from '../Form/Input'
import { Logo } from './Logo'
import { Profile } from './Profile'
import { Navigation } from './Navigation'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { NavItem } from './Navigation/NavItem'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Button } from '../Button'
import { useSideBar } from '@/contexts/sidebar.context'
import { twMerge } from 'tailwind-merge'

export function Sidebar() {
  const { isCollapsed, toogleSideBar } = useSideBar()

  return (    
    <Collapsible.Root className={twMerge(
      "fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 overflow-hidden transition-all duration-250 ease-linear",
      "border-b border-zinc-200 bg-white p-4 scrollbar-track-zinc-100 scrollbar-thumb-zinc-300 data-[state=open]:bottom-0",
      "dark:border-zinc-800 dark:bg-zinc-900",
      "lg:bottom-0 lg:right-auto lg:h-auto lg:overflow-auto lg:border-b-0 lg:border-r lg:px-5 lg:py-8",
      isCollapsed ? "scrollbar-none lg:w-28 lg:items-center" : "scrollbar-thin lg:w-80"
    )}>
      <div className="flex w-full items-center justify-between">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6 text-zinc-500" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        asChild
        forceMount
        className="data-[state=closed]:hidden data-[state=closed]:animate-slideUpAndFade data-[state=open]:animate-slideDownAndFade lg:data-[state=closed]:flex"
      >
        <div className="flex flex-1 flex-col gap-6">
          <div className='flex space-x-3 h-11 items-center'>
            <div className={isCollapsed ? 'hidden' : 'flex flex-1 ml-1'}>
              <Input.Root>
                <Input.Prefix>
                  <Search className="h-5 w-5 text-zinc-500" />
                </Input.Prefix>
                <Input.Control type="text" placeholder="Busca" autoFocus />
              </Input.Root>
            </div>
            <div className={isCollapsed ? 'mr-auto' : 'hidden'}>
              <button type='button' onClick={toogleSideBar}>
                <Search className="h-6 w-6 text-zinc-500" />
              </button>
            </div>                        
          </div>

          <Navigation />

          <div className="mt-auto flex flex-col gap-6">
            <nav className="flex flex-col gap-1">
              <NavItem icon={LifeBuoy} title="Suporte" />
              <NavItem icon={Cog} title="Configurações" />              
            </nav>

            <UsedSpaceWidget />
            <div className="h-px bg-zinc-200 dark:bg-zinc-800" />
            <Profile />
          </div>
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
