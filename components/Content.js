import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'

export const Content = ({ children }) => (
  <div className="w-full">
    <header className="flex items-center justify-end pt-6 pb-2 px-8">
      <Link href="https://dashboard.fing.ir/" passHref>
        <a className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-1.5 rounded transition-all duration-100">داشبورد<FiArrowLeft className="inline-block mr-2" /></a>
      </Link>
    </header>
    <main className="px-8">
      {children}
    </main>
  </div>
)