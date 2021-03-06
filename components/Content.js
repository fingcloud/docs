import Link from 'next/link'
import { useMemo } from 'react'
import { sidebarItems } from 'data/sidebar'
import { useRouter } from 'next/dist/client/router'
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
    <div className="min-w-0 w-full max-w-3xl xl:max-w-[40rem] 2xl:max-w-3xl mx-auto">

      <div className="min-w-0 w-full max-w-3xl xl:max-w-[40rem] 2xl:max-w-3xl mx-auto">
        <article className="leading-relaxed">
          {children}
        </article>
      </div>

      <div className="px-8 my-8">
        <div className="flex items-center justify-between mb-8 space-x-4">
          {prevPage
            ? <Link href={prevPage.slug} passHref>
              <a className="block text-lg font-medium text-right text-blue-500 transition-all duration-150 hover:text-blue-600 text-lgrounded-md">
                <div className="text-sm text-gray-600 " ><FiArrowRight className="inline-block ml-2" size="18" />????????</div>
                {prevPage.label}
              </a>
            </Link>
            : <div />
          }
          {nextPage
            ? <Link href={nextPage.slug} passHref>
              <a className="block text-lg font-medium text-left text-blue-500 transition-all duration-150 hover:text-blue-600 text-lgrounded-md">
                <div className="text-sm text-gray-600" >????????<FiArrowLeft className="inline-block mr-2" size="18" /></div>
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
          <a className="text-sm text-gray-500 hover:text-blue-600">?????? ???????? ???? ???? ??????????????? ???????????? ????????</a>
        </Link>
      </div>
    </div>
  )
}