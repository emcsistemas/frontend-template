'use client'

import { createContext, useContext, useState } from 'react'

interface SideBarContextData {
  isCollapsed: boolean
  toogleSideBar: () => void
}

const initialValue = {
  isCollapsed: false,
  toogleSideBar: () => {
    console.log('toogleSideBar')
  },
}

export const SideBarContext = createContext<SideBarContextData>(initialValue)

interface SideBarProviderProps {
  children: React.ReactNode | React.ReactNode[]
}

const SidebarProvider = ({ children }: SideBarProviderProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

  const toogleSideBar = () => {
    setIsCollapsed((state) => !state)
  }

  return (
    <SideBarContext.Provider
      value={{
        isCollapsed,
        toogleSideBar,
      }}
    >
      {children}
    </SideBarContext.Provider>
  )
}

const useSideBar = () => useContext(SideBarContext)

export { SidebarProvider, useSideBar }
