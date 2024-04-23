'use client'

import { useSideBar } from "@/contexts/sidebar.context"
import { CollapseButton } from "./CollapseButton"

type LogoProps = {
  size?: number
  circleColor?: string
  letterColor?: string
}

export function Logo({
  size = 38,
  circleColor = '#0e8dcc',
  letterColor = '#fff',
}: LogoProps) {
  const { isCollapsed } = useSideBar()

  return (
    <div className="flex w-full h-11 items-center justify-between">
      <div className="ml-1 flex flex-1 items-center gap-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100">      
        <svg
          width={size}
          height={size}
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit={2}
        >
          <ellipse
            cx={510.251}
            cy={468.996}
            rx={197.541}
            ry={204.504}
            fill={circleColor}
            transform="translate(-226.801 -226.654) matrix(.07608 0 0 .07604 206.727 213.443) matrix(1.26429 0 0 1.22187 -131.501 -149.43)"
          />
          <path
            d="M328.083 438.091l378.768.203 8.837-5.041-59.479-42.333-.239-.158c-47.151 38.66-168.551 47.378-226.162 23.038l-.238-.116 109.17-22.505-42.503-37.225-94.011 21.639-.375-.015c8.917-46.731 82.443-77.141 187.346-77.778l.329-.145-44.257-62.856-.378-.016c-94.19-.207-355.688 81.849-217.326 203.047"
            fill={letterColor}
            transform="translate(-226.801 -226.654) matrix(.07608 0 0 .07604 206.727 213.443) matrix(.8495 0 0 1.60633 82.01 -142.356)"
          />
        </svg>
        <span className={isCollapsed ? "sr-only opacity-0" : "opacity-0 lg:opacity-100 transition-opacity duration-700 truncate"}>Eddie ERP</span>
      </div>
      <CollapseButton />
    </div>
  )
}
