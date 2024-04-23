'use client'

import { useState } from 'react'
import { TabItem } from '@/components/TabItem'
import * as Tabs from '@radix-ui/react-tabs'
import * as ScrollArea from '@radix-ui/react-scroll-area'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState<string>('tab1')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <ScrollArea.Root className="w-full" type="hover">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-800">
            <TabItem
              isSelected={currentTab === 'tab1'}
              value="tab1"
              title="Meus detalhes"
            />
            <TabItem
              isSelected={currentTab === 'tab2'}
              value="tab2"
              title="Perfil"
            />
            <TabItem
              isSelected={currentTab === 'tab3'}
              value="tab3"
              title="Senha"
            />
            <TabItem
              isSelected={currentTab === 'tab4'}
              value="tab4"
              title="Equipe"
            />
            <TabItem
              isSelected={currentTab === 'tab5'}
              value="tab5"
              title="Assinatura"
            />
            <TabItem
              isSelected={currentTab === 'tab6'}
              value="tab6"
              title="Faturamento"
            />
            <TabItem
              isSelected={currentTab === 'tab7'}
              value="tab7"
              title="E-mail"
            />
            <TabItem
              isSelected={currentTab === 'tab8'}
              value="tab8"
              title="Notificações"
            />
            <TabItem
              isSelected={currentTab === 'tab9'}
              value="tab9"
              title="Integrações"
            />
          </Tabs.List>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          className="flex h-2.5 touch-none select-none flex-col bg-zinc-100 p-0.5"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300 before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </Tabs.Root>
  )
}
