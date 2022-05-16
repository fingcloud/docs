import Link from "next/link"
import { useEffect } from "react"

export const TableOfContent = ({ headers }) => {
  useEffect(() => {
    const links = Array.from(document.querySelectorAll(`.outline-list a`))
    const headings = Array.from(document.querySelectorAll('article h2 a, article h3 a'))
    let previousElement

    const elementOn = (e) => {
      if (!e) return
      if (!e.classList.contains('avtive')) {
        e.classList.add('font-bold')
        e.classList.add("text-blue-500")
        e.classList.add("border-blue-500")
        e.classList.add("avtive")
        e.classList.remove("border-transparent")
      }
    }

    const elementOff = (e) => {
      if (!e) return
      e.classList.remove('font-bold')
      e.classList.remove('text-blue-500')
      e.classList.remove('border-blue-500')
      e.classList.remove("avtive")
      e.classList.add('border-transparent')
    }

    const highlightFirstActive = () => {
      const firstActive = headings.find(h => h.visible)
      if (firstActive) {
        const outlineLink = links.find(item => item.getAttribute('href') == firstActive.getAttribute('href'))
        if (previousElement) elementOff(previousElement)
        elementOn(outlineLink)
        previousElement = outlineLink
      }
    }

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        const headingIndex = headings.findIndex(item => h.getAttribute('href') === entry.target.getAttribute('href'))
        if (headingIndex !== -1) {
          if (entry.isIntersecting && 1 <= entry.intersectionRatio) {
            headings[headingIndex].visible = true
          } else {
            headings[headingIndex].visible = false
          }
        }
        highlightFirstActive()
      })
    }, { threshold: [0, 1], rootMargin: '0px' })

    headings.forEach(el => observer.observe(el))
  }, [])

  return (
    <>
      <div className="hidden h-full xl:block w-60 shrink-0"></div>
      <div className="hidden xl:block fixed top-0 pt-36 pb-16 pl-0.5 w-60 h-full md:text-[13px] right-auto left-[2rem]">
        <p href="#" className="flex items-center text-sm font-semibold transition-colors pb-1 -ml-0.5 mb-1">فهرست مطلب</p>
        <nav className="relative flex flex-col">
          <div className="absolute right-0 top-0 w-[1px] h-full bg-gray-100 origin-top"></div>
          <ul className="outline-list">
            {headers?.map((item, index) => (
              <li key={index} className={`border-r ${item.depth === 3 ? 'mr-4' : item.depth === 4 ? 'mr-8' : ''}`}>
                <Link href={item.url} passHref scroll={true}>
                  <a className="relative flex hover:text-blue-600 transition-colors border-transparent py-1 border-r-[2px] pr-4 -mr-0.5 hover:border-blue-500 visible toc-item">{item.text}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}