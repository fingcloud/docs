import { Fragment, useCallback, useEffect, useMemo, useState } from 'react'
import Link from "next/link";
import { Dialog, Transition } from '@headlessui/react'
import { FiArrowLeft, FiChevronLeft, FiCommand, FiMenu, FiSearch } from "react-icons/fi";
import { BsGithub, BsTwitter, BsInstagram } from 'react-icons/bs'
import { debounce } from 'lodash';

export const Navbar = () => {
  const [result, setResult] = useState([])
  const [search, setSearch] = useState('')
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const handleEsc = useCallback((e) => {
    if (e.key === 'Escape') {
      setIsSearchOpen(false)
      setSearch('')
      setResult([])
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleEsc, false)
    return () => document.removeEventListener('keydown', handleEsc, false)
  }, [])

  useEffect(() => {
    const delayed = setTimeout(async () => {
      if (!search) return

      const result = await fetch(`/api/search?q=${search}`).then(res => res.json())
      setResult(result)
    }, 400)

    return () => clearTimeout(delayed)
  }, [search])

  return (
    <header className="fixed top-0 left-0 z-50 w-full h-20 bg-white border-b border-slate-200">
      <div style={{ gridTemplateColumns: "auto 1fr auto" }} className="grid items-center justify-between w-full h-full px-4 mx-auto max-w-screen-2xl sm:px-6 lg:px-8 text-navy">
        <div className="relative z-50 flex md:w-60">
          <Link href="/" passHref>
            <a className="flex items-center">
              <img src="https://fing.ir/images/icon.png" className="w-10 h-10 ml-4 md:w-12 md:h-12" alt="icon" />
              <div className="flex items-center space-x-1 space-x-reverse">
                <div className="hidden text-lg font-black lg:block text-slate-800">فینگ</div>
                <FiChevronLeft />
                <div className="hidden lg:block">مستندات</div>
              </div>
            </a>
          </Link>
        </div>

        <div className="flex items-center p-3 mx-auto md:w-full 2xl:max-w-3xl xl:max-w-[40rem] max-w-3xl bg-slate-100 rounded-xl" onClick={() => setIsSearchOpen(true)} >
          <FiSearch className="w-5 h-5 ml-3 text-slate-500" />
          <input className="w-full bg-transparent focus:outline-none active:outline-none" disabled placeholder="جستجو در مستندات" />
          <div dir="ltr" className="flex items-center px-1 text-xs border rounded bg-slate-300 border-slate-400"> <FiCommand /><span>+k</span></div>

          <Transition appear show={isSearchOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={() => setIsSearchOpen(false)}>
              <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0" >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex items-center justify-center p-4">
                  <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                    <Dialog.Panel className="w-full md:w-full 2xl:max-w-3xl xl:max-w-[40rem] max-w-3xl overflow-hidden align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                      <input className="w-full p-6 bg-transparent focus:outline-none active:outline-none" placeholder="جستجو در مستندات" value={search} onChange={(e) => setSearch(e.target.value)} />
                      {!!result.length &&
                        <div className="flex flex-col gap-4 p-6">
                          {result.map((item, index) => (
                            <a href={item.href} key={index} className="flex items-center justify-between group group-hover:cursor-pointer">
                              <div className="flex flex-col gap-1">
                                <div className="text-sm font-bold">{item.title}</div>
                                <div className="text-sm">{item.description}</div>
                              </div>
                              <div className="p-3 transition-all bg-gray-200 rounded-xl group-hover:-translate-x-2">
                                <FiArrowLeft />
                              </div>
                            </a>
                          ))}
                        </div>
                      }
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>

        </div>

        <button className="relative p-4 ml-auto mr-2 rounded-lg md:hidden hover:bg-gray-200"><FiMenu /></button>
        <nav className="hidden h-full xl:flex w-60">
          <div className="items-center hidden space-x-3 space-x-reverse text-blue-600 lg:flex">
            <a href="https://github.com/fingcloud">
              <BsGithub className="w-5 h-5" />
            </a>
            <a href="https://twitter.com/fingcloud">
              <BsTwitter className="w-5 h-5" />
            </a>
            <a href="https://instagram.com/fing_ir">
              <BsInstagram className="w-5 h-5" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}