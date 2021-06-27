import { sidebarItems } from "data/sidebar";
import { useRouter } from "next/dist/client/router";
import Link from 'next/link'

export const Sidebar = () => {
  const router = useRouter()

  return (
    <div className="border-l h-screen sticky top-0 overflow-hidden w-80 ">
      <div className="flex items-center justify-between px-4 py-6">
        <div className="flex items-center">
          <img src="https://fing.ir/images/icon.png" className="ml-4 w-8 h-8" alt="icon" />
          <div className="text-gray-800 font-medium text-lg">فینگ</div>
        </div>
      </div>

      {sidebarItems.map((item, index) => (
        <div key={index}>
          <h5 className="font-medium text-sm px-4 my-2">{item.title}</h5>
          <ul key={index} className="mb-6 list-none">
            {item.pages.map((page, index) => (
              <li key={index}>
                <Link href={page.slug} passHref><a className={`text-gray-700 block py-2 px-4 text-sm ${router.asPath === page.slug ? 'bg-indigo-50 text-indigo-500 border-r-2 border-indigo-500' : 'text-gray-700'}`}>{page.label}</a></Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}