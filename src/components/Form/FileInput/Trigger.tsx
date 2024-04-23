'use client'

import { UploadCloud } from 'lucide-react'
import { useFileInput } from './Root'

export interface TriggerProps {}

export function Trigger(props: TriggerProps) {
  const { id } = useFileInput()

  return (
    <label
      htmlFor={id}
      className="group flex w-full flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-200 px-6 py-4 text-center text-zinc-500 group-focus-within:border-blue-300 group-focus-within:ring-4 group-focus-within:ring-blue-100 hover:border-blue-200 hover:bg-blue-25 hover:text-blue-500 dark:border-zinc-800 dark:text-zinc-400 dark:group-focus-within:border-blue-500 dark:group-focus-within:ring-blue-500/10 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-blue-300"
    >
      <span className="relative rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 group-hover:border-blue-50 group-hover:bg-blue-100 dark:border-zinc-700 dark:bg-zinc-800 dark:group-hover:border-zinc-600 dark:group-hover:bg-zinc-700">
        <UploadCloud className="h-5 w-5 text-zinc-600 group-hover:text-blue-600 dark:text-zinc-500 dark:group-hover:text-blue-300" />
      </span>

      <div className="flex flex-col items-center gap-1">
        <span className="text-sm">
          <span className="font-semibold text-blue-700 dark:text-blue-300">
            Clique para upload
          </span>{' '}
          ou arraste e solte
        </span>

        <span className="text-xs">SVG, PNG, JPG or GIF (max. 800x400px)</span>
      </div>
    </label>
  )
}
