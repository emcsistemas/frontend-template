'use client'

import { useSideBar } from "@/contexts/sidebar.context"

export interface UsedSpaceWidgetProps {}

export function UsedSpaceWidget(props: UsedSpaceWidgetProps) {
  const { isCollapsed } = useSideBar()

  return (
    <div className={isCollapsed ? 'hidden' : "flex flex-col gap-4 rounded-lg bg-blue-50 px-4 py-5 dark:bg-zinc-800"}>
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium leading-5 text-blue-700 dark:text-zinc-100">
          Sua assinatura
        </span>
        <span className="text-sm leading-5 text-blue-500 dark:text-zinc-400">
          Este mês você já emitiu 25 das 30 notas fiscais disponíveis para seu plano
        </span>
      </div>

      <div className="h-2 rounded-full bg-blue-100 dark:bg-zinc-600">
        <div className="h-2 w-1/4 rounded-full bg-blue-600 dark:bg-blue-400" />
      </div>

      <div className="flex gap-3">
        <button
          type="button"
          className="text-sm font-medium text-blue-500 dark:text-blue-300"
        >
          Ignorar
        </button>

        <button
          type="button"
          className="text-sm font-medium text-blue-700 dark:text-zinc-300"
        >
          Atualizar plano
        </button>
      </div>
    </div>
  )
}
