import Link from "next/link";
import { FiChevronLeft, FiCommand, FiMenu, FiSearch } from "react-icons/fi";
import { BsGithub, BsTwitter, BsInstagram } from 'react-icons/bs'

export const Navbar = () => (
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

      <div className="flex items-center p-3 mx-auto md:w-full 2xl:max-w-3xl xl:max-w-[40rem] max-w-3xl bg-slate-100 rounded-xl">
        <FiSearch className="w-5 h-5 ml-3 text-slate-500" />
        <input className="w-full bg-transparent focus:outline-none active:outline-none" placeholder="جستجو در مستندات" />
        <div dir="ltr" className="flex items-center px-1 text-xs border rounded bg-slate-300 border-slate-400"> <FiCommand /><span>+k</span></div>
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