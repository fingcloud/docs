import { sidebarItems } from "data/sidebar"
import { useRouter } from "next/dist/client/router"
import Link from 'next/link'

export const Sidebar = () => {
  const router = useRouter()

  return (
    <>
      <div className="hidden h-full md:block w-60 shrink-0"></div>
      <nav className="z-40 bg-white hidden md:block fixed top-0 pt-36 pb-16 pr-0.5 w-[calc(100%-1rem)] md:w-60 h-full max-h-screen md:text-[13px] text-navy docs-left-sidebar overflow-y-auto leading-5">
        {sidebarItems.map((item, index) => (
          <dl key={index} className="leading-5">
            <dt className="flex pb-1 text-base font-bold md:justify-start sm:justify-center">{item.title}</dt>
            <dd key={index} className="mb-8 border-r border-gray-100">
              {item.pages.map((page, index) => (
                <Link key={index} href={page.slug} passHref scroll={true}><a className={`flex items-center hover:text-blue-600 text-sm transition-colors py-1 border-r-[3px] pr-4 -mr-0.5 hover:border-blue-500 ${router.asPath.split("#")[0] === page.slug ? 'text-blue-500 border-blue-500 font-semibold' : 'text-gray-700 border-transparent'}`}>
                  {page.icon && <img className="w-5 ml-2.5 -mr-1" src={`https://raw.githubusercontent.com/fingcloud/devicon/master/icons/${page.icon}`} />}
                  <span>{page.label}</span>
                </a></Link>
              ))}
            </dd>
          </dl>
        ))}
      </nav>
    </>
  )
}