import Link from 'next/link'
import { sidebarItems } from 'data/sidebar'
import { useRouter } from 'next/dist/client/router'
import { useMemo } from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

export const Content = ({ children }) => {
  const { pathname } = useRouter()

  const editLink = useMemo(() => {
    const page = pathname.endsWith("/") ? pathname + "index" : pathname
    return `https://github.com/fingcloud/docs/edit/main/pages${page}.mdx`
  }, [pathname])

  const [prevPage, nextPage] = useMemo(() => {
    const sectionIndex = sidebarItems.findIndex(s => s.pages.find(p => p.slug === pathname))
    const pageIndex = sidebarItems[sectionIndex].pages.findIndex(p => p.slug === pathname)

    const prevSection = sidebarItems[sectionIndex - 1]
    const currentSection = sidebarItems[sectionIndex]
    const nextSection = sidebarItems[sectionIndex + 1]

    const prevPage =
      pageIndex === 0
        ? prevSection != null
          ? prevSection.pages[prevSection.pages.length - 1]
          : null
        : currentSection.pages[pageIndex - 1];

    const nextPage =
      pageIndex === currentSection.pages.length - 1
        ? nextSection != null
          ? nextSection.pages[0]
          : null
        : currentSection.pages[pageIndex + 1];

    return [prevPage, nextPage]
  }, [pathname])

  return (
    <div className="w-full">
      <header className="flex items-center justify-end pt-6 pb-2 px-8">
        <Link href="https://dashboard.fing.ir/" passHref>
          <a className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-1.5 rounded transition-all duration-100">داشبورد<FiArrowLeft className="inline-block mr-2" /></a>
        </Link>
      </header>

      <main className="px-8">
        {children}
      </main>

      <div className="px-8 my-8">
        <div className="flex items-center justify-between space-x-4 mb-8">
          {prevPage
            ? <Link href={prevPage.slug} passHref>
              <a className="text-indigo-500 hover:text-indigo-600 block font-medium text-lgrounded-md transition-all duration-150">
                <div className="text-gray-600 text-sm text-right" ><FiArrowRight className="inline-block ml-2" size="18" />قبلی</div>
                {prevPage.label}
              </a>
            </Link>
            : <div />
          }
          {nextPage
            ? <Link href={nextPage.slug} passHref>
              <a className="text-indigo-500 hover:text-indigo-600 block font-medium text-lgrounded-md transition-all duration-150">
                <div className="text-gray-600 text-sm text-left" >بعدی<FiArrowLeft className="inline-block mr-2" size="18" /></div>
                {nextPage.label}
              </a>
            </Link>
            : <div />
          }
        </div>
      </div>

      <hr className="mx-8" />
      <div className="flex items-center justify-start px-8 my-4">
        <Link href={editLink} passHref>
          <a className="text-sm text-gray-500 hover:text-indigo-600">این صفحه را در گیت‌هاب ویرایش کنید</a>
        </Link>
      </div>
    </div>
  )
}