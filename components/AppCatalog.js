
import Link from 'next/link'

export const AppCatalog = ({ title, href, icon, src }) => (
  <Link href={href} passHref>
    <a href="#" className="mb-2 ml-2 text-gray-700 transition-all duration-150 ease-in-out hover:text-gray-800">
      <div className="flex flex-col items-center p-6 space-y-2 transition duration-200 ease-in-out rounded border border-gray-150 cursor-pointer hover:border-blue-600 hover:bg-blue-50">
        <img src={`${icon ? `https://raw.githubusercontent.com/fingcloud/devicon/master/icons/${icon}` : `${src}`}`} className="w-16 h-16" />
        <div>{title}</div>
      </div>
    </a>
  </Link>
)

export const Catalog = (props) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7" {...props} />
)
