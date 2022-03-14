import Link from "next/link";
import { useEffect, useRef } from "react";


export const TableOfContent = ({ headers }) => {
  useEffect(() => {
    const headings = document.querySelectorAll('article h2 a, article h3 a')

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        const el = Array.from(document.querySelectorAll(`.outline-list a`))
          .find(item => item.getAttribute('href') == entry.target.getAttribute('href'))

        if (!el) return
        if (entry.isIntersecting) {
          if (!el.classList.contains('font-bold')) {
            el.classList.add('font-bold')
            el.classList.add("text-blue-500")
            el.classList.add("border-blue-500")
            el.classList.remove("border-transparent")
          }
        } else if (el.classList.contains('font-bold')) {
          el.classList.remove('font-bold')
          el.classList.remove('text-blue-500')
          el.classList.remove('border-blue-500')
          el.classList.add('border-transparent')
        }
      })
    }, { threshold: 1, rootMargin: '0px' })

    headings.forEach(el => observer.observe(el))
  }, [])


  return (
    <>
      <div className="hidden h-full xl:block w-60 shrink-0"></div>
      <div className="hidden xl:block fixed top-0 pt-36 pb-16 pl-0.5 w-60 h-full md:text-[13px] left-auto" style={{ right: "calc(50vw + 31rem)" }}>
        <a href="#" className="flex items-center text-sm font-semibold hover:text-blue-600 transition-colors pb-1 -ml-0.5 mb-1">فهرست مطلب</a>
        <nav className="relative flex flex-col">
          <div className="absolute right-0 -mr-0.5 top-0 w-[1px] h-full bg-gray-100 origin-top"></div>
          <ul className="outline-list">
            {headers?.map((item, index) => (
              <li key={index}>
                <Link href={item.url} passHref scroll={true}>
                  <a className="relative flex hover:text-blue-600 transition-colors py-1 border-r-[2px] pr-4 -mr-0.5 border-transparent hover:border-blue-500 visible toc-item">{item.text}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}