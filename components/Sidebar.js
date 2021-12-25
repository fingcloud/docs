import { sidebarItems } from "data/sidebar"
import { useRouter } from "next/dist/client/router"
import Link from 'next/link'

export const Sidebar = () => {
  const router = useRouter()

  return (
    <div className="sticky top-0 h-screen overflow-y-auto border-l w-80 ">
      <div className="flex items-center justify-between py-6">
        <Link href="/" passHref>
          <a className="flex items-center">
            <img src="https://fing.ir/images/icon.png" className="w-10 h-10 ml-4 md:w-12 md:h-12" alt="icon" />
            <div className="text-lg font-medium text-gray-800">مستندات فینگ</div>
          </a>
        </Link>
      </div>

      {sidebarItems.map((item, index) => (
        <div key={index}>
          <h5 className="px-4 my-2 font-extrabold">{item.title}</h5>
          <ul key={index} className="mb-6 list-none">
            {item.pages.map((page, index) => (
              <li key={index}>
                <Link href={page.slug} passHref><a className={`transition-all duration-100 text-gray-700 block py-2 px-4 text-sm ${router.asPath === page.slug ? 'bg-blue-100 text-blue-500 border-r-2 border-blue-500' : 'text-gray-700'}`}>{page.label}</a></Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}