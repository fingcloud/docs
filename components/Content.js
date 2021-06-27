import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'

export const Content = ({ children }) => (
  <div className="w-full">
    <header className="flex items-center justify-end py-6 px-8">
      <Link href="https://dashboard.fing.ir/login" passHref>
        <a className="text-gray-600 hover:text-gray-700">ورود<FiArrowLeft className="inline-block mr-2" /></a>
      </Link>
    </header>
    <main className="p-8">
      {children}
    </main>
  </div>
)