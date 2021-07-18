
import Link from 'next/link'

export const AppCatalog = ({ platform, title, href }) => (
  <Link href={href} passHref>
    <a href="#" className="ml-2 mb-2 text-gray-700 hover:text-gray-800 hover:shadow transition-all duration-150 ease-in-out">
      <div className="flex flex-col items-center space-y-2 cursor-pointer p-6 rounded-lg shadow transition duration-100 ease-in-out ">
        <img src={`https://fing.ir/images/frameworks/${platform}.svg`} className="w-16 h-16" />
        <div>{title}</div>
      </div>
    </a>
  </Link>
)

export const Catalog = (props) => (
  <div className="flex flex-wrap" {...props} />
)