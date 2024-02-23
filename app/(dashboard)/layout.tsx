import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { ReactNode } from 'react'

type DashboardLayoutProps = {
  children: ReactNode
}

const links = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/journal',
    label: 'Journal',
  },
  {
    href: '/history',
    label: 'History',
  },
]
const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="h-screen w-screen relative">
      <aside className="absolute top-0 w-[200px] left-0 h-full border-r border-black/10">
        <div>Mood</div>
        <ul>
          {links.map((link) => (
            <li key={link.label} className="px-2 py-6 text-xl">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </aside>
      <div className="ml-[200px] h-full">
        <header className="h-[60px] border-b border-black/10">
          <div className="h-full w-full px-6 flex items-center justify-end">
            <UserButton />
          </div>
        </header>
        <div className="h-[calc(100vh-60px)]">{children}</div>
      </div>
    </div>
  )
}

export default DashboardLayout
