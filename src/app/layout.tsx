import './globals.css'
import { ThemeProvider } from 'next-themes'

import { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import { Sidebar } from '@/components/Sidebar'
import { SidebarProvider } from '@/contexts/sidebar.context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Eddie ERP',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt" className='antialiased' suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <div className="relative min-h-screen dark:bg-zinc-900 lg:grid lg:grid-cols-app">
            <SidebarProvider>
              <Sidebar />
            </SidebarProvider>
            <main className="max-w-screen px-4 pb-12 pt-24 lg:col-start-2 lg:w-auto lg:px-8 lg:pt-8">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
