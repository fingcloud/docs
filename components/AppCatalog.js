
import Link from 'next/link'

export const AppCatalog = ({ title, href, icon, src }) => (
  <Link href={href} passHref>
    <a href="#" className="mb-2 ml-2 text-gray-700 transition-all duration-150 ease-in-out hover:text-gray-800 hover:shadow">
      <div className="flex flex-col items-center p-6 space-y-2 transition duration-100 ease-in-out rounded-lg shadow cursor-pointer ">
        <img src={`${icon ? `https://raw.githubusercontent.com/fingcloud/devicon/master/icons/${icon}` : `${src}`}`} alt={title} className="w-16 h-16" />
        <div>{title}</div>
      </div>
    </a>
  </Link>
)

export const Catalog = (props) => (
  <div className="flex flex-wrap" {...props} />
)
