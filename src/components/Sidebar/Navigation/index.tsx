import {
  BarChart3, CalendarDays, CircleDollarSign,
  FileBarChart, ShoppingCart, UsersRound
} from 'lucide-react'

import { NavItem } from './NavItem'

export interface NavigationProps {}

export function Navigation(props: NavigationProps) {
  return (
    <nav className="flex flex-col gap-0.5">
      <NavItem icon={BarChart3} title="Dashboard" />
      <NavItem icon={UsersRound} title="Cadastros" />
      <NavItem icon={CalendarDays} title="Compromissos" />
      <NavItem icon={ShoppingCart} title="Vendas" />
      <NavItem icon={CircleDollarSign} title="Compras" />
      <NavItem icon={FileBarChart} title="Relatórios" />
    </nav>
  )
}
